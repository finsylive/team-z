import { createClient } from "../../../../utils/supabase/server";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, projectName, services, preferredTiming, additionalNotes } = body;

    // Validate required fields
    if (!name || !email || !phone || !projectName || !services || services.length === 0) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create Supabase client with anon key (uses RLS policy)
    const cookieStore = cookies();
    const supabase = await createClient(cookieStore);

    // Insert the inquiry into the database
    const { data, error } = await supabase
      .from("client_inquiries")
      .insert([
        {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
          project_name: projectName.trim(),
          services: services,
          preferred_timing: preferredTiming?.trim() || null,
          additional_notes: additionalNotes?.trim() || null,
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to submit inquiry. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: "Inquiry submitted successfully",
        id: data.id 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

