```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Digimon Landing Page Clone</title>
    <!-- Importing Inter font to match the clean sans-serif look -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- FontAwesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    
    <style>
        /* --- RESET & GLOBAL STYLES --- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: #f2f2f4;
            color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px 20px 0 20px; /* Removed bottom padding for footer */
        }

        /* --- VARIABLES --- */
        :root {
            --primary-green: #a8f348;
            --text-light: #ffffff;
            --text-dark: #1a1a1a;
            --overlay-color: rgba(30, 30, 30, 0.75);
            --card-bg: #ffffff;
        }

        /* --- HERO CARD SECTION --- */
        .hero-card {
            width: 100%;
            max-width: 1200px;
            height: 700px;
            background-image: linear-gradient(var(--overlay-color), var(--overlay-color)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
            background-size: cover;
            background-position: center;
            border-radius: 40px;
            position: relative;
            color: var(--text-light);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            margin-bottom: 20px;
        }

        /* --- NAVIGATION --- */
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 60px;
            width: 100%;
            z-index: 2;
        }

        .logo {
            font-weight: 700;
            font-size: 1.4rem;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

        .nav-links {
            display: flex;
            gap: 40px;
            list-style: none;
        }

        .nav-links a {
            color: #ccc;
            text-decoration: none;
            font-size: 0.95rem;
            transition: color 0.3s;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .nav-links a:hover, .nav-links a.active {
            color: var(--text-light);
        }

        .nav-links i {
            font-size: 0.7rem;
        }

        .auth-buttons {
            display: flex;
            align-items: center;
            gap: 25px;
        }

        .btn-signin {
            color: var(--text-light);
            text-decoration: none;
            font-size: 0.95rem;
        }

        .btn-signup {
            background-color: var(--primary-green);
            color: var(--text-dark);
            padding: 12px 28px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: transform 0.2s;
        }

        .btn-signup:hover {
            transform: scale(1.05);
        }

        /* --- HERO CONTENT --- */
        .hero-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 0 20px;
            margin-top: -40px;
            z-index: 2;
        }

        h1 {
            font-size: 4.5rem;
            font-weight: 600;
            line-height: 1.1;
            margin-bottom: 25px;
            letter-spacing: -1.5px;
            max-width: 900px;
        }

        .sub-text {
            color: #ccc;
            font-size: 1.15rem;
            line-height: 1.6;
            max-width: 600px;
            margin-bottom: 50px;
            font-weight: 300;
        }

        .cta-group {
            display: flex;
            gap: 20px;
        }

        .btn-primary {
            background-color: var(--primary-green);
            color: var(--text-dark);
            padding: 18px 42px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: opacity 0.3s;
            font-size: 1rem;
        }

        .btn-primary:hover {
            opacity: 0.9;
        }

        .btn-secondary {
            background-color: transparent;
            color: var(--text-light);
            border: 1px solid rgba(255,255,255,0.4);
            padding: 18px 42px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 400;
            transition: background 0.3s;
            font-size: 1rem;
        }

        .btn-secondary:hover {
            background-color: rgba(255,255,255,0.1);
            border-color: #fff;
        }

        /* --- LOGO SECTION --- */
        .logos-section {
            width: 100%;
            max-width: 1100px;
            padding: 60px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            opacity: 0.5;
        }

        .client-logo {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 700;
            font-size: 1.5rem;
            color: #888;
            filter: grayscale(100%);
            cursor: default;
            transition: filter 0.3s, opacity 0.3s;
        }
        
        .client-logo:hover {
            filter: grayscale(0%);
            opacity: 1;
            color: #555;
        }

        /* --- QUOTE SECTION --- */
        .quote-section {
            max-width: 950px;
            text-align: left;
            padding: 20px 0 80px 0;
        }

        .quote-text {
            font-size: 2.2rem;
            line-height: 1.4;
            color: #1a1a1a;
            font-weight: 400;
            letter-spacing: -0.5px;
        }

        /* --- PROJECTS SECTION (Cards) --- */
        .projects-section {
            width: 100%;
            max-width: 1200px;
            padding: 0 0 80px 0;
        }

        .section-heading-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 40px;
        }

        .section-title {
            font-size: 3rem;
            font-weight: 600;
            letter-spacing: -1px;
        }

        .see-all-link {
            text-decoration: none;
            color: #1a1a1a;
            font-weight: 500;
            border-bottom: 1px solid #1a1a1a;
            padding-bottom: 2px;
        }

        .project-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
        }

        .project-card {
            background-color: #fff;
            border-radius: 30px;
            overflow: hidden;
            transition: transform 0.3s ease;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .project-card:hover {
            transform: translateY(-8px);
        }

        .project-image-container {
            width: 100%;
            height: 350px;
            overflow: hidden;
            position: relative;
        }

        .project-image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .project-card:hover .project-image-container img {
            transform: scale(1.05);
        }

        .project-info {
            padding: 30px;
        }

        .project-tags {
            display: flex;
            gap: 10px;
            margin-bottom: 15px;
        }

        .tag {
            background-color: #f0f0f0;
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            color: #555;
        }

        .project-title {
            font-size: 1.8rem;
            font-weight: 600;
            margin-bottom: 10px;
        }

        .project-desc {
            color: #666;
            line-height: 1.5;
        }

        /* --- ACCORDION SERVICES SECTION --- */
        .services-accordion-section {
            width: 100%;
            max-width: 1200px;
            padding: 0 0 80px 0;
            display: grid;
            grid-template-columns: 0.8fr 1.2fr;
            gap: 50px;
        }

        .services-left {
            padding-top: 20px;
        }
        
        .services-subtitle {
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 20px;
            font-weight: 600;
        }

        .services-heading {
            font-size: 3rem;
            line-height: 1.1;
            font-weight: 600;
            margin-bottom: 30px;
            letter-spacing: -1px;
        }

        .services-desc {
            color: #666;
            line-height: 1.6;
            margin-bottom: 30px;
        }

        .accordion-container {
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .accordion-item {
            background-color: #fff;
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.3s ease;
            border: 1px solid transparent;
        }

        /* Hover effect logic */
        .accordion-item:hover {
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            border-color: #eee;
        }

        .accordion-header {
            padding: 25px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            width: 100%;
        }

        .accordion-title-group {
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .accordion-number {
            font-size: 1.2rem;
            color: #ccc;
            font-weight: 500;
        }

        .accordion-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: #1a1a1a;
        }

        .accordion-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: background-color 0.3s, transform 0.3s;
        }
        
        .accordion-icon i {
            transform: rotate(0deg);
            transition: transform 0.3s;
        }

        .accordion-body {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.5s ease-out, padding 0.3s ease;
            padding: 0 30px;
            color: #666;
            line-height: 1.6;
        }

        /* Expand on Hover State */
        .accordion-item:hover .accordion-body {
            max-height: 200px;
            padding-bottom: 30px;
        }

        .accordion-item:hover .accordion-icon {
            background-color: var(--primary-green);
            transform: rotate(45deg);
        }
        
        .accordion-item:hover .accordion-number {
            color: var(--primary-green);
        }

        /* --- ADVISOR SECTION --- */
        .advisor-section {
            width: 100%;
            max-width: 1200px;
            padding: 80px 0;
        }

        .advisor-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            margin-top: 40px;
        }

        .advisor-card {
            background: #fff;
            padding: 20px;
            border-radius: 30px;
            text-align: center;
            transition: transform 0.3s ease;
        }

        .advisor-card:hover {
            transform: translateY(-5px);
        }

        .advisor-img {
            width: 100%;
            height: 220px;
            border-radius: 20px;
            object-fit: cover;
            margin-bottom: 20px;
            background-color: #eee;
        }

        .advisor-name {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .advisor-role {
            font-size: 0.9rem;
            color: #888;
        }

        /* --- BLOG SECTION (NEW) --- */
        .blog-section {
            width: 100%;
            max-width: 1200px;
            padding: 0 0 80px 0;
        }

        .blog-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }

        .blog-card {
            background: #fff;
            border-radius: 30px;
            overflow: hidden;
            transition: transform 0.3s ease;
            cursor: pointer;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .blog-card:hover {
            transform: translateY(-8px);
        }

        .blog-img-container {
            height: 240px;
            overflow: hidden;
            position: relative;
        }

        .blog-img-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .blog-card:hover .blog-img-container img {
            transform: scale(1.05);
        }

        .blog-content {
            padding: 25px;
        }

        .blog-date {
            font-size: 0.85rem;
            color: #888;
            margin-bottom: 10px;
            display: block;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            font-weight: 500;
        }

        .blog-title {
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 15px;
            line-height: 1.4;
            color: #1a1a1a;
        }

        .read-more {
            font-size: 0.9rem;
            font-weight: 600;
            color: #1a1a1a;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: color 0.3s;
        }

        .read-more:hover {
            color: #555;
            text-decoration: underline;
        }

        /* --- FOOTER SECTION --- */
        footer {
            width: 100%;
            background-color: #1a1a1a;
            color: #fff;
            border-top-left-radius: 40px;
            border-top-right-radius: 40px;
            padding: 80px 60px 40px 60px;
            margin-top: 40px;
            /* Make footer stretch full width relative to body padding */
            margin-left: -20px;
            margin-right: -20px;
            width: calc(100% + 40px);
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            gap: 40px;
        }

        .footer-left h2 {
            font-size: 3rem;
            line-height: 1.1;
            margin-bottom: 30px;
            font-weight: 600;
        }

        .footer-btn {
            background-color: var(--primary-green);
            color: #1a1a1a;
            padding: 16px 32px;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            display: inline-block;
            transition: transform 0.2s;
        }

        .footer-btn:hover {
            transform: scale(1.05);
        }

        .footer-links-group {
            display: flex;
            gap: 60px;
        }

        .footer-col h4 {
            color: #888;
            margin-bottom: 20px;
            font-weight: 500;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        .footer-col ul {
            list-style: none;
        }

        .footer-col li {
            margin-bottom: 12px;
        }

        .footer-col a {
            color: #fff;
            text-decoration: none;
            font-size: 1rem;
            transition: color 0.2s;
        }

        .footer-col a:hover {
            color: var(--primary-green);
        }

        .footer-bottom {
            max-width: 1200px;
            margin: 60px auto 0;
            padding-top: 30px;
            border-top: 1px solid rgba(255,255,255,0.1);
            display: flex;
            justify-content: space-between;
            color: #666;
            font-size: 0.9rem;
        }

        /* --- RESPONSIVE --- */
        @media (max-width: 1024px) {
            h1 { font-size: 3.5rem; }
            .hero-card { height: 600px; }
            nav { padding: 30px; }
            .services-accordion-section { grid-template-columns: 1fr; gap: 30px; }
            .advisor-grid { grid-template-columns: repeat(2, 1fr); }
            .blog-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
            body { padding: 20px 10px 0 10px; }
            h1 { font-size: 2.5rem; }
            .hero-card { height: auto; padding-bottom: 60px; border-radius: 20px; }
            .logos-section { flex-wrap: wrap; justify-content: center; gap: 30px; padding: 40px 0; }
            nav { padding: 20px; flex-direction: column; gap: 20px; }
            .nav-links { display: none; }
            .quote-text { font-size: 1.5rem; padding: 0 10px; text-align: center; }
            .cta-group { flex-direction: column; width: 100%; max-width: 300px; }
            .btn-primary, .btn-secondary { width: 100%; text-align: center; }
            .auth-buttons { width: 100%; justify-content: center; margin-top: 10px;}
            
            .project-grid { grid-template-columns: 1fr; }
            .services-accordion-section { display: flex; flex-direction: column; }
            .accordion-header { padding: 20px; }
            
            footer { padding: 40px 20px; border-radius: 20px 20px 0 0; width: calc(100% + 20px); margin-left: -10px; margin-right: -10px;}
            .footer-content { flex-direction: column; }
            .footer-links-group { flex-direction: column; gap: 30px; }
            .advisor-grid { grid-template-columns: 1fr; }
            .blog-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

    <!-- Main Hero Card -->
    <div class="hero-card">
        <nav>
            <div class="logo">DIGIMON</div>
            
            <ul class="nav-links">
                <li><a href="#" class="active">Home <i class="fas fa-chevron-down"></i></a></li>
                <li><a href="#">About <i class="fas fa-chevron-down"></i></a></li>
                <li><a href="#">Services <i class="fas fa-chevron-down"></i></a></li>
                <li><a href="#">Advisor</a></li>
            </ul>

            <div class="auth-buttons">
                <a href="#" class="btn-signin">Sign in</a>
                <a href="#" class="btn-signup">Sign Up</a>
            </div>
        </nav>

        <div class="hero-content">
            <h1>WE BUILD AND SCALE DIGITAL PRODUCT</h1>
            <p class="sub-text">Founding successful companies by combining ideas with business expertise, capital and technical execution.</p>
            
            <div class="cta-group">
                <a href="#" class="btn-primary">Get Started</a>
                <a href="#" class="btn-secondary">How it work</a>
            </div>
        </div>
    </div>

    <!-- Client Logos Section -->
    <div class="logos-section">
        <div class="client-logo"><i class="fas fa-book-open"></i> PAPERZ</div>
        <div class="client-logo" style="font-family: 'Times New Roman', serif; font-style: italic;">Dorfus</div>
        <div class="client-logo"><i class="fas fa-cube"></i> Martino</div>
        <div class="client-logo"><i class="far fa-square"></i> square</div>
        <div class="client-logo"><i class="fas fa-bolt"></i> Gobona</div>
    </div>

    <!-- Quote Section -->
    <div class="quote-section">
        <p class="quote-text">
            “People build websites, develop brands, and build shops selling stuff. a better internet, for people, one site at a time. we work better and more efficiently than others.”
        </p>
    </div>

    <!-- 1. BEST PROJECT SECTION (Cards) -->
    <div class="projects-section">
        <div class="section-heading-row">
            <h2 class="section-title">Best Projects</h2>
            <a href="#" class="see-all-link">See all projects</a>
        </div>

        <div class="project-grid">
            <!-- Project 1 -->
            <div class="project-card">
                <div class="project-image-container">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Finance App">
                </div>
                <div class="project-info">
                    <div class="project-tags">
                        <span class="tag">UI/UX Design</span>
                        <span class="tag">Development</span>
                    </div>
                    <h3 class="project-title">Fintech Dashboard</h3>
                    <p class="project-desc">A comprehensive financial dashboard for modern banking solutions.</p>
                </div>
            </div>

            <!-- Project 2 -->
            <div class="project-card">
                <div class="project-image-container">
                    <img src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Mobile App">
                </div>
                <div class="project-info">
                    <div class="project-tags">
                        <span class="tag">Mobile App</span>
                        <span class="tag">Strategy</span>
                    </div>
                    <h3 class="project-title">E-Commerce Mobile App</h3>
                    <p class="project-desc">Seamless shopping experience with integrated payment gateways.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- 2. OUR SERVICES (Accordion) SECTION -->
    <div class="services-accordion-section">
        <div class="services-left">
            <div class="services-subtitle">Our Services</div>
            <h2 class="services-heading">We help you to build your business.</h2>
            <p class="services-desc">
                We combine creative design with technical expertise to deliver solutions that drive growth and efficiency.
            </p>
            <a href="#" class="btn-primary" style="display: inline-block;">View All Services</a>
        </div>

        <div class="accordion-container">
            <!-- Item 1 -->
            <div class="accordion-item">
                <div class="accordion-header">
                    <div class="accordion-title-group">
                        <span class="accordion-number">01</span>
                        <span class="accordion-title">Business Strategy</span>
                    </div>
                    <div class="accordion-icon"><i class="fas fa-plus"></i></div>
                </div>
                <div class="accordion-body">
                    We analyze market trends and internal capabilities to craft strategies that position your business for long-term success and scalability.
                </div>
            </div>

            <!-- Item 2 -->
            <div class="accordion-item">
                <div class="accordion-header">
                    <div class="accordion-title-group">
                        <span class="accordion-number">02</span>
                        <span class="accordion-title">Product Design</span>
                    </div>
                    <div class="accordion-icon"><i class="fas fa-plus"></i></div>
                </div>
                <div class="accordion-body">
                    From wireframes to high-fidelity prototypes, we design user-centric products that are both beautiful and functional.
                </div>
            </div>

            <!-- Item 3 -->
            <div class="accordion-item">
                <div class="accordion-header">
                    <div class="accordion-title-group">
                        <span class="accordion-number">03</span>
                        <span class="accordion-title">Web Development</span>
                    </div>
                    <div class="accordion-icon"><i class="fas fa-plus"></i></div>
                </div>
                <div class="accordion-body">
                    Our engineering team builds robust, scalable web applications using the latest technologies to ensure performance and security.
                </div>
            </div>

            <!-- Item 4 -->
            <div class="accordion-item">
                <div class="accordion-header">
                    <div class="accordion-title-group">
                        <span class="accordion-number">04</span>
                        <span class="accordion-title">Digital Marketing</span>
                    </div>
                    <div class="accordion-icon"><i class="fas fa-plus"></i></div>
                </div>
                <div class="accordion-body">
                    We drive traffic and conversions through targeted SEO, social media campaigns, and data-driven marketing strategies.
                </div>
            </div>
        </div>
    </div>

    <!-- 3. BOARD OF ADVISORS SECTION -->
    <div class="advisor-section">
        <div class="section-heading-row">
            <h2 class="section-title">Board of Advisors</h2>
            <a href="#" class="see-all-link">See all team</a>
        </div>

        <div class="advisor-grid">
            <div class="advisor-card">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80" alt="Advisor 1" class="advisor-img">
                <h3 class="advisor-name">James Carter</h3>
                <p class="advisor-role">Strategic Advisor</p>
            </div>
            <div class="advisor-card">
                <img src="https://images.unsplash.com/photo-1573496359-136d475523dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80" alt="Advisor 2" class="advisor-img">
                <h3 class="advisor-name">Sarah Jenkins</h3>
                <p class="advisor-role">Financial Consultant</p>
            </div>
            <div class="advisor-card">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80" alt="Advisor 3" class="advisor-img">
                <h3 class="advisor-name">Michael Ross</h3>
                <p class="advisor-role">Tech Lead</p>
            </div>
            <div class="advisor-card">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1061&q=80" alt="Advisor 4" class="advisor-img">
                <h3 class="advisor-name">Emily Tao</h3>
                <p class="advisor-role">Creative Director</p>
            </div>
        </div>
    </div>

    <!-- 4. BLOG SECTION (NEW) -->
    <div class="blog-section">
        <div class="section-heading-row">
            <h2 class="section-title">Latest News</h2>
            <a href="#" class="see-all-link">View all posts</a>
        </div>

        <div class="blog-grid">
            <!-- Blog Post 1 -->
            <div class="blog-card">
                <div class="blog-img-container">
                    <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Blog 1">
                </div>
                <div class="blog-content">
                    <span class="blog-date">Oct 24, 2023</span>
                    <h3 class="blog-title">The Future of Digital Product Design</h3>
                    <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>

            <!-- Blog Post 2 -->
            <div class="blog-card">
                <div class="blog-img-container">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" alt="Blog 2">
                </div>
                <div class="blog-content">
                    <span class="blog-date">Nov 02, 2023</span>
                    <h3 class="blog-title">How to Scale Your Startup Effectively</h3>
                    <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>

            <!-- Blog Post 3 -->
            <div class="blog-card">
                <div class="blog-img-container">
                    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80" alt="Blog 3">
                </div>
                <div class="blog-content">
                    <span class="blog-date">Nov 15, 2023</span>
                    <h3 class="blog-title">Web Development Trends for 2024</h3>
                    <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>

    <!-- 5. FOOTER SECTION -->
    <footer>
        <div class="footer-content">
            <div class="footer-left">
                <h2>Let’s discuss<br>your project.</h2>
                <a href="#" class="footer-btn">Contact Us</a>
            </div>

            <div class="footer-links-group">
                <div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Strategy</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Development</a></li>
                        <li><a href="#">Marketing</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Social</h4>
                    <ul>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Dribbble</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>&copy; 2023 Digimon Inc. All rights reserved.</p>
            <p>Privacy Policy &bull; Terms of Service</p>
        </div>
    </footer>

</body>
</html>
```