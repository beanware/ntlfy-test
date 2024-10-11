// Importing Images
import OralMaxCm from '../img/oral-max-cm.jpg';
import oralCry from '../img/oralmx-crystal.png';
import SmRat from '../img/samrat.png';
import Smg from '../img/SMG.png';
import OralPM from '../img/OralMaxPM.png';
import OralPHC from '../img/OralMaxPHC.png';
import Gmax from '../img/Gmax.png';
import KodakSHD from '../img/KodakSHD.png';
import KodakAB from '../img/KodakAB.png';
import KodakFlash from '../img/KodakFlashlight.png';

// Importing Images for Additional Products
import OralMaxJuniorMoon from '../img/oral-max-junior-moon.png';
import OralMaxJuniorFish from '../img/oral-max-junior-fish.png';
import OralmaxSpeedo from '../img/oralmax-speedo.png';
import AG25 from '../img/ag25.png';
import AW23 from '../img/aw23.png';
import SupaKat from '../img/supa_kat.png';
import GoodmaxIcebreaker3 from '../img/goodmax-icebreaker3.png';
import GoodmaxRazorCartridges from '../img/goodmax-razor-cartridges.png';
import SplashAirFreshener from '../img/splash-air-freshener.png';

const productsData = [
  {
    id: 1,
    name: 'ORAL MAX COMFORT MEDIUM',
    category: 'Oral Care',
    price: 99.99,
    image: OralMaxCm,
    description: `Experience the pinnacle of dental hygiene with the OralMax Comfort Toothbrush. 
    Designed with 100% end-rounded international quality bristles, this toothbrush is gentle on the gums 
    yet highly effective in removing plaque and stains, ensuring a superior cleaning experience.`,
  },
  {
    id: 2,
    name: 'ORAL MAX CRYSTAL MEDIUM',
    category: 'Oral Care',
    price: 99.99,
    image: oralCry,
    description: `Elevate your oral care routine with the 
    OralMax Crystal Toothbrush, where 
    elegance meets functionality. This 
    toothbrush features crystal-clear bristles infused with micro-cleaning particles that gently yet effectively 
    polish teeth for a dazzling shine.`,
  },
  {
    id: 3,
    name: 'SAMRAT',
    category: 'Disposables',
    price: 99.99,
    image: SmRat,
    description: `Samrat’s 100-piece Stainless Sharp Razor Blades 
    offer an unparalleled shaving experience with 
    their high-grade 6Cr13 stainless steel, ensuring 
    both durability and a consistently sharp edge. 
    Designed for compatibility with most safety 
    razors, these double-edge blades promise 
    longevity and are available in a generous 
    quantity, providing exceptional value for 
    frequent shavers. Despite their premium 
    features, they remain competitively priced, making quality shaving accessible without 
    compromising on performance.`,
  },
  {
    id: 4,
    name: 'SUPERMAX GREEN',
    category: 'Disposables',
    price: 99.99,
    image: Smg,
    description: `Supermax Green razor blades are a 
    testament to precision engineering and cost-effective shaving solutions. These blades, 
    known for their durability and smooth shave, are crafted to fit all standard safety razors. 
    Each blade is designed for multiple uses, 
    making them a practical choice for daily 
    grooming. Supermax Green blades embody 
    the brand’s commitment to providing quality 
    shaving experiences at an affordable price, 
    making them a favoured choice for 
    consumers worldwide.`,
  },
  {
    id: 5,
    name: 'ORAL MAX PROTECTIVE MEDIUM',
    category: 'Oral Care',
    price: 99.99,
    image: OralPM,
    description: `INTRODUCING THE ORAL MAX PROTECTIVE TRAY 
    TOOTHBRUSH. This is the affordable choice for those 
    seeking quality without compromise. With its high-quality bristles, 
    it ensures a thorough and gentle cleaning process. Designed for durability and 
    effectiveness, this toothbrush provides excellent value, 
    making it the go-to option for maintaining daily oral health.`,
  },
  {
    id: 6,
    name: 'ORAL MAX PROTECTIVE HANGING CARD',
    category: 'Oral Care',
    price: 99.99,
    image: OralPHC,
    description: `The Oral Max Protective Hanging Card is the 
    epitome of affordability meeting quality. This 
    toothbrush offers a cost-effective solution for 
    maintaining oral health without sacrificing the 
    benefits of high-quality bristles. Designed for 
    efficient cleaning and durability, it’s the budget-friendly 
    choice for a reliable brushing experience. Perfect for families and individuals 
    who value both quality and economy in their 
    oral care routine.`,
  },
  {
    id: 7,
    name: 'GOODMAX',
    category: 'Disposables',
    price: 99.99,
    image: Gmax,
    description: `Goodmax offers a range of disposable shavers 
    suitable for both men and women. Their Twin 
    Stainless Steel Blade Safety Disposable Shaving 
    Razor features a fixed head, long rubber handle, 
    twin blade system made of Swedish stainless 
    steel, and a lubricant strip with Vitamin E and 
    Aloe. Remember to follow proper shaving 
    practices for the best results!`,
  },
  {
    id: 8,
    name: 'KODAK SUPER HEAVY DUTY ZINC',
    category: 'Dry Cells',
    price: 99.99,
    image: KodakSHD,
    description: `Kodak Super Heavy Duty Zinc batteries are designed to last 
    longer than the Heavy-Duty range. These AA-style batteries 
    deliver 1.5V and are ideal for everyday appliances like flashlights, 
    clocks, and smoke detectors. Plus, they’re mercury and 
    cadmium-free. If you’re looking for reliable performance, Kodak’s 
    got you covered!`,
  },
  {
    id: 9,
    name: 'KODAK ALKALINE BATTERIES',
    category: 'Dry Cells',
    price: 99.99,
    image: KodakAB,
    description: `KODAK Alkaline Batteries offer 
    excellent power compared to 
    leading brands, all while 
    maintaining a lower cost per cell. Their stable chemistry, 
    combined with premium 
    components, makes them suitable 
    for various operating 
    environments. These batteries are 
    available in different types, 
    including ULTRA PREMIUM (AAA, 
    AA) and MAX Super Alkaline (AAA, 
    AA, C, 9V, and more). If you need 
    reliable power, KODAK Alkaline 
    Batteries are a great choice!`,
  },
  {
    id: 10,
    name: 'ORAL MAX JUNIOR MOON MOON SOFT',
    category: 'Oral Care',
    price: 89.99,
    image: OralMaxJuniorMoon,
    description: `Unleash the power of a stellar clean with the OralMax 
    Junior Moon Moon Toothbrush, specially designed for 
    the young stars in your life. This toothbrush 
    combines fun and functionality with its moon-themed 
    design that encourages kids to brush regularly. 
    The soft, rounded bristles are gentle on delicate gums, 
    while the small brush head makes it easy for little hands 
    to navigate. With a non-slip grip, it’s perfect for kids 
    learning to brush on their own.`,
  },
  {
    id: 11,
    name: 'ORAL MAX JUNIOR FISH',
    category: 'Oral Care',
    price: 89.99,
    image: OralMaxJuniorFish,
    description: `The Oralmax Junior Fish toothbrush is a child-friendly 
    dental care product designed for children aged 2 years 
    and older. It features soft, tapered bristles for gentle yet 
    thorough cleaning between teeth and along the gum 
    line. The toothbrush’s ergonomic handle is crafted for 
    small hands, ensuring a firm grip for little ones learning to 
    brush independently. With a compact head size, it allows 
    easy access to all areas of the mouth, while the flexible 
    neck helps protect tender gums from excessive pressure.`,
  },
  {
    id: 12,
    name: 'ORALMAX SPEEDO',
    category: 'Oral Care',
    price: 109.99,
    image: OralmaxSpeedo,
    description: `The Oralmax Speedo toothbrush, designed specifically for 
    kids, combines gentle bristles with fun features. Its soft 
    bristles protect young gums during brushing, while kid-friendly 
    designs and vibrant colours make brushing engaging. The 
    built-in toy vehicle encourages proper brushing habits. Make 
    brushing a delightful experience for your little ones with Oralmax Speedo!`,
  },
  {
    id: 13,
    name: 'AG25 The Oral Max Action Plus Toothbrush',
    category: 'Oral Care',
    price: 119.99,
    image: AG25,
    description: `The Oral Max Action Plus Toothbrush boasts cross-action bristles for 
    effective plaque removal between teeth and along the gumline. Its 
    extra-long power tip bristles reach even the most 
    challenging areas. Additionally, the 
    toothbrush features Bacteria Guard 
    bristles with ionized silver, which hinder 
    bacterial growth. Overall, it’s designed to 
    enhance oral hygiene and maintain 
    healthy gums.`,
  },
  {
    id: 14,
    name: 'AW23 The Oral Max Speedo Plus Toothbrush',
    category: 'Oral Care',
    price: 109.99,
    image: AW23,
    description: `The Oral Max Speedo Plus toothbrush is the perfect starter 
    brush for toddlers. It features 
    extra-soft bristles to gently clean 
    tiny teeth and tender gums. To 
    make brushing even more 
    delightful, each toothbrush comes 
    with a fun toy, turning a daily 
    routine into an exciting game. 
    Bright, cheerful & child-friendly, 
    this is the go-to choice for parents 
    who want to encourage good 
    brushing habits early on.`,
  },
  {
    id: 15,
    name: 'Supa_Kat Single-Blade Disposable Razor',
    category: 'Disposables',
    price: 49.99,
    image: SupaKat,
    description: `Experience a Smooth Shave Every Time!
    The Supa_Kat single-blade disposable razor is 
    designed for those who value precision and 
    convenience. With its vibrant orange handle 
    and sleek design, this razor not only stands out 
    but also delivers a clean, close shave. Perfect 
    for both home use and travel, the Supa_Kat 
    razor ensures you always look your best with 
    minimal effort.
    • Single Blade Precision: Achieve a smooth and 
    close shave with the high-quality single blade. 
    • Convenient and Disposable: Ideal for on-thego grooming, this razor is perfect for travel or 
    quick touch-ups.
    Choose Supa_Kat for a reliable and refreshing 
    shaving experience!`,
  },
  {
    id: 16,
    name: 'GOODMAX Icebreaker 3',
    category: 'Disposables',
    price: 129.99,
    image: GoodmaxIcebreaker3,
    description: `Elevate Your Shaving Experience!
    Introducing the GOODMAX 
    Icebreaker 3, designed to provide a 
    superior shaving experience. This 
    package includes 4 high-quality 
    cartridges and a durable steel handle, 
    ensuring you get the best shave every 
    time.
    • Nano Coated Blades: Enjoy a 
    smoother and closer shave with 
    advanced 3 nano-coated blades that 
    glide effortlessly over your skin.
    • Precision Trimmer: Perfect for detailing 
    and achieving a precise shave, 
    especially in hard-to-reach areas.
    Choose GOODMAX Icebreaker 3 for a 
    premium, hassle-free shave that leaves 
    your skin feeling refreshed and 
    smooth.`,
  },
  {
    id: 17,
    name: 'GOODMAX Razor Cartridges',
    category: 'Disposables',
    price: 149.99,
    image: GoodmaxRazorCartridges,
    description: `Discover the excellence of GOODMAX 
    razor cartridges, designed to deliver a 
    superior shaving experience. This pack 
    includes five high-quality cartridges, 
    ensuring you always have a fresh blade 
    ready for a smooth and comfortable 
    shave. With five cartridges, you’re always 
    prepared for a perfect shave.`,
  },
  {
    id: 18,
    name: 'Splash Air Freshener',
    category: 'Home & Garden',
    price: 29.99,
    image: SplashAirFreshener,
    description: `Introducing the Splash Air Freshener 
    Collection, a delightful trio of fragrances 
    designed to invigorate your living space with 
    the essence of nature. Available in the 
    enchanting scents of Roses, soothing Lavender, and zesty Lemon, these 
    air fresheners promise to transform any room 
    with their long-lasting and pleasant aromas.`,
  },

  {
    id: 19,
    name: 'Kodak Flashlight',
    category: 'Lighting',
    price: 29.99,
    image: KodakFlash,
    description: `KODAK Flashlights and light bulbs provide a variety 
of solutions for the home, workplace, and outdoor 
adventures. Whether you need reliable illumination 
during camping trips, power outages, or everyday 
tasks, KODAK has you covered. For tactical needs, 
consider the Kodiak brand tactical flashlights known 
for their uncompromising quality, brightness, and 
durability.`,
  },
  // ... Add more products as needed
];

export default productsData;
