import bcrypt from 'bcryptjs';
import react from 'react';

const dogs = {
  food: [
    {
        name: 'CESAR CLASSIC TERRINE WIH TENDER CHICKEN AND TURKEY',
        weight: '0.5kg',
        slug: 'terrine-tender-chicken',
        animal: 'DOGS',
        category: 'Dogs-Food',
        image: 'https://www.petsmall.pk/wp-content/uploads/2021/12/download-11.jpg',
        price: 200,
        countInStock: 5,
        brand: 'Cesar',
        rating: 4.3,
        numReviews: 2,
        description: ''
    },
    {
        name: 'Happy Dog Lamm Pur Tin – 400g',
        weight: '400g',
        slug: 'dog-lamm-pur',
        animal: 'DOGS',
        category: 'Dogs-Food',
        image: 'https://www.petsmall.pk/wp-content/uploads/2019/05/414juokmwul._ac_ul320_sr256320_.jpg',
        price: 400,
        countInStock: 5,
        brand: 'Happy Dog',
        rating: 4.8,
        numReviews: 3,
        description: 'Moist Complete Dog Food HAPPY DOG Lamm Pur is made exclusively from fresh meat of slaughtered lambs (Germany origin) without soy and without plant ingredients, and also without artificial dyes and preservatives.'
    },
    {
        name: 'JUNGLE CANNED WET FOOD FOR DOGS(BEEF & VEGETTABLE) 415GRAMS',
        weight: '415g',
        slug: 'canned-wet-food',
        animal: 'DOGS',
        category: 'Dogs-Food',
        image: 'https://www.petsmall.pk/wp-content/uploads/2022/02/U1face89d23da4b0c800a92df3f99d31ap.jpeg',
        price: 350,
        countInStock: 5,
        brand: 'Jungle',
        rating: 3.9,
        numReviews: 4,
        description: ''
    },
    {

        name: 'PEDIGREE BISCROK PUPPY TREATS',
        weight: '1kg',
        slug: 'treat-dogs',
        animal: 'DOGS',
        category: 'Dogs-Food',
        image: 'https://www.petsmall.pk/wp-content/uploads/2020/09/5010394986052.jpg',
        price: 599,
        countInStock: 10,
        brand: 'Pedigree',
        rating: 4.5,
        numReviews: 3,
        description: 'specially formulated for growth and development. No artificial flavors are added.'
    },
    {
        name: 'Pedigree Canned Food for Dogs',
        weight: '1kg',
        slug: 'canned-food-dogs',
        animal: 'DOGS',
        category: 'Dogs-Food',
        image: 'https://www.petsmall.pk/wp-content/uploads/2019/05/1283205153-71078_full.jpg',
        price: 399,
        countInStock: 6,
        brand: 'Pedigree',
        rating: 4.6,
        numReviews: 8,
        description: 'Meaty chunks in a delicious gravy dogs love. Optimal levels of oil and minerals to nourish skin & coat. Highly digestible ingredients, so nutrients are easily absorbed.'
    },
    {

        name: 'MeraDog Energy',
        weight: '1kg',
        slug: 'meradog-energy',
        animal: 'DOGS',
        category: 'Dogs-Food',
        image: 'https://www.petsmall.pk/wp-content/uploads/2019/05/meradog-energy-12.5kg-4025877515507-600x315_0.jpg',
        price: 850,
        countInStock: 10,
        brand: 'MERADOG',
        rating: 4.7,
        numReviews: 8,
        description: 'MeraDog Energy dog food provides really good nutrition for high-performance dogs.Extremely tasty, wheat-free dog food. For fully-grown high-performance dogs. With care concept – ingredients for 360° all-round protection.'
    },
    {
        
        name: 'Farmina Team Breeder Top Farmina – 20 Kg',
        weight: '20kg',
        slug: 'farmina-team-breeder',
        animal: 'DOGS',
        category: 'Dogs-Food',
        image: 'https://www.petsmall.pk/wp-content/uploads/2019/05/41u-hmsy8bl._sy300_ql70_.jpg',
        price: 12400,
        countInStock: 5,
        brand: 'Farmina',
        rating: 4.8,
        numReviews: 7,
        description: 'Complete food for adult dogs. [sociallocker id=3290]Dehydrated chicken meat (32%), corn, chicken fat, rice, vegetable oil, dried beetroot pulp, locust bean, sodium chloride, dried brewer’s yeast.[/sociallocker]. Special Note: "Please mention your preferred sizes here."'
    },
    {

        name: 'WAGGLES GRAVY FOOD IN CHICKEN & SWEET POTATO 400GRAMS',
        weight: '1kg',
        slug: 'chicken-sweet-potato',
        animal: 'DOGS',
        category: 'Dogs-Food',
        image: 'https://www.petsmall.pk/wp-content/uploads/2021/12/chicken-can-1.png',
        price: 399,
        countInStock: 10,
        brand: 'Waggles',
        rating: 4.8,
        numReviews: 10,
        description: ''
    },
    {

        name: 'Dr.Clauder PUPPY Milk_450 grams',
        weight: '450g',
        slug: 'clauder-puppy-milk',
        animal: 'DOGS',
        category: 'Dogs-Food',
        image: 'https://www.petsmall.pk/wp-content/uploads/2019/05/b12a6a072b60acd08b5bfc09fdd4be75.jpg',
        price: 2800,
        countInStock: 5,
        brand: 'Dr.Clauder\'s',
        rating: 4.0,
        numReviews: 2,
        description: 'Milk Replacer, Made in Germany.'
    },
    {
   
        name: 'ESBILAC puppy milk replacer-340 grams',
        weight: '340g',
        slug: 'esbilac-puppy-milk',
        animal: 'DOGS',
        category: 'Dogs-Food',
        image: 'https://www.petsmall.pk/wp-content/uploads/2020/06/esbilac.jpg',
        price: 5000,
        countInStock: 7,
        brand: 'ESBILAC',
        rating: 4.9,
        numReviews: 3,
        description: 'Number 1 selling puppy milk replacer for puppies newborn to six weeks. Recommended as a food source for orphaned or rejected puppies or those nursing, but needing supplemental feeding.'
    }
  ],
  clothesTools: [
    {
  
        name: 'BLACK AND WHITE PUPPY JACKET(WINTER STUFF)FOR PUPPY',
        slug: 'puppy-jacket',
        animal: 'DOGS',
        category: 'Dogs-Cloth',
        image: 'https://www.petsmall.pk/wp-content/uploads/2021/12/ff1d7cff-2126-4e7c-967b-14755badbaee.jpg',
        price: 550,
        countInStock: 3,
        brand: 'Pups',
        rating: 4.3,
        numReviews: 6,
        description: 'BLACK AND WHITE COLOR, WINTER WARM JACKET FO PUPPY, WELL FITTED COMFORTABLE JACKET IS STITCHED TO PERFECTION, SOFT AND WASHABLE STUFF, PUPPY SIZE'
    },
    {

        name: 'DOG WARM JACKETS',
        slug: 'warm-jackets',
        animal: 'DOGS',
        category: 'Dogs-Cloth',
        image: 'https://www.petsmall.pk/wp-content/uploads/2020/12/Dog-red-Casual-Canine.jpg',
        price: 1500,
        countInStock: 4,
        brand: 'Pups',
        rating: 4.4,
        numReviews: 6,
        description: 'warm and soft, make your dog comfortable, color may vary, Sizes: "Small, Medium, Large"'
    },
    {
 
        name: 'Pet Sweater for Cats/Dogs',
        slug: 'sweater-cats-dogs',
        animal: 'DOGS',
        category: 'Dogs-Cloth',
        image: 'https://www.petsmall.pk/wp-content/uploads/2019/05/25360646_1595876113833177_1783295927_n-1.jpg',
        price: 999,
        countInStock: 10,
        brand: 'Pets',
        rating: 4.2,
        numReviews: 3,
        description: 'Pet Sweater for Cats/Dogs. Four Sizes Available. Multiple Colors. Good Quality Fabric. You can mention the desired color on the checkout page.'
    },
    {
   
        name: 'PURPLE AND YELLOW JACKET (WINTER STUFF)FOR PUPPY',
        slug: 'purple-yellow-jacket',
        animal: 'DOGS',
        category: 'Dogs-Cloth',
        image: 'https://www.petsmall.pk/wp-content/uploads/2021/12/6ee5bd50-9ab1-4ad5-ad3b-92892c693421.jpg',
        price: 500,
        countInStock: 2,
        brand: 'Pups',
        rating: 3.9,
        numReviews: 5,
        description: 'PURPLE AND YELLOW COLOR, WINTER WARM JACKET FOR PUPPY, WELL FITTED AND COMFORTABLE JACKET IS STITCHED TO PERFECTION, SOFT AND WASHABLE STUFF, PUPPY SIZE'
    },
    {
  
        name: 'RED AND WHITE JACKET(WINTER STUFF)FOR PUPPY',
        slug: 'red-white-jacket',
        animal: 'DOGS',
        category: 'Dogs-Cloth',
        image: 'https://www.petsmall.pk/wp-content/uploads/2021/12/129c7131-139f-4218-8ea1-6075f04fe67a.jpg',
        price: 550,
        countInStock: 3,
        brand: 'Pups',
        rating: 3.9,
        numReviews: 5,
        description: 'PURPLE AND YELLOW COLOR, WINTER WARM JACKET FOR PUPPY, WELL FITTED AND COMFORTABLE JACKET IS STITCHED TO PERFECTION, SOFT AND WASHABLE STUFF, PUPPY SIZE'
    },
    {
  
        name: 'AUTOMATIC PET FOOD & WATER DISPENSER SET',
        slug: 'food-bowels-and-dispenser-dogs',
        animal: 'DOGS',
        category: 'Bowl',
        image: 'https://www.petsmall.pk/wp-content/uploads/2021/08/Automatic-Pet-Water-Dispenser-Feeder-Large-Capacity-Food-Dispenser.jpg',
        price: 4000,
        countInStock: 5,
        brand: 'Pets Care',
        rating: 4.9,
        numReviews: 9,
        description: 'AUTOMATIC PET FOOD & WATER DISPENSER SET for sale. Buy AUTOMATIC PET FOOD for your pet.'
    },
    {
       
        name: 'Double food bowl',
        slug: 'double-food-bowl',
        animal: 'DOGS',
        category: 'Bowl',
        image: 'https://www.petsmall.pk/wp-content/uploads/2019/04/26647963_1620343228053132_933071658_n-500x500.jpg',
        price: 499,
        countInStock: 10,
        brand: 'Pets Care',
        rating: 4.0,
        numReviews: 1,
        description: ''
    },
    {
   
        name: 'Dual port pet food dish bowl',
        slug: 'dual-port-bowl',
        animal: 'DOGS',
        category: 'Bowl',
        image: 'https://www.petsmall.pk/wp-content/uploads/2021/08/2f7a2fe4e00c99b4355a9168bd689c7c.jpg',
        price: 399,
        countInStock: 10,
        brand: 'Pets Care',
        rating: 4.9,
        numReviews: 6,
        description: 'Dual-port pet food dish bowl & automatic water dispenser. Buy Dual port pet food dish bowl.'
    },
    {
        
        name: 'FOOD AND WATER DISPENSER SET -DOG & CAT',
        slug: 'dispenser-set',
        animal: 'DOGS',
        category: 'Bowl',
        image: 'https://www.petsmall.pk/wp-content/uploads/2020/12/580bf056fc381f6cc0b0f9051999382e.jpg',
        price: 3000,
        countInStock: 5,
        brand: 'Pets Care',
        rating: 4.8,
        numReviews: 5,
        description: 'FOOD AND WATER DISPENSER is the best for your cats and dogs. Make food and water available 24/7. Don’t worry if you are away from home. Food’s smell remains captured in the dispenser'
    },
    {
     
        name: 'Stainless Steel Pet Bowl',
        slug: 'stainless-steel-bowls',
        animal: 'DOGS',
        category: 'Bowl',
        image: 'https://www.petsmall.pk/wp-content/uploads/2019/04/bowl.jpg',
        price: 850,
        countInStock: 10,
        brand: 'Pets Care',
        rating: 4.2,
        numReviews: 4,
        description: 'Stainless Steel Pet Bowl. Available in four sizes: Small, Medium, Large, Extra Large. Diameter: "Small: 5 Inches", "Medium: 6 Inches", "Large: 7.5 Inches", "Extra Large: 8.5 Inches". Select the size and then add to cart'
    }
  ],
  collarsCarriers: [
    {

        name: 'Dog Harness Chest Strap large',
        slug: 'harness-chest-strap',
        animal: 'DOGS',
        category: 'Dogs-Collar',
        image: 'https://www.petsmall.pk/wp-content/uploads/2013/08/pet-supplies-large-dog-harness-collar-soft-adjustable-harness-vest-dog-chest-strap-for-medium-large.jpg_640x640-500x500.jpg',
        price: 799,
        countInStock: 8,
        brand: 'Pets Care',
        rating: 4.5,
        numReviews: 6,
        description: 'SKU: N/ACategories: Collar, Harness and Leashes, DOGS'
    },
    {
      
        name: 'PROTECTIVE E-COLLAR FOR DOGS AND CATS',
        slug: 'protective-e-collar',
        animal: 'DOGS',
        category: 'Dogs-Collar',
        image: 'https://www.petsmall.pk/wp-content/uploads/2019/09/th-1.jpg',
        price: 800,
        countInStock: 5,
        brand: 'Pets Care',
        rating: 4.9,
        numReviews: 3,
        description: 'Sizes: "Small, Medium, Large"'
    },
    {
   
        name: 'Pet Carrier / Pet Travel Box',
        slug: 'carriers-travel-box',
        animal: 'DOGS',
        category: 'Dogs-Collar',
        image: 'https://www.petsmall.pk/wp-content/uploads/2019/08/carries.jpg',
        price: 5500,
        countInStock: 10,
        brand: 'Pets Care',
        rating: 4.3,
        numReviews: 3,
        description: 'Sizes: "Small, Medium, Large, XL"'
    },
    {
        
        name: 'JET BOX FOR PETS SMALL SIZE',
        slug: 'jet-box-small-pets',
        animal: 'DOGS',
        category: 'Dogs-Collar',
        image: 'https://www.petsmall.pk/wp-content/uploads/2021/10/243926336_998410667669931_1181669619591859161_n.jpg',
        price: 2300,
        countInStock: 10,
        brand: 'Pets Care',
        rating: 4.7,
        numReviews: 4,
        description: 'Weight: 5kg'
    },
    {
     
        name: 'Pet jet boxes',
        slug: 'pet-jet-boxes',
        animal: 'DOGS',
        category: 'Dogs-Collar',
        image: 'https://www.petsmall.pk/wp-content/uploads/2013/08/image-1.jpg',
        price: 2500,
        countInStock: 4,
        brand: 'Pets Care',
        rating: 4.0,
        numReviews: 4,
        description: 'Categories: Baskets, Carriers & Jet Boxes, Baskets, Carriers & Jet Boxes, CATS, DOGS, good quality plastic material, ideal for cats and 4 months old pup'
    },
    {
    
        name: 'Ancol Roller Teether Puppy Toy',
        slug: 'roller-teether-puppy-toy',
        animal: 'DOGS',
        category: 'Dogs-Collar',
        image: 'https://www.petsmall.pk/wp-content/uploads/2021/06/Pet-Popular-Colorful-Toys-Dog-Chew-Toy-for-Aggressive-Chewers-Treat-Dispensing-Rubber-Teeth-Cleaning-Toy.jpg',
        price: 450,
        countInStock: 12,
        brand: 'Pups',
        rating: 4.0,
        numReviews: 1,
        description: 'Ancol Roller Teether Puppy likes to play with this.'
    },
    {

        name: 'Colorful toy with bell',
        slug: 'colorful-bell-toy',
        animal: 'DOGS',
        category: 'Dogs-Collar',
        image: 'https://www.petsmall.pk/wp-content/uploads/2019/05/23423533_1558332170920905_1210827316_o.jpg',
        price: 250,
        countInStock: 4,
        brand: 'Pets Care',
        rating: 3.5,
        numReviews: 2,
        description: 'Colorful toy with bell is a cute colorful bell toy with what your cat or kittens will love to play. Various colors of the toy will attract your pet.'
    },
    {
        
        name: 'soft dog leash with collar',
        slug: 'soft-dog-leash-collar',
        animal: 'DOGS',
        category: 'Dogs-Collar',
        image: 'https://www.petsmall.pk/wp-content/uploads/2019/05/26694318_1620343824719739_1055433439_n.jpg',
        price: 900,
        countInStock: 10,
        brand: 'Pets Care',
        rating: 4.9,
        numReviews: 5,
        description: 'soft dog leash with collar, soft leash & collar,good quality material,You will love this leash! you haven’t seen more quality leather leash than this'
    },
    {
        
        name: 'Slicker Brush for Pets Grooming',
        slug: 'slicker-brush',
        animal: 'DOGS',
        category: 'Dogs-Collar',
        image: 'https://www.petsmall.pk/wp-content/uploads/2019/05/htb14xipsfxxxxa0xpxxq6xxfxxxx-262x262.jpg',
        price: 499,
        countInStock: 3,
        brand: 'Pets Care',
        rating: 4.5,
        numReviews: 1,
        description: 'Slicker Brush for Pets Grooming, Made of good strong material, Strong and durable, handle and brush will last long and colorful'
    },
    {
        
        name: 'Remu Freshy Dogs and Cat Shampoo',
        slug: 'remu-freshy-shampoo',
        animal: 'DOGS',
        category: 'Dogs-Collar',
        image: 'https://www.petsmall.pk/wp-content/uploads/2019/05/23548354_1563415647079224_584961958_n.jpg',
        price: 450,
        countInStock: 4,
        brand: 'Pets Care',
        rating: 4.4,
        numReviews: 3,
        description: 'Remu Freshy Dogs and Cat Shampoo. Freshy shampoo for cats and dogs refresh your pet’s skin.'
    }
  ]
};
export default dogs;