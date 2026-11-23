/* ============================================================
   BHDR INC. — Hotel Renovation Portfolio: data manifest
   ------------------------------------------------------------
   SINGLE SOURCE OF TRUTH for the Projects page and the
   reusable gallery template (gallery.html).

   To add a hotel:
     1. Create  images/projects/hotels/<slug>/  and drop in the
        optimized photos (featured photo first).
     2. Append an entry below. photos[0] = featured/hero image.

   This file is also the migration record for WordPress:
   each object maps cleanly to a CPT entry (name, city, state,
   ordered gallery images with alt text).
   ============================================================ */
window.BHDR_HOTELS = [
  {
    slug: "candlewood-suites-vicksburg",
    name: "Candlewood Suites",
    city: "Vicksburg",
    state: "MS",
    dir: "images/projects/hotels/candlewood-suites-vicksburg",
    photos: [
      { file: "03-guest-room-king.webp",      alt: "Renovated king guest room at Candlewood Suites Vicksburg with sofa and framed artwork" },
      { file: "01-lobby-lounge.webp",        alt: "Renovated lobby lounge at Candlewood Suites Vicksburg with fireplace, lounge seating and a communal table" },
      { file: "02-reception-desk.webp",       alt: "Renovated front desk and reception area at Candlewood Suites Vicksburg" },
      { file: "04-guest-room-king-2.webp",    alt: "Renovated king guest room at Candlewood Suites Vicksburg with lounge chair and window" },
      { file: "05-studio-suite-living.webp",  alt: "Renovated studio suite living area at Candlewood Suites Vicksburg" },
      { file: "06-kitchenette.webp",          alt: "Renovated in-suite kitchenette at Candlewood Suites Vicksburg with full-size appliances" },
      { file: "07-bathroom.webp",             alt: "Renovated accessible bathroom at Candlewood Suites Vicksburg with walk-in shower" },
      { file: "08-meeting-room.webp",         alt: "Renovated meeting room at Candlewood Suites Vicksburg with conference table" },
      { file: "09-market-pantry.webp",        alt: "Renovated Candlewood Cupboard and Coffee market at Candlewood Suites Vicksburg" }
    ]
  },
  {
    slug: "hampton-inn-suites-vicksburg",
    name: "Hampton Inn & Suites",
    city: "Vicksburg",
    state: "MS",
    dir: "images/projects/hotels/hampton-inn-suites-vicksburg",
    photos: [
      { file: "02-guest-room-desk-media.webp",    alt: "Renovated guest room work desk and media console at Hampton Inn & Suites Vicksburg with accent chair and flat-screen TV" },
      { file: "01-guest-room-wet-bar.webp",       alt: "Renovated in-room wet bar and beverage station at Hampton Inn & Suites Vicksburg with quartz counter, bar sink and microwave" },
      { file: "03-bathroom-vanity.webp",          alt: "Renovated guest bathroom vanity at Hampton Inn & Suites Vicksburg with green-framed mirror and walk-in shower" },
      { file: "05-bathroom-vanity-shower.webp",   alt: "Renovated guest bathroom at Hampton Inn & Suites Vicksburg with quartz vanity, walk-in glass shower and open shelving" },
      { file: "06-walk-in-shower.webp",           alt: "Renovated walk-in glass shower with grab bar at Hampton Inn & Suites Vicksburg" },
      { file: "08-bathroom-vanity-detail.webp",   alt: "Renovated guest bathroom vanity and shelving detail at Hampton Inn & Suites Vicksburg" }
    ]
  },
  {
    slug: "tru-by-hilton-mcdonough",
    name: "Tru by Hilton",
    city: "McDonough",
    state: "GA",
    dir: "images/projects/hotels/tru-by-hilton-mcdonough",
    photos: [
      { file: "10-lounge-mcdonough-mural.webp",     alt: "Tru by Hilton McDonough social lounge with a McDonough, Georgia mural, pool table and colorful lounge seating" },
      { file: "01-bathroom-feature-wall.webp",      alt: "Renovated guest bathroom at Tru by Hilton McDonough with a blue geometric feature wall and quartz-top vanity" },
      { file: "02-guest-room-entry-closet.webp",    alt: "Renovated guest room entry at Tru by Hilton McDonough with open wardrobe, striped accent panels and full-length mirror" },
      { file: "03-bathroom-vanity.webp",            alt: "Renovated guest bathroom vanity at Tru by Hilton McDonough with a blue patterned accent wall" },
      { file: "04-bathroom-shower.webp",            alt: "Renovated guest bathroom at Tru by Hilton McDonough with a lit vanity mirror and walk-in glass shower" },
      { file: "05-lobby-privacy-booths.webp",       alt: "Tru by Hilton McDonough lobby with colorful upholstered privacy booths and pendant lighting" },
      { file: "06-fitness-center.webp",             alt: "24-hour fitness center at Tru by Hilton McDonough with cardio equipment and a hydration station" },
      { file: "07-guest-room-two-queens.webp",      alt: "Renovated two-queen guest room at Tru by Hilton McDonough with wood headboards and bedside lighting" },
      { file: "08-guest-corridor.webp",             alt: "Renovated guest corridor at Tru by Hilton McDonough with bold chevron-patterned carpet" },
      { file: "09-lobby-lounge-dining.webp",        alt: "Lobby lounge and dining area at Tru by Hilton McDonough with banquette seating and pendant lights" },
      { file: "11-elevator-landing.webp",           alt: "Renovated elevator landing at Tru by Hilton McDonough with a large floor-number graphic and patterned carpet" },
      { file: "12-lobby-market-pantry.webp",        alt: "Market and grab-and-go pantry at Tru by Hilton McDonough with snacks, beverages and seating" },
      { file: "13-lobby-work-booths.webp",          alt: "Tru by Hilton McDonough lobby with privacy booths and a computer and work station" },
      { file: "14-lobby-lounge-seating.webp",       alt: "Tru by Hilton McDonough lobby lounge with swivel chairs, ottomans and a coffee station" },
      { file: "15-bathroom-vanity-amenities.webp",  alt: "Renovated guest bathroom vanity at Tru by Hilton McDonough with a lit mirror and wall-mounted amenities" },
      { file: "16-guest-room-two-queens-2.webp",    alt: "Renovated two-queen guest room at Tru by Hilton McDonough with wood headboards and modern lighting" },
      { file: "17-bathroom-vanity-detail.webp",     alt: "Renovated guest bathroom vanity detail at Tru by Hilton McDonough with a lit mirror and quartz counter" }
    ]
  },
  {
    slug: "holiday-inn-hoover",
    name: "Holiday Inn",
    city: "Hoover",
    state: "AL",
    dir: "images/projects/hotels/holiday-inn-hoover",
    photos: [
      { file: "13-lobby-great-room.webp",         alt: "Renovated lobby great room at Holiday Inn Hoover with a two-story ceiling, framed Hoover artwork and lounge seating" },
      { file: "01-guest-room-media-wall.webp",    alt: "Renovated guest room media wall and desk at Holiday Inn Hoover with a flat-screen TV and gallery artwork" },
      { file: "02-king-guest-room.webp",          alt: "Renovated king guest room at Holiday Inn Hoover with an upholstered headboard and accent chair" },
      { file: "03-lobby-social-dining.webp",      alt: "Renovated lobby social and dining area at Holiday Inn Hoover with a communal table, fireplace and display shelving" },
      { file: "04-prefunction-corridor.webp",     alt: "Renovated pre-function corridor at Holiday Inn Hoover with live-edge wall art, drum pendants and lounge seating" },
      { file: "05-king-guest-room-desk.webp",     alt: "Renovated king guest room at Holiday Inn Hoover with a work desk, media wall and window seating" },
      { file: "06-guest-bathroom-vanity.webp",    alt: "Renovated guest bathroom at Holiday Inn Hoover with a lit mirror, quartz vanity and walk-in shower" },
      { file: "07-king-guest-room-seating.webp",  alt: "Renovated king guest room at Holiday Inn Hoover with an upholstered headboard, sconces and leather chair" },
      { file: "08-lobby-reception.webp",          alt: "Renovated lobby and reception area at Holiday Inn Hoover with accent chairs, a round banquette and fireplace" },
      { file: "09-guest-corridor.webp",           alt: "Renovated guest corridor at Holiday Inn Hoover with patterned carpet and pendant lighting" },
      { file: "10-prefunction-corridor-2.webp",   alt: "Renovated pre-function corridor at Holiday Inn Hoover with colorful artwork, striped carpet and lounge chairs" },
      { file: "11-public-restroom.webp",          alt: "Renovated public restroom at Holiday Inn Hoover with oval lit mirrors and a double vanity" },
      { file: "12-prefunction-corridor-3.webp",   alt: "Renovated pre-function corridor at Holiday Inn Hoover with large drum pendants and window seating" },
      { file: "14-brand-display.webp",            alt: "Branded display shelving at Holiday Inn Hoover with a framed vintage key tag and decor niches" },
      { file: "15-king-guest-room-3.webp",        alt: "Renovated king guest room at Holiday Inn Hoover with a media wall, desk and accent chair" },
      { file: "16-lobby-social-dining-2.webp",    alt: "Renovated lobby social and dining area at Holiday Inn Hoover with a communal table and fireplace" }
    ]
  },
  {
    slug: "homewood-suites-hoover",
    name: "Homewood Suites",
    city: "Hoover",
    state: "AL",
    dir: "images/projects/hotels/homewood-suites-hoover",
    photos: [
      { file: "16-lobby-lounge-fireplace.webp",   alt: "Renovated lobby lounge at Homewood Suites Hoover with a stone fireplace, curved sofa and lodge-style seating" },
      { file: "01-guest-bathroom-vanity.webp",    alt: "Renovated suite bathroom at Homewood Suites Hoover with a lit mirror, marble vanity and walk-in closet" },
      { file: "02-lobby-reception-market.webp",   alt: "Renovated reception desk and grab-and-go market at Homewood Suites Hoover" },
      { file: "03-guest-corridor.webp",           alt: "Renovated guest corridor at Homewood Suites Hoover with patterned carpet and suite signage" },
      { file: "04-suite-two-queen.webp",          alt: "Renovated two-queen studio suite at Homewood Suites Hoover with a teal headboard and full-length mirror" },
      { file: "05-suite-living-area.webp",        alt: "Renovated suite living area at Homewood Suites Hoover with a sofa, TV console and dining table" },
      { file: "06-suite-king-studio.webp",        alt: "Renovated king studio suite at Homewood Suites Hoover with a bed, lounge chair and work desk" },
      { file: "07-suite-living-area-2.webp",      alt: "Renovated suite living area at Homewood Suites Hoover with a sofa, nesting tables and media console" },
      { file: "08-suite-living-dining.webp",      alt: "Renovated suite living and dining area at Homewood Suites Hoover with a pendant light and sofa" },
      { file: "09-guest-bathroom-vanity-2.webp",  alt: "Renovated suite bathroom vanity at Homewood Suites Hoover with a lit mirror and marble counter" },
      { file: "10-suite-king-studio-2.webp",      alt: "Renovated king studio suite at Homewood Suites Hoover with a teal headboard, desk and media console" },
      { file: "11-suite-living-seating.webp",     alt: "Renovated suite living area at Homewood Suites Hoover with a sofa, floral triptych artwork and desk" },
      { file: "12-lobby-lounge-market.webp",      alt: "Renovated lobby lounge and market at Homewood Suites Hoover with a stone fireplace and accent seating" },
      { file: "13-suite-kitchen.webp",            alt: "Renovated full in-suite kitchen at Homewood Suites Hoover with a stovetop, dishwasher, microwave and dining table" },
      { file: "14-guest-bathroom-shower.webp",    alt: "Renovated suite bathroom at Homewood Suites Hoover with a walk-in glass shower and framed artwork" },
      { file: "15-suite-living-seating-2.webp",   alt: "Renovated suite living area at Homewood Suites Hoover with a sofa, nesting coffee table and side table" }
    ]
  },
  {
    slug: "hampton-inn-meridian",
    name: "Hampton Inn",
    city: "Meridian",
    state: "MS",
    dir: "images/projects/hotels/hampton-inn-meridian",
    photos: [
      { file: "04-reception-welcome.webp",        alt: "Renovated reception desk at Hampton Inn Meridian with a Welcome to the Magnolia feature wall" },
      { file: "01-guest-room-media-desk.webp",    alt: "Renovated guest room media wall and desk at Hampton Inn Meridian with a flat-screen TV and railroad artwork" },
      { file: "02-breakfast-dining.webp",         alt: "Renovated breakfast and dining area at Hampton Inn Meridian with banquette seating and chevron carpet" },
      { file: "03-king-guest-room.webp",          alt: "Renovated king guest room at Hampton Inn Meridian with an orange headboard and Mississippi-themed artwork" },
      { file: "05-fitness-center.webp",           alt: "Renovated fitness center at Hampton Inn Meridian with a treadmill, exercise bike and towels" },
      { file: "06-breakfast-waffle-bar.webp",     alt: "Renovated breakfast bar at Hampton Inn Meridian with a waffle station, buffet and fresh fruit" },
      { file: "07-breakfast-dining-2.webp",       alt: "Renovated breakfast and dining area at Hampton Inn Meridian with dining tables and banquette seating" },
      { file: "08-king-guest-room-2.webp",        alt: "Renovated king guest room at Hampton Inn Meridian with a lounge chair and Mississippi map artwork" },
      { file: "09-fitness-center-2.webp",         alt: "Renovated fitness center at Hampton Inn Meridian with free weights, medicine balls and kettlebells" },
      { file: "10-guest-corridor.webp",           alt: "Renovated guest corridor at Hampton Inn Meridian with patterned blue carpet" },
      { file: "11-king-guest-room-3.webp",        alt: "Renovated king guest room at Hampton Inn Meridian with a desk, round mirror and lounge chair" },
      { file: "12-coffee-station.webp",           alt: "Renovated coffee station and elevator landing at Hampton Inn Meridian with a Mississippi map mural" },
      { file: "13-guest-bathroom-vanity.webp",    alt: "Renovated guest bathroom vanity at Hampton Inn Meridian with an orange-framed mirror and patterned wall" },
      { file: "14-king-guest-room-4.webp",        alt: "Renovated king guest room at Hampton Inn Meridian with an orange headboard and full-length mirror" }
    ]
  },
  {
    slug: "hilton-garden-inn-madison",
    name: "Hilton Garden Inn",
    city: "Madison",
    state: "MS",
    dir: "images/projects/hotels/hilton-garden-inn-madison",
    photos: [
      { file: "25-exterior.webp",                 alt: "Exterior of the renovated Hilton Garden Inn Madison at dusk with the illuminated brand sign and landscaping" },
      { file: "01-guest-room-media-desk.webp",    alt: "Renovated guest room media wall and desk at Hilton Garden Inn Madison with a flat-screen TV and floral artwork" },
      { file: "02-king-guest-room.webp",          alt: "Renovated king guest room at Hilton Garden Inn Madison with a magnolia photograph and red wingback chair" },
      { file: "03-fitness-center.webp",           alt: "Renovated fitness center at Hilton Garden Inn Madison with treadmills, an elliptical and TV" },
      { file: "04-king-guest-room-2.webp",        alt: "Renovated king guest room at Hilton Garden Inn Madison with a magnolia photograph and bedside lighting" },
      { file: "05-lobby-lounge.webp",             alt: "Renovated lobby lounge at Hilton Garden Inn Madison with columns, modern sofas and a market" },
      { file: "06-lobby-great-room-fireplace.webp", alt: "Renovated lobby great room at Hilton Garden Inn Madison with a communal table, fireplace and media wall" },
      { file: "07-guest-bathroom.webp",           alt: "Renovated guest bathroom at Hilton Garden Inn Madison with a lit mirror vanity and framed artwork" },
      { file: "08-lobby-dining.webp",             alt: "Renovated lobby dining area at Hilton Garden Inn Madison with red dining chairs and a sputnik chandelier" },
      { file: "09-king-guest-room-3.webp",        alt: "Renovated king guest room at Hilton Garden Inn Madison with a work desk and red wingback chair" },
      { file: "10-king-guest-room-4.webp",        alt: "Renovated king guest room at Hilton Garden Inn Madison with a magnolia photograph and floating nightstands" },
      { file: "11-indoor-pool-whirlpool.webp",    alt: "Renovated indoor pool and whirlpool at Hilton Garden Inn Madison with loungers and seating" },
      { file: "12-guest-room-entry-pantry.webp",  alt: "Renovated guest room entry at Hilton Garden Inn Madison with closet shelving, a microwave and coffee maker" },
      { file: "13-lobby-seating-windows.webp",    alt: "Renovated lobby seating area at Hilton Garden Inn Madison with a communal table and floor-to-ceiling windows" },
      { file: "14-lobby-dining-bar.webp",         alt: "Renovated lobby dining area and bar at Hilton Garden Inn Madison with red chairs and bar stools" },
      { file: "15-lobby-lounge-shop.webp",        alt: "Renovated lobby lounge and market at Hilton Garden Inn Madison with modern sofas and The Shop" },
      { file: "16-lobby-bar.webp",                alt: "Renovated lobby bar at Hilton Garden Inn Madison with a marble counter, stools and TVs" },
      { file: "17-guest-room-entry-pantry-2.webp", alt: "Renovated guest room entry at Hilton Garden Inn Madison with closet shelving and an in-room pantry" },
      { file: "18-lobby-great-room.webp",         alt: "Renovated lobby great room at Hilton Garden Inn Madison with a fireplace media wall and lounge seating" },
      { file: "19-guest-bathroom-vanity.webp",    alt: "Renovated guest bathroom vanity at Hilton Garden Inn Madison with a lit mirror and wall-mounted amenities" },
      { file: "20-market-shop.webp",              alt: "The Shop market at Hilton Garden Inn Madison with a Mississippi Made Marketplace and grab-and-go cases" },
      { file: "21-indoor-pool.webp",              alt: "Renovated indoor pool at Hilton Garden Inn Madison with arched windows and poolside seating" },
      { file: "22-guest-corridor.webp",           alt: "Renovated guest corridor at Hilton Garden Inn Madison with patterned red carpet" },
      { file: "23-lobby-atrium.webp",             alt: "Renovated lobby atrium at Hilton Garden Inn Madison with tall columns, bubble pendants and modern sofas" },
      { file: "24-fitness-center-2.webp",         alt: "Renovated fitness center at Hilton Garden Inn Madison with free weights, dumbbells and a weight bench" }
    ]
  },
  {
    slug: "holiday-inn-meridian",
    name: "Holiday Inn",
    city: "Meridian",
    state: "MS",
    dir: "images/projects/hotels/holiday-inn-meridian",
    photos: [
      { file: "05-lobby-lounge-fireplace.webp",   alt: "Renovated lobby lounge at Holiday Inn Meridian with green velvet chairs, leather sofas and a fireplace" },
      { file: "01-two-queen-guest-room.webp",     alt: "Renovated two-queen guest room at Holiday Inn Meridian with upholstered headboards and chevron carpet" },
      { file: "02-restaurant-dining.webp",        alt: "Renovated restaurant and dining area at Holiday Inn Meridian with banquette seating and a geometric mural" },
      { file: "03-king-guest-room.webp",          alt: "Renovated king guest room at Holiday Inn Meridian with a sofa, work desk and gallery artwork" },
      { file: "04-lobby-great-room.webp",         alt: "Renovated lobby great room at Holiday Inn Meridian with a communal table, fireplace and lounge chairs" },
      { file: "06-guest-bathroom-vanity.webp",    alt: "Renovated guest bathroom vanity at Holiday Inn Meridian with a lit mirror and quartz counter" },
      { file: "07-lobby-bar.webp",                alt: "Renovated lobby bar at Holiday Inn Meridian with a marble counter, stools and abstract artwork" },
      { file: "08-lobby-bar-dining.webp",         alt: "Renovated lobby bar and dining area at Holiday Inn Meridian with a marble bar and lounge seating" },
      { file: "09-lobby-good-vibes.webp",         alt: "Renovated lobby seating at Holiday Inn Meridian with a lattice divider and a Visit Meridian display" },
      { file: "10-breakfast-buffet.webp",         alt: "Renovated breakfast buffet at Holiday Inn Meridian with cereal, fruit, hot foods and bakery stations" },
      { file: "11-exterior.webp",                 alt: "Exterior of the renovated Holiday Inn Meridian with the brand sign and porte-cochere entrance" },
      { file: "12-king-guest-room-2.webp",        alt: "Renovated king guest room at Holiday Inn Meridian with a media wall, desk and luggage bench" },
      { file: "13-lobby-seating.webp",            alt: "Renovated lobby seating area at Holiday Inn Meridian with teal velvet chairs and a lattice screen divider" }
    ]
  },
  {
    slug: "hilton-garden-inn-meridian",
    name: "Hilton Garden Inn",
    city: "Meridian",
    state: "MS",
    dir: "images/projects/hotels/hilton-garden-inn-meridian",
    photos: [
      { file: "08-lobby-great-room-fireplace.webp", alt: "Renovated lobby great room at Hilton Garden Inn Meridian with a tile fireplace, colorful sofas and large windows" },
      { file: "01-two-queen-guest-room.webp",     alt: "Renovated two-queen guest room at Hilton Garden Inn Meridian with an olive accent wall and wood headboards" },
      { file: "02-prefunction-foyer.webp",        alt: "Renovated pre-function foyer at Hilton Garden Inn Meridian with a cluster chandelier and window seating" },
      { file: "03-king-guest-room.webp",          alt: "Renovated king guest room at Hilton Garden Inn Meridian with a teal wingback chair and work desk" },
      { file: "04-king-guest-room-2.webp",        alt: "Renovated king guest room at Hilton Garden Inn Meridian with an olive accent wall and abstract artwork" },
      { file: "05-lobby-great-room.webp",         alt: "Renovated lobby great room at Hilton Garden Inn Meridian with a communal table and fireplace media wall" },
      { file: "06-restaurant-dining.webp",        alt: "Renovated restaurant and dining area at Hilton Garden Inn Meridian with red chairs and large windows" },
      { file: "07-guest-corridor.webp",           alt: "Renovated guest corridor at Hilton Garden Inn Meridian with patterned red carpet" },
      { file: "09-guest-bathroom.webp",           alt: "Renovated guest bathroom at Hilton Garden Inn Meridian with framed poppy artwork and a tub shower" },
      { file: "10-fitness-center.webp",           alt: "Renovated fitness center at Hilton Garden Inn Meridian with treadmills, an exercise bike and free weights" },
      { file: "11-guest-bathroom-vanity.webp",    alt: "Renovated guest bathroom vanity at Hilton Garden Inn Meridian with a lit mirror and wall-mounted amenities" },
      { file: "12-reception-front-desk.webp",     alt: "Renovated reception and front desk at Hilton Garden Inn Meridian with a textured feature wall and market" },
      { file: "13-fitness-center-2.webp",         alt: "Renovated fitness center at Hilton Garden Inn Meridian with a row of treadmills and a feature wall" },
      { file: "14-lobby-bar.webp",                alt: "Renovated lobby bar at Hilton Garden Inn Meridian with a white counter, gold pendants and bar stools" },
      { file: "15-elevator-landing.webp",         alt: "Renovated elevator landing at Hilton Garden Inn Meridian with stained-glass-style artwork and a console" },
      { file: "16-guest-corridor-2.webp",         alt: "Renovated guest corridor at Hilton Garden Inn Meridian with tile flooring and a hydration station" },
      { file: "17-guest-room-entry-pantry.webp",  alt: "Renovated guest room entry at Hilton Garden Inn Meridian with closet shelving and a microwave and coffee maker" },
      { file: "18-bar-lounge.webp",               alt: "Renovated bar and lounge at Hilton Garden Inn Meridian with a white bar, communal table and beverage station" },
      { file: "19-dining-market.webp",            alt: "Renovated dining area and market at Hilton Garden Inn Meridian with pendant lighting and grab-and-go cases" },
      { file: "20-shop-market.webp",              alt: "The Shop market at Hilton Garden Inn Meridian with sundries, snacks and grab-and-go cases" }
    ]
  }
];
