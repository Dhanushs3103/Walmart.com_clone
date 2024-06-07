import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

let ProductsData = createContext();

export default function ProductsDataProvider({children}) {
  //flash deals data,
  let [flashDeals, setFlashDeals] = useState([
    {
      id:1,
      image:"https://i5.walmartimages.com/seo/Bestway-Steel-Pro-MAX-12-Foot-by-30-Inch-Above-Ground-Swimming-Pool-Set_765a7d89-786b-406c-87f2-6ec559623359.b6d5ac4b83c7a0958d597824efcbdde1.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:164.99,
      descrip:"Options from $164.99 to $1,124.99",
      title:"Bestway Steel Pro MAX 12 Foot by 30 Inch Above Ground Swimming Pool Set"
    },
    {
      id:2,
      image:"https://i5.walmartimages.com/seo/2022-Apple-10-9-inch-iPad-Wi-Fi-256GB-Yellow-10th-Generation_e97e7b44-9563-4a4b-ac45-674052f8f2fe.119ee621a17a9f4a29856520cf34ed0d.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:344.89,
      descrip:"Options from $344.89",
      title:"2022 Apple 10.9-inch iPad Wi-Fi 256GB Yellow 10th Generation"
    },
    {
      id:3,
      image:"https://i5.walmartimages.com/seo/INGALIK-RV-King-Mattress-Topper-Extra-Thick-Cooling-Pad-Cover-400TC-Cotton-Pillow-Top-Protector-8-21-Deep-Pocket-Soft-5D-Spiral-Fiber-Padding-Back-Pa_e3aed9c8-76da-48bd-9fbd-c1903e61aef5.92e54e493239f1f782dea1edaccdd4a2.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:34.99,
      descrip:"Options from $34.99 to $39.99",
      title:"INGALIK RV King Mattress Topper Extra Thick Cooling Pad Cover 400TC Cotton Pillow Top Protector 8-21 Deep Pocket Soft 5D Spiral Fiber Padding Back Pad with 12 Months Warranty"
    },
    {
      id:4,
      image:"https://i5.walmartimages.com/seo/5-ft-Artificial-Olive-Plants-Realistic-Leaves-Natural-Trunk-Silk-Fake-Potted-Tree-Wood-Branches-Fruits-Faux-Office-Home-Decor_a880dc67-20d8-4948-ad44-36c24f50b1c9.4699cbbb5ab4cec8565b8a0e868c893d.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:29.99,
      descrip:"Options from $34.99 to $39.99",
      title:"5 ft Artificial Olive Plants Realistic Leaves Natural Trunk Silk Fake Potted Tree Wood Branches Fruits Faux Office Home Decor"
    },
    {
      id:5,
      image:"https://i5.walmartimages.com/seo/VINGLI-10-Pack-White-Plastic-Folding-Chair-Indoor-Outdoor-Stackable-Seat_f93706c2-8a27-4340-8d53-4f67dba8453b.133699ea2980ba569f6febd16a1d8b97.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:144.99,
      descrip:"Options from $69.99",
      title:"VINGLI 10 Pack White Plastic Folding Chair Indoor Outdoor Stackable Seat"
    },
    {
      id:6,
      image:"https://i5.walmartimages.com/seo/Tripcomp-Hardside-Luggage-Set-3-Piece-Set-21-25-29-Lightweight-Suitcase-4-Wheeled-Suitcase-Set-Dark-Purple_33d9e6f5-20ca-4df7-9a7e-99b5dfac65ea.ed8d69cfa5a7262bd48148b6d7cb1d85.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:89.99,
      title:"Tripcomp Hardside Luggage Set 3 Piece Set 21 25 29 Lightweight Suitcase 4 Wheeled Suitcase Set Dark Purple"
    },
    {
      id:7,
      image:"https://i5.walmartimages.com/seo/Ktaxon-Sectional-Sofa-L-Shaped-Couch-with-Chaise-Living-Room-Sleeper-Set-3-Seats-with-Chenille-and-Double-Layer-Cushions-120-W-Black_9ab3cde2-38b1-48ab-8087-100eef9e9e05.eaaec0a1d4a9209f5d4cf944c52f7a09.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:599.89,
      discrip:"Options from $499.89",
      title:"Ktaxon Sectional Sofa L Shaped Couch with Chenille and Double Layer Cushions 120 W Black"
    },
    {
      id:8,
      image:"https://i5.walmartimages.com/seo/Full-Size-Mattress-12-Medium-Gel-Memory-Foam-Mattress-Bed-in-a-Box_2694cffd-f588-4e45-9f21-0a19836bf4c6.f4f9146a756ee786415900cbb9d81798.png?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:153.78,
      descrip:"Options from $153.99",
      title:"Full Size Mattress 12 Medium Gel Memory Foam Mattress Bed in a Box"
    },
    {
      id:9,
      image:"https://i5.walmartimages.com/seo/Men-s-Belted-Cotton-Cargo-Shorts-3-Pack_1243d359-a044-49b8-93db-6832b4a11372.69cee645dbff115ba92930abba7fecb7.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:29.99,
      descrip:"Options from $34.99 to $39.99",
      title:"Men's Belted Cotton Cargo Shorts 3 Pack"
    },
    {
      id:10,
      image:"https://i5.walmartimages.com/seo/Devoko-Patio-Dining-Table-59-x-35-Outdoor-Furniture-Metal-Rectangular-Table-Brown_3cb7ed05-fa53-451c-bae1-60a4039e147c.1916759ad402b42218b74a589b06bbe5.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:199.99,
      descrip:"Options from $199.99",
      title:"Devoko Patio Dining Table 59 x 35 Outdoor Furniture Metal Rectangular Table Brown"
    }
  ]);
  //screen time data,
  let [screenTime, setScreenTime] = useState([
    {
      id:1,
      image:"https://i5.walmartimages.com/asr/fee2a506-815f-4ba0-94b1-bb9abf76fcd3.1000c07c769b6cfb3224cc14fe9f3076.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:129.99,
      title:"VIZIO 43 Class Full HD 1080p LED Smart TV (New) VFD43M-0804",
    },
    {
      id:2,
      image:"https://i5.walmartimages.com/asr/02a437b1-0577-483d-ae80-aef1f547a3a6.deac966e0f5f81613a836a85d2aa1aec.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:289.99,
      title:"VIZIO 43 Class 4K LED HDR Smart TV (New) V4K43M-08",
    },
    {
      id:3,
      image:"https://i5.walmartimages.com/asr/90e15f32-e68b-4de2-93db-b14037153843.35fe68a832707c40180263d0b11db658.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:399.99, 
      title:"VIZIO 65 Class 4K LED Smart TV quantum pro V4K43M-08",
    },
    {
      id:4,
      image:"https://i5.walmartimages.com/asr/4f929b7f-1505-403c-adee-9339577af63c.509e9a286bc3ab98c2e030a7fd728bd1.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:499.99,
      title:"VIZIO 65 Class 4K LED Smart TV quantum pro V4K43M-08",
    },
    {
      id:5,
      image:"https://i5.walmartimages.com/asr/05ee509d-14ff-46d4-90a4-8b1c5f71eaea.cc5231855335c3e9832c30d411672185.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:599.99,
      title:"VIZIO 65 Class 4K LED Smart TV quantum pro V4K43M-08",
    },
    {
      id:6,
      image:"https://i5.walmartimages.com/asr/fc264541-bcb7-40fd-a581-e07c40235444.a4711caf9783da32c33d53e8c0321d8a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:659.99,
      title:"VIZIO 65 Class 4K LED Smart TV quantum pro V4K43M-08",
    },
    {
      id:7,
      image:"https://i5.walmartimages.com/asr/fc264541-bcb7-40fd-a581-e07c40235444.a4711caf9783da32c33d53e8c0321d8a.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:129.99,
      title:"VIZIO 65 Class 4K LED Smart TV quantum pro V4K43M-08",
    },
    {
      id:8,
      image:"https://i5.walmartimages.com/asr/fee2a506-815f-4ba0-94b1-bb9abf76fcd3.1000c07c769b6cfb3224cc14fe9f3076.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:179.99,
      title:"VIZIO 65 Class 4K LED Smart TV quantum pro V4K43M-08",
    },
    {
      id:9,
      image:"https://i5.walmartimages.com/asr/4f929b7f-1505-403c-adee-9339577af63c.509e9a286bc3ab98c2e030a7fd728bd1.jpeg?odnHeight=132&odnWidth=132&odnBg=FFFFFF",
      price:199.99,
      title:"VIZIO 65 Class 4K LED Smart TV quantum pro V4K43M-08",
    },
    {
      id:10,
      image:"https://i5.walmartimages.com/asr/82922415-bf3b-4ea0-aa29-490151960726.48aad10f54595fdb94f0df8b81fe24d5.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:299.99,
      title:"VIZIO 65 Class 4K LED Smart TV quantum pro V4K43M-08",
    }
  ]);
  //getway data,
  let [gateway, setGateway] = useState([
    {
      id:1,
      image:"https://i5.walmartimages.com/seo/2-Sets-8-Pieces-Travel-Size-Bottle-TSA-Approved-Leak-Proof-Refillable-Spray-Bottles-Toiletries-Containers-Lotions-Creams-Blue-Pink_7fc0d6f5-056c-43ce-891d-d97e98389f9b.b95c7138e6ea1cc5d48bd89c700ff94c.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:12.99,
      title:"2 Sets 8 Pieces Travel Size Bottle TSA Approved, Leak Proof Refillable Spray Bottles for Toiletries, Travel Containers for Lotions and Creams (Blue & Pink)"
    },
    {
      id:2,
      image:"https://i5.walmartimages.com/seo/No-Boundaries-Women-s-Vinyl-Beach-Tote-Bag-with-Mesh-Bottom-Peri-Swim-Stripe_0a051591-1dc0-461c-a3e9-3d9f7975a1b4.93c2a62fcd8b6473244d8354048d1b0e.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:19.99,
      title:"No Boundaries Women's Vinyl Beach Tote Bag with Mesh Bottom Peri-Swim Stripe"
    },
    {
      id:3,
      image:"https://i5.walmartimages.com/seo/Ozark-Trail-40-oz-Vacuum-Insulated-Stainless-Steel-Tumbler-with-Handle-Black_fd312dd1-6952-4fbe-98e7-8ce1672bbf0d.c3e20b82493f59b04165b401e0991023.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:29.99,
      title:"Ozark Trail 40 oz. Vacuum Insulated Stainless Steel Tumbler with Handle, Black"
    },
    {
      id:4,
      image:"https://i5.walmartimages.com/seo/Bon-Voyage-Classic-Memory-Foam-Travel-Neck-Pillow-Burgundy_299737ed-4567-4a41-821f-b853ebb07506.109781c1c21ae21d2bdef20622b3eb8e.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:39.99,
      title:"Bon Voyage Classic Memory Foam Travel Neck Pillow, Burgundy"
    },
    {
      id:5,
      image:"https://i5.walmartimages.com/asr/d8f468af-85ea-4b91-b353-531783ada91e.28c3fa738fc0e9d12eaf29f938995eee.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:49.99,
      title:"Bum Bum Jet Set by Sol De Janeiro, 3 Piece Gift Set"
    },
    {
      id:6,
      image:"https://i5.walmartimages.com/asr/caabc8d0-cbba-43ba-a0a4-e0cdcef72653.f3a3411245a78754f73ecbb03ba9b1ae.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:59.99,
      title:"Cheetos Classic Original Pretzel Sticks, 12 Count"
    },
    {
      id:7,
      image:"https://i5.walmartimages.com/asr/d65f3348-4afe-4667-bc2c-85651b97df3b.4bff1ee59f291884e1b9c75b19e98770.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:69.99,
      title:"Apple AirTag - 4 Pack"
    },
    {
      id:8,
      image:"https://i5.walmartimages.com/asr/376ec93f-84fb-4dd2-af39-42ac7c11e72f.0dbb4ae2037a16091a7eec75e194634f.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:79.99,
      title:"Jabra Elite 75t 7.5mm Bluetooth Speaker, Black",
    },
    {
      id:9,
      image:"https://i5.walmartimages.com/seo/No-Boundaries-Women-s-Comfort-Slides-Sizes-6-12_3299e220-d15c-4694-bd02-9a0be03e0502.d7189e2863015d03a7b03b06fb701581.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:89.99,
      title:"No Boundaries Women's Comfort Slides, Sizes 6-12"
    },
    {
      id:10,
      image:"https://i5.walmartimages.com/seo/The-Home-Edit-Expandable-Travel-3-Piece-Packing-Cubes-Navy_cbc62671-3559-4440-bf27-e5c3e0215d5b.6760e3ea2e1b2649acdb4957983edb6e.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:99.99,
      title:"The Home Edit Expandable Travel 3 Piece Packing Cubes, Navy"
    }
  ])
  //capParty
  let [capParty,setCapParty] = useState([
    {
      id:1,
      image:"https://i5.walmartimages.com/seo/4-Pcs-2024-Graduation-Party-Decorations-Class-Congrats-Grad-Centerpieces-Congratulate-Table-Toppers-High-School-College-Favor-Blue_fd4844a0-c2be-4d3c-844c-318f395d676f.04ffca101cc3fa5c46e71ea28f43fb53.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:9.99,
      title:"4 Pcs 2024 Graduation Party Decorations Class Congrats Grad Centerpieces Congratulate Table Toppers High School College Favor Blue",
      descrip:"options from $12.99 - $20.99"
    },
    {
      id:2,
      image:"https://i5.walmartimages.com/asr/5158bbdc-5d43-4313-867f-4dd4f2168e1b.fe0a6fa9fd5adf881e4d87de042e15b9.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:19.99,
      title:"Fresh-Cut Extra Large Mixed Flower Bouquet, Minimum of 17 Stems, Colors Vary",
      descrip:"options from $12.99 - $20.99"
    },
    {
      id:3,
      image:"https://i5.walmartimages.com/asr/5b705104-65e3-471f-a032-9f30f8aaaeef.baee7b4fb28be424a9e36677b7ccc752.png?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:29.99,
      title:"Glaring Grad Walmart eGift Card",
      descrip:"options from $12.99 - $20.99"
    },
    {
      id:4,
      image:"https://i5.walmartimages.com/asr/df868327-c6b3-480a-b8cd-15075247d75f.bf7c8ee457ae944cb348a3c642e45145.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:39.99,
      title:"Hallmark 9 Medium Graduation Gift Bag with Tissue Paper (Gold and Silver Mortarboards on Black) for College, High School, 8th Grade, Kindergarten",
      descrip:"options from $12.99 - $20.99"
    },
    {
      id:5,
      image:"https://i5.walmartimages.com/asr/3d0e7fcc-adb4-44b8-be08-dc09abb8d723.01ce828c641f772b00d5818f3348b382.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:49.99,
      title:"Hallmark Paper Wonder Musical Pop Up Graduation Card and Gift Card Holder (Plays Celebration)"
    },
    {
      id:6,
      image:"https://i5.walmartimages.com/asr/4374545a-9051-493f-bfaa-cbf267b2b48b.bc86b65238d2885e21d7f00055dd2e2c.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:59.99,
      title:"Graduation Thinking Of You Cookies, Candy & More Care Package Snack Gift Box Bundle Set",
      descrip:"options from $12.99 - $20.99"
    },
    {
      id:7,
      image:"https://i5.walmartimages.com/asr/3d69a4da-dce7-482f-93a6-f156298fffe1.4b4f2702369ed9b3327ebf3698f58b96.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:69.99,
      title:"Hallmark Paper Wonder Pop Up Graduation Card (A Time to Celebrate)",
    },
    {
      id:8,
      image:"https://i5.walmartimages.com/asr/bc3ff28a-bb99-4f6c-b34f-f3800922aefc.6c0526b8ff0936cb4f9cc3a0c195f72e.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:79.99,
      title:"Congratulations Walmart Gift Card",
    },
    {
      id:9,
      image:"https://i5.walmartimages.com/asr/8a37f74c-328c-41e7-a5ed-65ea4111adfa.385aa1933eb8d0a8dd35b47da84dcccf.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:89.99,
      title:"Carpe Every Diem : The Best Graduation Advice from More Than 100 Commencement Speeches : A Graduation Book (Hardcover)"
    }
  ])
  //social media
  let [socialMedia, setSocialMedia] = useState([
    {
      id:1,
      video:"https://advertising.walmart.com/thunder/assets/media-service/wcnp-prod/videos/2b1e98c6-bf12-452d-9de3-5aac6c796efd/transcode/04227dba-450a-4a47-82f9-413c5696bb58/720x1280_PROGRESSIVE_ade.mp4",
      image:"https://i5.walmartimages.com/seo/Joyspun-Women-s-Ribbed-Knit-Sleep-Camisole-Sizes-S-to-3X_e800ac37-9883-487c-a02a-cfa302446f81.c3fd80a283def39e13267154cf62e959.jpeg?odnHeight=68&odnWidth=68&odnBg=FFFFFF",
      price:7.89,
      title:"Joyspun Ribbed Knit Sleep Camisole"
    },
    {
      id:2,
      video:"https://advertising.walmart.com/thunder/assets/media-service/wcnp-prod/videos/aeb194e9-2bb4-4326-8572-58d4f7aca622/transcode/ad543312-8081-458d-9017-aaa267e21587/720x1280_PROGRESSIVE_8b7.mp4",
      image:"https://i5.walmartimages.com/seo/SIXHOME-Outdoor-Rug-5-x8-Waterproof-Patio-Reversible-Indoor-Lightweight-Plastic-Straw-RV-Camping-Deck-Balcony-Boho-Porch-Decor-Black-White_db936794-c989-46ac-aa1b-a62c59e8a7f9.5241ad1776f415f6258fc943ddf57341.jpeg?odnHeight=68&odnWidth=68&odnBg=FFFFFF",
      price:39.89,
      title:"SIXHOME Outdoor 5x8 Waterproof Rug"
    },
    {
      id:3,
      video:"https://advertising.walmart.com/thunder/assets/media-service/wcnp-prod/videos/36f30bd3-be9f-4ea5-b98b-a08b87808ef9/transcode/3a18a8ed-08d1-4bac-a011-86d2b6a30bf0/720x1280_PROGRESSIVE_06a.mp4",
      image:"https://i5.walmartimages.com/asr/362b780a-d260-483e-a7b6-e4b416465a59.b27645575aac762b157ae4ef5985d7f8.jpeg?odnHeight=68&odnWidth=68&odnBg=FFFFFF",
      price:22.99,
      title:"Peony Flower Festive Atmosphere Decoration Beautifully Made Garland Pendant"
    },
    {
      id:4,
      video:"https://advertising.walmart.com/thunder/assets/media-service/wcnp-prod/videos/9d80b141-611e-4c45-ba94-8813700a9109/transcode/f33fda8c-0c92-47e7-846f-66b64d597ec1/720x1280_PROGRESSIVE_5fc.mp4",
      image:"https://i5.walmartimages.com/asr/78581a20-d2ef-48d5-a7a3-6aa8536a7380.6d52a8dad6d3c27fa1a9475fd480a373.jpeg?odnHeight=68&odnWidth=68&odnBg=FFFFFF",
      price:10.99,
      title:"Cute Flower Pot - Potted Flower Pot - Flower Pot"
    },
    {
      id:5,
      video:"https://advertising.walmart.com/thunder/assets/media-service/wcnp-prod/videos/8a1248f1-ee7b-4b3c-803d-ec886fc11ce6/transcode/7c75e0d5-3fd2-4478-94e2-4de5f45173fa/720x1280_PROGRESSIVE_cde.mp4",
      image:"https://i5.walmartimages.com/seo/My-Texas-House-Gemma-Cotton-Decorative-Pillow-Cover-18-x18-Mahogany-Rose_0d8cef1f-74e4-409c-9ae6-dfa17e0cdc10.6cfa502cfed72e2eadffc18117824b10.jpeg?odnHeight=68&odnWidth=68&odnBg=FFFFFF",
      price:18.99,
      title:"My Texas House Gemma Cotton Decorative Pillow Cover, 18 inchx18 inch, Mahogany Rose, Size: 18 inch x 18 inch"
    }
  ])
  //categories
  let [categories,setCategories] = useState([
    {
      id:1,
      image:"https://i5.walmartimages.com/dfw/4ff9c6c9-6406/k2-_987b6e28-ac24-4c30-a150-afe57033daf2.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
      title:"Grocery"
    },
    {
      id:2,
      image:"https://i5.walmartimages.com/dfw/4ff9c6c9-8370/k2-_15a0a4d2-1619-4914-94cd-774567d41404.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
      title:"Home"
    },
    {
      id:3,
      image:"https://i5.walmartimages.com/dfw/4ff9c6c9-16a3/k2-_f9b2f53c-a2c0-40bf-8e25-692c544b3baf.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
      title:"Patio & Garden"
    },
    {
      id:4,
      image:"https://i5.walmartimages.com/dfw/4ff9c6c9-48f6/k2-_7aed4b13-f076-4785-8b0c-2a8343c2b70c.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
      title:"Fashion"
    },
    {
      id:5,
      image:"https://i5.walmartimages.com/dfw/4ff9c6c9-9674/k2-_cd6b8be4-8bfb-47bc-9843-49e8ed571106.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
      title:"Electronics",
    },
    {
      id:6,
      image:"https://i5.walmartimages.com/dfw/4ff9c6c9-648f/k2-_c76e7139-cecb-4d48-893d-686d9bbbbfbe.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
      title:"Baby"
    },
    {
      id:7,
      image:"https://i5.walmartimages.com/dfw/4ff9c6c9-6897/k2-_9d771225-ddc0-4ae4-8302-1921a8ace961.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
      title:"Toys"
    },
    {
      id:8,
      image:"https://i5.walmartimages.com/dfw/4ff9c6c9-2281/k2-_240ae09f-fd48-4b80-aa8d-7bbed28ae7ea.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
      title:"Personal Care"
    },
    {
      id:9,
      image:"https://i5.walmartimages.com/dfw/4ff9c6c9-5ae9/k2-_d40ab856-ee32-437c-9a44-c9b93df4aff0.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
      title:"Beauty"
    },
    {
      id:10,
      image:"https://i5.walmartimages.com/dfw/4ff9c6c9-a077/k2-_02b361d9-ab7b-45e9-95fb-3060dd6be190.v1.jpg?odnHeight=120&odnWidth=120&odnBg=FFFFFF",
      title:"Home Improvement"
    }
  ])
  //entainment
  let [entertainment,setEntertainment] = useState([
    {
      id:1,
      image:"https://i5.walmartimages.com/asr/1c1587cb-1e6c-4830-a6c3-7d4a4fc636b6.510bbc09494a635bf4bf76139ba00671.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:17.89,
      title:"Nerf Better Than Balloons Water Toys, 228 Pods, Easy 1 Piece Clean Up, Ages 3 "
    },
    {
      id:2,
      image:"https://i5.walmartimages.com/asr/a2c6ba59-ddc0-4ff0-800a-f14fa37c48a2.b65ba5887c7e3e921b8b062a171f6194.png?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:9.89,
      title:"X-Shot Water Fast-Fill Pink Party Hyperload Water Blaster by ZURU"
    },
    {
      id:3,
      image:"https://i5.walmartimages.com/seo/onn-7-Tablet-32GB-2024-Model-Papaya_605c26e0-10d3-40d5-abdd-865c4760bd54.33d24c580fcdadb3d0ef779bf0b76c8b.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:59.00,
      title:"Tablet 32GB 2024 Model Papaya"
    },
    {
      id:4,
      image:"https://i5.walmartimages.com/asr/137de74e-e5ae-42b8-936a-679289922083.c47136ca39b485e472634cb8f2f6adf5.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:12.89,
      title:"Play Day Bubble Leaf Blower, Battery Operated, Bubble Blowing Toy, For ages 3"
    },
    {
      id:5,
      image:"https://i5.walmartimages.com/seo/Goblies-Throwable-Paintball-Dual-Pack-Pink-Purple_dfec06b2-5535-4192-92c0-6b85ed323d62.7e96df7c6e789787478461953eb8387e.png?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:"12.89",
      title:"Goblies Throwable Paintball Dual Pack Pink Purple"
    },
    {
      id:6,
      image:"https://i5.walmartimages.com/seo/Create-Basics-3-Color-Tie-Dye-Kit-Nautical-Trial-Size-Pack_54759610-cabb-4fd0-b55f-0740a9c9c1ff.a9d46b83253b0f623da465c89b30b0e4.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:9.89,
      title:"Create Basics 3 Color Tie Dye Kit Nautical Trial Size Pack"
    },
    {
      id:7,
      image:"https://i5.walmartimages.com/asr/a47666ba-71b7-49cb-a3e8-024bea669a7e.7d7c30fa9419cc4e3116f8233e1e67f7.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:138.00,
      title:"Kent 20 Boys Maddgear Child Bike, Blue"
    },
    {
      id:8,
      image:"https://i5.walmartimages.com/asr/623b8eb4-16af-4fc1-a72e-6d5b6f8727a4.63d7da928464b1a75591183907cab17f.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:2.89,
      title:"Playday 8pk 4oz Bubbles, 8 Pack, 4 Colors, Pink, Red, Orange, Green"
    },
    {
      id:9,
      image:"https://i5.walmartimages.com/asr/113f3ad8-8392-4040-916a-bc625e698b16.6d5102100fe6fff41dba519ef6b99b07.png?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:7.68,
      title:"Goblies Play Paint for Water Blasters 25.3 fl. oz. (Green)"
    },
    {
      id:10,
      image:"https://i5.walmartimages.com/asr/dec46c03-7bd2-49dc-a79e-3f4a10659499.efd29122224c6d70b4adc775673913c8.jpeg?odnHeight=175&odnWidth=175&odnBg=FFFFFF",
      price:9.98,
      title:"Nerf Super Soaker Flip Fill Water Blaster, Fast Fill, 30 Fluid Ounce Tank, Water Toys"
    }
  ])

  let dataValues ={
    flashDeals,
    screenTime,
    gateway,
    capParty,
    socialMedia,
    categories,
    entertainment,
  };
  return (
    <ProductsData.Provider value={dataValues}>
      {children}
    </ProductsData.Provider>
  )
}
