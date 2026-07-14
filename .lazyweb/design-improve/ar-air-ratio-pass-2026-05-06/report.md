# Design Improvement: AR Air Homepage Ratio Pass

## TL;DR
The wide-browser hero was oversized: the headline stacked too tall, the AC unit dominated the viewport, and the page felt under-designed below the fold. The implemented pass caps hero scale, stages the AC unit, adds hero trust chips, and adds an equipment-led section to make the page feel more premium without reviving the confusing scroll animation.

## Current State
![Current Design](references/current.png)
*Wide viewport capture before the ratio pass. The colors and single AC object were working; the proportions were not.*

## Improvement Ideas

### 1. Product-stage the AC hero ⭐
Use a fixed-ratio visual stage instead of letting the image scale raw with the viewport. This keeps the equipment premium and prevents crop/ratio weirdness.

**Sketch:**
```
[Headline + CTAs + trust chips]     [contained AC product stage]
[Same-day copy]                     [emergency phone card]
```

### 2. Shorten the hero headline
Move refrigeration and electrical into supporting copy and service sections so the headline can convert quickly and fit consistently.

### 3. Add equipment-led depth below services
Use existing HVAC assets as controlled service cards. This makes the page less plain while staying true to the user’s request for 3D HVAC visuals.

### 4. Keep trust close to action
Phone, text, same-day response, emergency service, certification, and service area should be visible before visitors reach the quote form.

## What's Working
- Blue/white palette and AR Air logo usage.
- Single AC object in the hero.
- Direct call/text/request quote pathways.
- Service area and 24/7 emergency message.

## All References
### 1. taskrabbit
![taskrabbit](references/context-01-taskrabbit.png)
*Location-based home services marketplace landing page showing “How it works” steps and a scrollable list of service categories (handyman, furniture assembly, movers, cleaning, mounting, plumbing, electrical, etc. ) with a primary “Book Now” call-to-action for each.*

Source: https://www.taskrabbit.com/locations/fairfield [Lazyweb]

### 2. particle
![particle](references/context-02-particle.png)
*Marketing landing page for an IoT platform focused on HVAC, featuring a hero headline about improving reliability, efficiency, and safety with a primary “Contact your HVAC experts” CTA plus top navigation (Platform, Supported devices, Solutions, Developers, Pricing) and a “Contact sales” button. The page highlights benefits and features in icon-based sections (prevent anomalies, reduce truck rolls, lower energy use, scalable/open/customizable/secure), includes an on-demand webinar promo, customer testimonial, “Why Particle” value props, and a bottom CTA to “Build more profitable HVAC systems today.*

Source: https://www.particle.io/iot-solutions/hvac/ [Lazyweb]

### 3. lemonade
![lemonade](references/context-03-lemonade.png)
*Marketing landing page for a homeowners insurance service with a prominent “Get a quote” call-to-action, illustrated hero section, and social proof including star ratings and customer testimonials. The page highlights lender acceptance logos, explains coverage features and switching/closing benefits, includes an FAQ/education section, pricing/value messaging, partner/impact badges, and cross-sells other insurance products.*

Source: https://www.lemonade.com/homeowners [Lazyweb]

### 4. leaping-ai
![leaping-ai](references/context-04-leaping-ai.png)
*Loglight landing page for home improvement businesses, promoting a service to capture missed calls and convert them into leads through appointment handling and customer time management, with a hero image of a tradesperson, benefit highlights, and prominent CTAs to speak with a specialist or understand how it works.*

Source: https://leapingai.com/ldp/home-remodeling [Lazyweb]

### 5. thumbtack
![thumbtack](references/context-05-thumbtack.png)
*Thumbtack app landing page promoting services for professionals, featuring a central hero section with zip code search input, "Try it" call-to-action button, 5-star rating, mobile app screenshots, and three key feature highlights: smarter custom leads with guidance, organization tools, and easy find-and-book functionality for planning and getting jobs done.*

Source: https://www.thumbtack.com/app [Lazyweb]
