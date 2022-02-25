const allProducts = () => { 
  const allProductsArr = [
    {
      Category: "skin",
      Name: "Day Glow Sunscreen Face and Body Lotion SPF 30+for All Skin Types",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/DAYGLOW-01_1024x1024.jpg?v=1632393899",
      Price: "301",
      Price1: "390",
      Rating: "4",
      Review: "773",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "skin",
      Name: "Glowtion Face & Body Butter Lotion For Skin Brightening & Deep Moisturization - 100ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowtion-01_1024x1024.jpg?v=1634219952",
      Price: "249",
      Price1: "360",
      Rating: "4",
      Review: "240",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "skin",
      Name: "SuperScrub Natural Dirt Removal & Skin Brightening Scrub Cream - 85g",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/SuperScrub-01_1024x1024.jpg?v=1632303623",
      Price: "199",
      Price1: "210",
      Rating: "4.5",
      Review: "206",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "skin",
      Name: "PapyBlem Pigmentation Blemish Cream Gel For Skin Brightening with Papaya & Saffron - 85gm",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/PapyblemFaceGel-01_1024x1024.jpg?v=1632988046",
      Price1: "501",
      Price: "445",
      Rating: "4",
      Review: "291",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "skin",
      Name: "Multani Mitti Ubtan Plus Face Glow Pack For Oil Control, De-Tan, Acne, Pimples - 80 g Unisex For All Skin Types",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/UBTANPLUS-01_8081e672-4c0f-41ac-bda5-bf983c844826_1024x1024.jpg?v=1632576315",
      Price1: "389",
      Price: "219",
      Rating: "4",
      Review: "114",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "skin",
      Name: "Exfoliate Face and Body Scrub Grit, Skin Brightening, De-Tan Removal - 75gm",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1024x1024.jpg?v=1626345623",
      Price: "223",
      Price1: "300",
      Rating: "4.5",
      Review: "523",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "skin",
      Name: "Glowey Face Pack, Scrub & Face Wash 3 in 1 for Glowing Skin & Radiance Unisex Ayurveda, 100 g With Free Face Pack Applicator Brush",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowey-01_1024x1024.jpg?v=1645601062",
      Price: "298",
      Price1: "369",
      Rating: "4.5",
      Review: "1605",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "skin",
      Name: "SkinSolve Multi Benefit Face Cream & Body Butter For Dry Skin, Stretch Marks, Tattoo Balm, Rash Relief, Make up Base - 85 g",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/SkinSolve-01_1024x1024.jpg?v=1632306325",
      Price1: "429",
      Price: "366",
      Rating: "4",
      Review: "35",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "skin",
      Name: "Oil Control Face Wash with Activated Charcoal For Deep Cleansing, Dirt Removal & Skin Brightening, 115ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/oilcontrolfacewash-01_1024x1024.jpg?v=1626505575",
      Price1: "499",
      Price: "355",
      Rating: "4",
      Review: "55",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "skin",
      Name: "Micellar Water - Best Natural Makeup Remover and Cleanser - 225 ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/MicellarWater-01_1024x1024.jpg?v=1632824206",
      Price1: "478",
      Price: "399",
      Rating: "4",
      Review: "254",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "skin",
      Name: "Glowner Rose Water Face Toner & Mist - Natural Toner Spray for Glowing Skin for All Skin Type - 200 ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowner-01_1024x1024.jpg?v=1632557600",
      Price1: "599",
      Price: "401",
      Rating: "4",
      Review: "239",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "hair",
      Name: "SilkyStrong Coffee Onion Ayurvedic Herbal Anti-Dandruff Natural Hair Growth Oil, Volume & Fall Control - 225ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/SilkystrongHairOil-01_1024x1024.jpg?v=1632921308",
      Price1: "249",
      Price: "198",
      Rating: "4",
      Review: "215",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "hair",
      Name: "Growth Protein Shampoo & Conditioner Combo For Hair Fall Control & Dry & Frizz Free Hair - 225 ml Each",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Shampoo-_-Hair-Conditioner_90114dd9-cf21-4197-8f70-2ff13fea741c_1024x1024.jpg?v=1632218249",
      Price1: "349",
      Price: "326",
      Rating: "5",
      Review: "1236",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "hair",
      Name: "Growth Protein Hair Spa Mask For Hairfall Control, Frizzy Hair Cream, Color Damaged Hair Repair & Growth With Keratin, Biotin, Argan, Onion, Tea Tree & Coffee, 225 g",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairMasque-1_1024x1024.jpg?v=1632814654",
      Price1: "495",
      Price: "426",
      Rating: "5",
      Review: "374",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "hair",
      Name: "Growth Protein Natural Hair Conditioner For Hair Fall, Dry & Frizzy Hair - 225 ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairConditioner-1_1024x1024.jpg?v=1632475566",
      Price1: "456",
      Price: "399",
      Rating: "4",
      Review: "128",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "hair",
      Name: "Oil Control Shampoo For Oily Hair & Scalp Anti Dandruff, Neem, Tea Tree & Basil 225 ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/OilControlShampoo-01_1_1024x1024.jpg?v=1621313274",
      Price1: "298",
      Price: "239",
      Rating: "4",
      Review: "128",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "hair",
      Name: "Hair Perfume Mist Spray For All Hair Types Alcohol Free With Fresh and Floral Long Lasting Fragrance Unisex - 50ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/HairPerfume-01_1024x1024.jpg?v=1626681100",
      Price1: "199",
      Price: "159",
      Rating: "5",
      Review: "487",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "hair",
      Name: "Dual Teeth Wooden Neem Comb For Tanglefree Curls and Healthy Scalp",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/NeemCombDualTeeth-01_1024x1024.jpg?v=1633437311",
      Price1: "315",
      Price: "301",
      Rating: "4",
      Review: "345",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
        Category: "face",
        Name: "Exfoliate Face and Body Scrub Grit, Skin Brightening, De-Tan Removal - 75gm",
        Img_url:
            "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1024x1024.jpg?v=1626345623",
        Price1: "185",
        Price: "165",
        Rating: "5",
        Review: "1524",
        dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
        Qty: 1,
        },
        {
        Category: "face",
        Name: "Glowey Face Pack, Scrub & Face Wash 3 in 1 for Glowing Skin & Radiance Unisex Ayurveda, 100 g With Free Face Pack Applicator Brush",
        Img_url:
            "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowey-01_1024x1024.jpg?v=1645601062",
        Price1: "454",
        Price: "309",
        Rating: "5",
        Review: "644",
        dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
        Qty: 1,
        },
        {
        Category: "face",
        Name: "DryGlow Natural Face Wash For Dry Skin With Papaya, Saffron, Turmeric, Aloe, Brightening & Hydrating Sulfate Paraben Free for Men, Women, Unisex - 115gm",
        Img_url:
            "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/DryGlow-01_1024x1024.jpg?v=1620725250",
        Price1: "359",
        Price: "301",
        Rating: "4",
        Review: "55",
        dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
        Qty: 1,
    },
    {
      Category: "face",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/RoseGlow-01_1024x1024.jpg?v=1632907878",
      Name: "Rose Glow Face Gel For Pore Minimising, Oil Control & Skin Brightening - 85 gm",
      Price1: "499",
      Price: "299",
      Rating: "4",
      Review: "46",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "body",
      Name: "Glowtion Face & Body Butter Lotion For Skin Brightening & Deep Moisturization - 100ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowtion-01_1024x1024.jpg?v=1634219952",
      Price1: "369",
      Price: "319",
      Rating: "5",
      Review: "137",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "face",
      Name: "Glowner Rose Water Face Toner & Mist - Natural Toner Spray for Glowing Skin for All Skin Type - 200 ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Glowner-01_1024x1024.jpg?v=1632557600",
      Price1: "499",
      Price: "399",
      Rating: "4.5",
      Review: "201",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "face",
      Name: "Micellar Water - Best Natural Makeup Remover and Cleanser - 225 ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/MicellarWater-01_1024x1024.jpg?v=1632824206",
      Price1: "399",
      Price: "349",
      Rating: "4",
      Review: "78",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "face",
      Name: "21 Again Anti Ageing & Skin Glow Face Serum - 35 ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/21Again-01_1024x1024.jpg?v=1634638149",
      Price1: "312",
      Price: "299",
      Rating: "5",
      Review: "666",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "body",
      Name: "Exfoliate Face and Body Scrub Grit, Skin Brightening, De-Tan Removal - 75gm",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Exfoliate-01_1024x1024.jpg?v=1626345623",
      Price1: "499",
      Price: "399",
      Rating: "5",
      Review: "198",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "body",
      Name: "SkinSolve Multi Benefit Face Cream & Body Butter For Dry Skin, Stretch Marks, Tattoo Balm, Rash Relief, Make up Base - 85 g",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/SkinSolve-01_1024x1024.jpg?v=1632306325",
      Price1: "298",
      Price: "233",
      Rating: "5",
      Review: "102",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },

    {
      Category: "body",
      Name: "Super Oud Unisex Perfume For Men & Women - 100ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/OUD02_1024x1024.jpg?v=1626682093g",
      Price1: "199",
      Price: "146",
      Rating: "4",
      Review: "356",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "body",
      Name: "Salute Strong Woody Perfume For Men, 100 ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Salute-01_1024x1024.jpg?v=1632485142",
      Price1: "499",
      Price: "258",
      Rating: "4",
      Review: "367",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "body",
      Name: "Belly Drops Ayurvedic Navel Oil For Menstrual Pain, Period Pain Relief Oil - 15 Ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Bellydropsmenstrualpainrelief-01_1024x1024.jpg?v=1632815174",
      Price1: "599",
      Price: "154",
      Rating: "5",
      Review: "366",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "body",
      Name: "Gold Woman EDP - Luxury Perfume For Women With Long Lasting Fresh & Fruity Fragrance - 100 ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/Gold_1_1024x1024.jpg?v=1632213971",
      Price1: "301",
      Price: "198",
      Rating: "4",
      Review: "25",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
    {
      Category: "body",
      Name: "Celeb Shine Body Shimmer Gloss Lotion For All Skin Types, Gold Shade, 50 ml",
      Img_url:
        "https://cdn.shopify.com/s/files/1/0054/6665/2718/products/CelebshineGold-01_1024x1024.jpg?v=1631698378",
      Price1: "425",
      Price: "401",
      Rating: "5",
      Review: "332",
      dis: "Bella Vita Organic's Eyelift Under Eye Cream Gel makes for a great companion for reducing dark circles, dullness and puffy eyes. It is curated with natural cucumber extract, tulsi, jojoba oil, almond oil & pure aloe-vera gel, meant for everyday...",
      Qty: 1,
    },
  ];

  return allProductsArr;
}

export {allProducts};