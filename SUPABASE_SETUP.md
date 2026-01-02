# Supabase Setup Guide

This guide will help you set up the database table and policies in Supabase to store client inquiries from the "Get Started" form.

## Step 1: Run the SQL Schema

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor** (in the left sidebar)
3. Click **New Query**
4. Copy and paste the entire contents of `supabase-schema.sql`
5. Click **Run** (or press Ctrl+Enter)

This will create:
- `client_inquiries` table with all necessary fields
- Indexes for better query performance
- Row Level Security (RLS) policies that allow anonymous inserts
- A trigger to automatically update `updated_at` timestamp
- A summary view for easy querying

**Note:** If you already ran the schema before, running it again will update the RLS policy to use `TO public` instead of `TO anon`, which ensures it works correctly with the API route.

## Step 2: Verify the Table

1. Go to **Table Editor** in Supabase
2. You should see the `client_inquiries` table
3. Check that it has the following columns:
   - `id` (UUID, primary key)
   - `name` (text)
   - `email` (text)
   - `phone` (text)
   - `project_name` (text)
   - `services` (text array)
   - `additional_notes` (text, nullable)
   - `status` (text, default: 'new')
   - `created_at` (timestamp)
   - `updated_at` (timestamp)

## Step 3: Verify RLS Policies

1. Go to **Authentication** > **Policies** in Supabase
2. Find the `client_inquiries` table
3. You should see two policies:
   - **Allow anonymous inserts**: Allows form submissions without authentication
   - **Allow authenticated reads**: Allows authenticated users to view inquiries

## Step 4: Test the Form

1. Start your Next.js development server: `npm run dev`
2. Click the "Get Started" button in the navbar
3. Fill out and submit the form
4. Go back to Supabase **Table Editor** > `client_inquiries`
5. You should see your test submission

## Step 5: (Optional) Set Up Email Notifications

You can set up database webhooks in Supabase to send email notifications when new inquiries are submitted:

1. Go to **Database** > **Webhooks** in Supabase
2. Create a new webhook
3. Set the event to trigger on INSERT to `client_inquiries`
4. Configure it to send an email (you'll need to set up an email service)

## Query Examples

### View all inquiries
```sql
SELECT * FROM client_inquiries ORDER BY created_at DESC;
```

### View inquiries by status
```sql
SELECT * FROM client_inquiries WHERE status = 'new' ORDER BY created_at DESC;
```

### View inquiries summary
```sql
SELECT * FROM client_inquiries_summary;
```

### Update inquiry status
```sql
UPDATE client_inquiries 
SET status = 'contacted' 
WHERE id = 'your-inquiry-id';
```

## Status Values

The `status` field can have the following values:
- `new` - New inquiry (default)
- `contacted` - You've contacted the client
- `in_progress` - Project is in progress
- `completed` - Project completed
- `archived` - Archived inquiry

## Troubleshooting

### Form submission fails with 500 error
- Check that the table exists in Supabase
- Verify RLS policies are set up correctly
- Check the Supabase logs in the dashboard

### "Permission denied" error
- Make sure the "Allow anonymous inserts" policy is active
- Verify your Supabase anon key is correct in `.env.local`

### Data not appearing
- Check the browser console for errors
- Verify your API route is working: `http://localhost:3000/api/inquiries`
- Check Supabase logs for database errors

