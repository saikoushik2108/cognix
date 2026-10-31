// Auto-seeded persistent data definitions for KnowFlow AI
// Pre-populated from Neo4j Aura Knowledge Graph (591 documents, 2717 entities, 1838 facts)

export const INITIAL_DOCUMENTS = [
  {
    "id": "inv-a140fb",
    "filename": "KatanaML_Invoice_001.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #97159829 issued by Bradley-Andrade 9879 Elizabeth Common Lake Jonathan, RI 12335 to Castro PLC Unit 9678 Box 9664 DPO AP 69387 for gross total $ 978,12 on 09/18/2015.",
    "text_content": "========================================================================\nINVOICE #97159829\nIssuance Date: 09/18/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Bradley-Andrade 9879 Elizabeth Common Lake Jonathan, RI 12335\nTax Identifier: 985-73-8194\nSettlement IBAN: GB81LZWO32519172531418\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Castro PLC Unit 9678 Box 9664 DPO AP 69387\nTax Identifier: 994-72-1270\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 12\" Marble Lapis Inlay Chess Table Top With 2\" Pieces & 15\" Wooden Stand W537\n   Quantity: 2,00 | Unit Price: 444,60 | Net Worth: 889,20 | VAT: 10% | Gross Total: 978,12\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 889,20\nTax / VAT: $ 88,92\nGross Total Due: $ 978,12\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #97159829 Document & OCR",
        "text": "========================================================================\nINVOICE #97159829\nIssuance Date: 09/18/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Bradley-Andrade 9879 Elizabeth Common Lake Jonathan, RI 12335\nTax Identifier: 985-73-8194\nSettlement IBAN: GB81LZWO32519172531418\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Castro PLC Unit 9678 Box 9664 DPO AP 69387\nTax Identifier: 994-72-1270\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 12\" Marble Lapis Inlay Chess Table Top With 2\" Pieces & 15\" Wooden Stand W537\n   Quantity: 2,00 | Unit Price: 444,60 | Net Worth: 889,20 | VAT: 10% | Gross Total: 978,12\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 889,20\nTax / VAT: $ 88,92\nGross Total Due: $ 978,12\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "97159829",
      "date": "09/18/2015",
      "total_amount": "$ 978,12",
      "subtotal": "$ 889,20",
      "tax_amount": "$ 88,92",
      "seller": "Bradley-Andrade 9879 Elizabeth Common Lake Jonathan, RI 12335",
      "client": "Castro PLC Unit 9678 Box 9664 DPO AP 69387",
      "iban": "GB81LZWO32519172531418",
      "items": [
        {
          "description": "12\" Marble Lapis Inlay Chess Table Top With 2\" Pieces & 15\" Wooden Stand W537",
          "quantity": "2,00",
          "unit_price": "444,60",
          "total_price": "889,20",
          "vat": "10%",
          "gross_worth": "978,12"
        }
      ],
      "seller_tax_id": "985-73-8194",
      "client_tax_id": "994-72-1270",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-a140fb/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-a140fb/image"
  },
  {
    "id": "inv-e42ddc",
    "filename": "KatanaML_Invoice_002.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #13194726 issued by Hopkins and Sons 62283 Flores Tunnel North Luis, IA 69983 to Sims PLC USS Kramer FPO AA 81651 for gross total $ 640,12 on 05/29/2021.",
    "text_content": "========================================================================\nINVOICE #13194726\nIssuance Date: 05/29/2021\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Hopkins and Sons 62283 Flores Tunnel North Luis, IA 69983\nTax Identifier: 952-73-7223\nSettlement IBAN: GB31LZX520242755934691\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Sims PLC USS Kramer FPO AA 81651\nTax Identifier: 995-88-9495\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Beach Lunch Lounge Striped Shirt Dress Large Navy Blue White Long Sleeve Causal\n   Quantity: 1,00 | Unit Price: 16,99 | Net Worth: 16,99 | VAT: 10% | Gross Total: 18,69\n2. Jams World Hawaiian 0 Dress Rayon SZ.L\n   Quantity: 5,00 | Unit Price: 65,00 | Net Worth: 325,00 | VAT: 10% | Gross Total: 357,50\n3. LuLaRoe Nicole Dress Size Large 26\n   Quantity: 2,00 | Unit Price: 1,99 | Net Worth: 3,98 | VAT: 10% | Gross Total: 4,38\n4. Johnny Was Medium Linen Wrap Dress Dessert Rose Embroiderd Bohemian\n   Quantity: 2,00 | Unit Price: 89,99 | Net Worth: 179,98 | VAT: 10% | Gross Total: 197,98\n5. Eileen Fisher Women's Long Sleeve Fleece Lined Front Pockets Dress XS Gray\n   Quantity: 2,00 | Unit Price: 15,99 | Net Worth: 31,98 | VAT: 10% | Gross Total: 35,18\n6. Hanna Anderson Women's L Large Coral Short Sleeve Casual Fall Tee Shirt Dress\n   Quantity: 1,00 | Unit Price: 24,00 | Net Worth: 24,00 | VAT: 10% | Gross Total: 26,40\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $581,93\nTax / VAT: $58,19\nGross Total Due: $ 640,12\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #13194726 Document & OCR",
        "text": "========================================================================\nINVOICE #13194726\nIssuance Date: 05/29/2021\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Hopkins and Sons 62283 Flores Tunnel North Luis, IA 69983\nTax Identifier: 952-73-7223\nSettlement IBAN: GB31LZX520242755934691\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Sims PLC USS Kramer FPO AA 81651\nTax Identifier: 995-88-9495\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Beach Lunch Lounge Striped Shirt Dress Large Navy Blue White Long Sleeve Causal\n   Quantity: 1,00 | Unit Price: 16,99 | Net Worth: 16,99 | VAT: 10% | Gross Total: 18,69\n2. Jams World Hawaiian 0 Dress Rayon SZ.L\n   Quantity: 5,00 | Unit Price: 65,00 | Net Worth: 325,00 | VAT: 10% | Gross Total: 357,50\n3. LuLaRoe Nicole Dress Size Large 26\n   Quantity: 2,00 | Unit Price: 1,99 | Net Worth: 3,98 | VAT: 10% | Gross Total: 4,38\n4. Johnny Was Medium Linen Wrap Dress Dessert Rose Embroiderd Bohemian\n   Quantity: 2,00 | Unit Price: 89,99 | Net Worth: 179,98 | VAT: 10% | Gross Total: 197,98\n5. Eileen Fisher Women's Long Sleeve Fleece Lined Front Pockets Dress XS Gray\n   Quantity: 2,00 | Unit Price: 15,99 | Net Worth: 31,98 | VAT: 10% | Gross Total: 35,18\n6. Hanna Anderson Women's L Large Coral Short Sleeve Casual Fall Tee Shirt Dress\n   Quantity: 1,00 | Unit Price: 24,00 | Net Worth: 24,00 | VAT: 10% | Gross Total: 26,40\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $581,93\nTax / VAT: $58,19\nGross Total Due: $ 640,12\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "13194726",
      "date": "05/29/2021",
      "total_amount": "$ 640,12",
      "subtotal": "$581,93",
      "tax_amount": "$58,19",
      "seller": "Hopkins and Sons 62283 Flores Tunnel North Luis, IA 69983",
      "client": "Sims PLC USS Kramer FPO AA 81651",
      "iban": "GB31LZX520242755934691",
      "items": [
        {
          "description": "Beach Lunch Lounge Striped Shirt Dress Large Navy Blue White Long Sleeve Causal",
          "quantity": "1,00",
          "unit_price": "16,99",
          "total_price": "16,99",
          "vat": "10%",
          "gross_worth": "18,69"
        },
        {
          "description": "Jams World Hawaiian 0 Dress Rayon SZ.L",
          "quantity": "5,00",
          "unit_price": "65,00",
          "total_price": "325,00",
          "vat": "10%",
          "gross_worth": "357,50"
        },
        {
          "description": "LuLaRoe Nicole Dress Size Large 26",
          "quantity": "2,00",
          "unit_price": "1,99",
          "total_price": "3,98",
          "vat": "10%",
          "gross_worth": "4,38"
        },
        {
          "description": "Johnny Was Medium Linen Wrap Dress Dessert Rose Embroiderd Bohemian",
          "quantity": "2,00",
          "unit_price": "89,99",
          "total_price": "179,98",
          "vat": "10%",
          "gross_worth": "197,98"
        },
        {
          "description": "Eileen Fisher Women's Long Sleeve Fleece Lined Front Pockets Dress XS Gray",
          "quantity": "2,00",
          "unit_price": "15,99",
          "total_price": "31,98",
          "vat": "10%",
          "gross_worth": "35,18"
        },
        {
          "description": "Hanna Anderson Women's L Large Coral Short Sleeve Casual Fall Tee Shirt Dress",
          "quantity": "1,00",
          "unit_price": "24,00",
          "total_price": "24,00",
          "vat": "10%",
          "gross_worth": "26,40"
        }
      ],
      "seller_tax_id": "952-73-7223",
      "client_tax_id": "995-88-9495",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-e42ddc/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-e42ddc/image"
  },
  {
    "id": "inv-01e4d9",
    "filename": "KatanaML_Invoice_003.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #62517865 issued by Trujillo-Hunt 430 Mark Ferry Suite 495 Maxside, DC 65686 to Lee and Sons 8552 Karen Islands East Roger, ID 40416 for gross total $9,35 on 06/02/2015.",
    "text_content": "========================================================================\nINVOICE #62517865\nIssuance Date: 06/02/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Trujillo-Hunt 430 Mark Ferry Suite 495 Maxside, DC 65686\nTax Identifier: 992-71-8540\nSettlement IBAN: GB73HCPH34959888432899\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Lee and Sons 8552 Karen Islands East Roger, ID 40416\nTax Identifier: 929-86-0601\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Care & Repair of Furniture\n   Quantity: 2,00 | Unit Price: 4,25 | Net Worth: 8,50 | VAT: 10% | Gross Total: 9,35\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 8,50\nTax / VAT: $0,85\nGross Total Due: $9,35\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #62517865 Document & OCR",
        "text": "========================================================================\nINVOICE #62517865\nIssuance Date: 06/02/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Trujillo-Hunt 430 Mark Ferry Suite 495 Maxside, DC 65686\nTax Identifier: 992-71-8540\nSettlement IBAN: GB73HCPH34959888432899\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Lee and Sons 8552 Karen Islands East Roger, ID 40416\nTax Identifier: 929-86-0601\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Care & Repair of Furniture\n   Quantity: 2,00 | Unit Price: 4,25 | Net Worth: 8,50 | VAT: 10% | Gross Total: 9,35\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 8,50\nTax / VAT: $0,85\nGross Total Due: $9,35\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "62517865",
      "date": "06/02/2015",
      "total_amount": "$9,35",
      "subtotal": "$ 8,50",
      "tax_amount": "$0,85",
      "seller": "Trujillo-Hunt 430 Mark Ferry Suite 495 Maxside, DC 65686",
      "client": "Lee and Sons 8552 Karen Islands East Roger, ID 40416",
      "iban": "GB73HCPH34959888432899",
      "items": [
        {
          "description": "Care & Repair of Furniture",
          "quantity": "2,00",
          "unit_price": "4,25",
          "total_price": "8,50",
          "vat": "10%",
          "gross_worth": "9,35"
        }
      ],
      "seller_tax_id": "992-71-8540",
      "client_tax_id": "929-86-0601",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-01e4d9/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-01e4d9/image"
  },
  {
    "id": "inv-aff77b",
    "filename": "KatanaML_Invoice_004.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #56014042 issued by Nichols-Barajas 3882 Stacy Ville Apt. 488 Lake Kristinatown, ND 48049 to Mckay PLC 5542 Danielle Drive Suite 381 West Mason, ME 76671 for gross total $65,45 on 10/01/2014.",
    "text_content": "========================================================================\nINVOICE #56014042\nIssuance Date: 10/01/2014\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Nichols-Barajas 3882 Stacy Ville Apt. 488 Lake Kristinatown, ND 48049\nTax Identifier: 953-87-6813\nSettlement IBAN: GB08KXQT197119711661357354\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Mckay PLC 5542 Danielle Drive Suite 381 West Mason, ME 76671\nTax Identifier: 965-90-8517\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Jordan Hydro 2 (TD)-Child Size\n   Quantity: 2,00 | Unit Price: 5,75 | Net Worth: 11,50 | VAT: 10% | Gross Total: 12,65\n2. Sketchers Energy Lights Boys Black Canvas Size 4 With Charging Cable\n   Quantity: 4,00 | Unit Price: 12,00 | Net Worth: 48,00 | VAT: 10% | Gross Total: 52,80\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $59,50\nTax / VAT: $5,95\nGross Total Due: $65,45\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #56014042 Document & OCR",
        "text": "========================================================================\nINVOICE #56014042\nIssuance Date: 10/01/2014\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Nichols-Barajas 3882 Stacy Ville Apt. 488 Lake Kristinatown, ND 48049\nTax Identifier: 953-87-6813\nSettlement IBAN: GB08KXQT197119711661357354\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Mckay PLC 5542 Danielle Drive Suite 381 West Mason, ME 76671\nTax Identifier: 965-90-8517\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Jordan Hydro 2 (TD)-Child Size\n   Quantity: 2,00 | Unit Price: 5,75 | Net Worth: 11,50 | VAT: 10% | Gross Total: 12,65\n2. Sketchers Energy Lights Boys Black Canvas Size 4 With Charging Cable\n   Quantity: 4,00 | Unit Price: 12,00 | Net Worth: 48,00 | VAT: 10% | Gross Total: 52,80\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $59,50\nTax / VAT: $5,95\nGross Total Due: $65,45\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "56014042",
      "date": "10/01/2014",
      "total_amount": "$65,45",
      "subtotal": "$59,50",
      "tax_amount": "$5,95",
      "seller": "Nichols-Barajas 3882 Stacy Ville Apt. 488 Lake Kristinatown, ND 48049",
      "client": "Mckay PLC 5542 Danielle Drive Suite 381 West Mason, ME 76671",
      "iban": "GB08KXQT197119711661357354",
      "items": [
        {
          "description": "Jordan Hydro 2 (TD)-Child Size",
          "quantity": "2,00",
          "unit_price": "5,75",
          "total_price": "11,50",
          "vat": "10%",
          "gross_worth": "12,65"
        },
        {
          "description": "Sketchers Energy Lights Boys Black Canvas Size 4 With Charging Cable",
          "quantity": "4,00",
          "unit_price": "12,00",
          "total_price": "48,00",
          "vat": "10%",
          "gross_worth": "52,80"
        }
      ],
      "seller_tax_id": "953-87-6813",
      "client_tax_id": "965-90-8517",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-aff77b/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-aff77b/image"
  },
  {
    "id": "inv-000827",
    "filename": "KatanaML_Invoice_005.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #16662010 issued by Smith-Cook 174 Justin Causeway West Michaelmouth, ME 69894 to Snyder-Johnson 05173 Heather Mill Jenniferfort, WV79662 for gross total $2259,10 on 08/28/2016.",
    "text_content": "========================================================================\nINVOICE #16662010\nIssuance Date: 08/28/2016\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Smith-Cook 174 Justin Causeway West Michaelmouth, ME 69894\nTax Identifier: 959-84-2124\nSettlement IBAN: GB20BAKH22085364527355\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Snyder-Johnson 05173 Heather Mill Jenniferfort, WV79662\nTax Identifier: 938-85-4960\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working 59\n   Quantity: 1,00 | Unit Price: 65,00 | Net Worth: 65,00 | VAT: 10% | Gross Total: 71,50\n2. New Sony Playstation 4 Slim 1TB 3 Game Bundle Console. Sealed!!!\n   Quantity: 3,00 | Unit Price: 399,99 | Net Worth: 1199,97 | VAT: 10% | Gross Total: 1319,97\n3. Atari Flashback 4 Classic Game Console 75 built in games Space Invaders Asteroid\n   Quantity: 4,00 | Unit Price: 8,50 | Net Worth: 34,00 | VAT: 10% | Gross Total: 37,40\n4. Sony PlayStation 1 PS1 Console model scph-7501\n   Quantity: 4,00 | Unit Price: 14,99 | Net Worth: 59,96 | VAT: 10% | Gross Total: 65,96\n5. Nintendo Wii Console 2 Remotes w/ Covers, Nunchucks, Sensor Sega Game Bundle\n   Quantity: 1,00 | Unit Price: 85,00 | Net Worth: 85,00 | VAT: 10% | Gross Total: 93,50\n6. Sony PlayStation 3 PS3 Super Slim Black Console 20GB *Tested* Console & Cables\n   Quantity: 4,00 | Unit Price: 99,95 | Net Worth: 399,80 | VAT: 10% | Gross Total: 439,78\n7. Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working\n   Quantity: 3,00 | Unit Price: 70,00 | Net Worth: 210,00 | VAT: 10% | Gross Total: 231,00\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $2053,73\nTax / VAT: $205,37\nGross Total Due: $2259,10\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #16662010 Document & OCR",
        "text": "========================================================================\nINVOICE #16662010\nIssuance Date: 08/28/2016\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Smith-Cook 174 Justin Causeway West Michaelmouth, ME 69894\nTax Identifier: 959-84-2124\nSettlement IBAN: GB20BAKH22085364527355\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Snyder-Johnson 05173 Heather Mill Jenniferfort, WV79662\nTax Identifier: 938-85-4960\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working 59\n   Quantity: 1,00 | Unit Price: 65,00 | Net Worth: 65,00 | VAT: 10% | Gross Total: 71,50\n2. New Sony Playstation 4 Slim 1TB 3 Game Bundle Console. Sealed!!!\n   Quantity: 3,00 | Unit Price: 399,99 | Net Worth: 1199,97 | VAT: 10% | Gross Total: 1319,97\n3. Atari Flashback 4 Classic Game Console 75 built in games Space Invaders Asteroid\n   Quantity: 4,00 | Unit Price: 8,50 | Net Worth: 34,00 | VAT: 10% | Gross Total: 37,40\n4. Sony PlayStation 1 PS1 Console model scph-7501\n   Quantity: 4,00 | Unit Price: 14,99 | Net Worth: 59,96 | VAT: 10% | Gross Total: 65,96\n5. Nintendo Wii Console 2 Remotes w/ Covers, Nunchucks, Sensor Sega Game Bundle\n   Quantity: 1,00 | Unit Price: 85,00 | Net Worth: 85,00 | VAT: 10% | Gross Total: 93,50\n6. Sony PlayStation 3 PS3 Super Slim Black Console 20GB *Tested* Console & Cables\n   Quantity: 4,00 | Unit Price: 99,95 | Net Worth: 399,80 | VAT: 10% | Gross Total: 439,78\n7. Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working\n   Quantity: 3,00 | Unit Price: 70,00 | Net Worth: 210,00 | VAT: 10% | Gross Total: 231,00\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $2053,73\nTax / VAT: $205,37\nGross Total Due: $2259,10\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "16662010",
      "date": "08/28/2016",
      "total_amount": "$2259,10",
      "subtotal": "$2053,73",
      "tax_amount": "$205,37",
      "seller": "Smith-Cook 174 Justin Causeway West Michaelmouth, ME 69894",
      "client": "Snyder-Johnson 05173 Heather Mill Jenniferfort, WV79662",
      "iban": "GB20BAKH22085364527355",
      "items": [
        {
          "description": "Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working 59",
          "quantity": "1,00",
          "unit_price": "65,00",
          "total_price": "65,00",
          "vat": "10%",
          "gross_worth": "71,50"
        },
        {
          "description": "New Sony Playstation 4 Slim 1TB 3 Game Bundle Console. Sealed!!!",
          "quantity": "3,00",
          "unit_price": "399,99",
          "total_price": "1199,97",
          "vat": "10%",
          "gross_worth": "1319,97"
        },
        {
          "description": "Atari Flashback 4 Classic Game Console 75 built in games Space Invaders Asteroid",
          "quantity": "4,00",
          "unit_price": "8,50",
          "total_price": "34,00",
          "vat": "10%",
          "gross_worth": "37,40"
        },
        {
          "description": "Sony PlayStation 1 PS1 Console model scph-7501",
          "quantity": "4,00",
          "unit_price": "14,99",
          "total_price": "59,96",
          "vat": "10%",
          "gross_worth": "65,96"
        },
        {
          "description": "Nintendo Wii Console 2 Remotes w/ Covers, Nunchucks, Sensor Sega Game Bundle",
          "quantity": "1,00",
          "unit_price": "85,00",
          "total_price": "85,00",
          "vat": "10%",
          "gross_worth": "93,50"
        },
        {
          "description": "Sony PlayStation 3 PS3 Super Slim Black Console 20GB *Tested* Console & Cables",
          "quantity": "4,00",
          "unit_price": "99,95",
          "total_price": "399,80",
          "vat": "10%",
          "gross_worth": "439,78"
        },
        {
          "description": "Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working",
          "quantity": "3,00",
          "unit_price": "70,00",
          "total_price": "210,00",
          "vat": "10%",
          "gross_worth": "231,00"
        }
      ],
      "seller_tax_id": "959-84-2124",
      "client_tax_id": "938-85-4960",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-000827/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-000827/image"
  },
  {
    "id": "inv-4dad72",
    "filename": "KatanaML_Invoice_006.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #27543706 issued by Kaiser, Hays and Cook 460 Richard Forge Lake Maria, CA 86826 to Holland PLC 10833 Hill Courts Suite 606 Collinsland, CA 60385 for gross total 48 801,10 on 07/20/2020.",
    "text_content": "========================================================================\nINVOICE #27543706\nIssuance Date: 07/20/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Kaiser, Hays and Cook 460 Richard Forge Lake Maria, CA 86826\nTax Identifier: 980-78-9083\nSettlement IBAN: GB82GOCR29918894344551\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Holland PLC 10833 Hill Courts Suite 606 Collinsland, CA 60385\nTax Identifier: 998-85-0115\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Marble Beautiful White Coffee Table Top Malachite Inlay Art Home Decor H5372\n   Quantity: 5,00 | Unit Price: 271,01 | Net Worth: 1355,05 | VAT: 10% | Gross Total: 1 490,55\n2. 15\"x15\" White Decorative Coffee Table Top Lapis Lazuli Marquetery Patio D\u00e9cor\n   Quantity: 4,00 | Unit Price: 645,77 | Net Worth: 2583,08 | VAT: 10% | Gross Total: 2 841,39\n3. 16 Inches Marble Coffee Table Top Inlay with Multi Stone at Border Game Table\n   Quantity: 1,00 | Unit Price: 280,50 | Net Worth: 280,50 | VAT: 10% | Gross Total: 308,55\n4. 18\" Black Marble Coffee Table Top Mother of Pearl Inlay Furniture Decors H1883B\n   Quantity: 3,00 | Unit Price: 377,65 | Net Worth: 1132,95 | VAT: 10% | Gross Total: 1246,24\n5. 7'x4' Pietra Dura Marble Dining Hallway Table Top Inlay Design Patio Decor E977A\n   Quantity: 2,00 | Unit Price: 19 506,53 | Net Worth: 39 013,06 | VAT: 10% | Gross Total: 42 914,37\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 44 364,64\nTax / VAT: $4436,46\nGross Total Due: 48 801,10\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #27543706 Document & OCR",
        "text": "========================================================================\nINVOICE #27543706\nIssuance Date: 07/20/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Kaiser, Hays and Cook 460 Richard Forge Lake Maria, CA 86826\nTax Identifier: 980-78-9083\nSettlement IBAN: GB82GOCR29918894344551\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Holland PLC 10833 Hill Courts Suite 606 Collinsland, CA 60385\nTax Identifier: 998-85-0115\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Marble Beautiful White Coffee Table Top Malachite Inlay Art Home Decor H5372\n   Quantity: 5,00 | Unit Price: 271,01 | Net Worth: 1355,05 | VAT: 10% | Gross Total: 1 490,55\n2. 15\"x15\" White Decorative Coffee Table Top Lapis Lazuli Marquetery Patio D\u00e9cor\n   Quantity: 4,00 | Unit Price: 645,77 | Net Worth: 2583,08 | VAT: 10% | Gross Total: 2 841,39\n3. 16 Inches Marble Coffee Table Top Inlay with Multi Stone at Border Game Table\n   Quantity: 1,00 | Unit Price: 280,50 | Net Worth: 280,50 | VAT: 10% | Gross Total: 308,55\n4. 18\" Black Marble Coffee Table Top Mother of Pearl Inlay Furniture Decors H1883B\n   Quantity: 3,00 | Unit Price: 377,65 | Net Worth: 1132,95 | VAT: 10% | Gross Total: 1246,24\n5. 7'x4' Pietra Dura Marble Dining Hallway Table Top Inlay Design Patio Decor E977A\n   Quantity: 2,00 | Unit Price: 19 506,53 | Net Worth: 39 013,06 | VAT: 10% | Gross Total: 42 914,37\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 44 364,64\nTax / VAT: $4436,46\nGross Total Due: 48 801,10\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "27543706",
      "date": "07/20/2020",
      "total_amount": "48 801,10",
      "subtotal": "$ 44 364,64",
      "tax_amount": "$4436,46",
      "seller": "Kaiser, Hays and Cook 460 Richard Forge Lake Maria, CA 86826",
      "client": "Holland PLC 10833 Hill Courts Suite 606 Collinsland, CA 60385",
      "iban": "GB82GOCR29918894344551",
      "items": [
        {
          "description": "Marble Beautiful White Coffee Table Top Malachite Inlay Art Home Decor H5372",
          "quantity": "5,00",
          "unit_price": "271,01",
          "total_price": "1355,05",
          "vat": "10%",
          "gross_worth": "1 490,55"
        },
        {
          "description": "15\"x15\" White Decorative Coffee Table Top Lapis Lazuli Marquetery Patio D\u00e9cor",
          "quantity": "4,00",
          "unit_price": "645,77",
          "total_price": "2583,08",
          "vat": "10%",
          "gross_worth": "2 841,39"
        },
        {
          "description": "16 Inches Marble Coffee Table Top Inlay with Multi Stone at Border Game Table",
          "quantity": "1,00",
          "unit_price": "280,50",
          "total_price": "280,50",
          "vat": "10%",
          "gross_worth": "308,55"
        },
        {
          "description": "18\" Black Marble Coffee Table Top Mother of Pearl Inlay Furniture Decors H1883B",
          "quantity": "3,00",
          "unit_price": "377,65",
          "total_price": "1132,95",
          "vat": "10%",
          "gross_worth": "1246,24"
        },
        {
          "description": "7'x4' Pietra Dura Marble Dining Hallway Table Top Inlay Design Patio Decor E977A",
          "quantity": "2,00",
          "unit_price": "19 506,53",
          "total_price": "39 013,06",
          "vat": "10%",
          "gross_worth": "42 914,37"
        }
      ],
      "seller_tax_id": "980-78-9083",
      "client_tax_id": "998-85-0115",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-4dad72/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-4dad72/image"
  },
  {
    "id": "inv-e509b2",
    "filename": "KatanaML_Invoice_007.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #26343874 issued by Smith Ltd 290 Jodi Gardens Charlesview, TN 10958 to Herring-Floyd 8113 Hansen Cliff Apt. 826 Port Alice, ID 99663 for gross total $3490,29 on 07/17/2013.",
    "text_content": "========================================================================\nINVOICE #26343874\nIssuance Date: 07/17/2013\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Smith Ltd 290 Jodi Gardens Charlesview, TN 10958\nTax Identifier: 916-97-6743\nSettlement IBAN: GB78TZMX55978564099007\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Herring-Floyd 8113 Hansen Cliff Apt. 826 Port Alice, ID 99663\nTax Identifier: 913-80-4636\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Microsoft Xbox One X 1TB 4k Ultra HD Console black controller works great 1787\n   Quantity: 5,00 | Unit Price: 249,00 | Net Worth: 1245,00 | VAT: 10% | Gross Total: 1369,50\n2. Cables 500gb,Sony PlayStation 4 PS4 CUH 1215A Jet Black Console w/ Controller\n   Quantity: 5,00 | Unit Price: 100,00 | Net Worth: 500,00 | VAT: 10% | Gross Total: 550,00\n3. PS2 Slim Console System SCPH-77000 PINK Playstation 2 Tested\n   Quantity: 4,00 | Unit Price: 252,00 | Net Worth: 1008,00 | VAT: 10% | Gross Total: 1 108,80\n4. Nintendo Game Boy Micro Console - Black (OXYSFBB)\n   Quantity: 2,00 | Unit Price: 130,00 | Net Worth: 260,00 | VAT: 10% | Gross Total: 286,00\n5. Nintendo GameCube System Console Bundle Mario Sunshine + Genuine controller LOT\n   Quantity: 1,00 | Unit Price: 159,99 | Net Worth: 159,99 | VAT: 10% | Gross Total: 175,99\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $3172,99\nTax / VAT: $ 317,30\nGross Total Due: $3490,29\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #26343874 Document & OCR",
        "text": "========================================================================\nINVOICE #26343874\nIssuance Date: 07/17/2013\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Smith Ltd 290 Jodi Gardens Charlesview, TN 10958\nTax Identifier: 916-97-6743\nSettlement IBAN: GB78TZMX55978564099007\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Herring-Floyd 8113 Hansen Cliff Apt. 826 Port Alice, ID 99663\nTax Identifier: 913-80-4636\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Microsoft Xbox One X 1TB 4k Ultra HD Console black controller works great 1787\n   Quantity: 5,00 | Unit Price: 249,00 | Net Worth: 1245,00 | VAT: 10% | Gross Total: 1369,50\n2. Cables 500gb,Sony PlayStation 4 PS4 CUH 1215A Jet Black Console w/ Controller\n   Quantity: 5,00 | Unit Price: 100,00 | Net Worth: 500,00 | VAT: 10% | Gross Total: 550,00\n3. PS2 Slim Console System SCPH-77000 PINK Playstation 2 Tested\n   Quantity: 4,00 | Unit Price: 252,00 | Net Worth: 1008,00 | VAT: 10% | Gross Total: 1 108,80\n4. Nintendo Game Boy Micro Console - Black (OXYSFBB)\n   Quantity: 2,00 | Unit Price: 130,00 | Net Worth: 260,00 | VAT: 10% | Gross Total: 286,00\n5. Nintendo GameCube System Console Bundle Mario Sunshine + Genuine controller LOT\n   Quantity: 1,00 | Unit Price: 159,99 | Net Worth: 159,99 | VAT: 10% | Gross Total: 175,99\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $3172,99\nTax / VAT: $ 317,30\nGross Total Due: $3490,29\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "26343874",
      "date": "07/17/2013",
      "total_amount": "$3490,29",
      "subtotal": "$3172,99",
      "tax_amount": "$ 317,30",
      "seller": "Smith Ltd 290 Jodi Gardens Charlesview, TN 10958",
      "client": "Herring-Floyd 8113 Hansen Cliff Apt. 826 Port Alice, ID 99663",
      "iban": "GB78TZMX55978564099007",
      "items": [
        {
          "description": "Microsoft Xbox One X 1TB 4k Ultra HD Console black controller works great 1787",
          "quantity": "5,00",
          "unit_price": "249,00",
          "total_price": "1245,00",
          "vat": "10%",
          "gross_worth": "1369,50"
        },
        {
          "description": "Cables 500gb,Sony PlayStation 4 PS4 CUH 1215A Jet Black Console w/ Controller",
          "quantity": "5,00",
          "unit_price": "100,00",
          "total_price": "500,00",
          "vat": "10%",
          "gross_worth": "550,00"
        },
        {
          "description": "PS2 Slim Console System SCPH-77000 PINK Playstation 2 Tested",
          "quantity": "4,00",
          "unit_price": "252,00",
          "total_price": "1008,00",
          "vat": "10%",
          "gross_worth": "1 108,80"
        },
        {
          "description": "Nintendo Game Boy Micro Console - Black (OXYSFBB)",
          "quantity": "2,00",
          "unit_price": "130,00",
          "total_price": "260,00",
          "vat": "10%",
          "gross_worth": "286,00"
        },
        {
          "description": "Nintendo GameCube System Console Bundle Mario Sunshine + Genuine controller LOT",
          "quantity": "1,00",
          "unit_price": "159,99",
          "total_price": "159,99",
          "vat": "10%",
          "gross_worth": "175,99"
        }
      ],
      "seller_tax_id": "916-97-6743",
      "client_tax_id": "913-80-4636",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-e509b2/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-e509b2/image"
  },
  {
    "id": "inv-cd310a",
    "filename": "KatanaML_Invoice_008.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #12222347 issued by Gregory, Patterson and Fischer 439 Hunter Land South Jameschester, MT 09091 to Wilson PLC 667 Wu Ports Marshallmouth, AK 03373 for gross total $ 136,13 on 03/18/2017.",
    "text_content": "========================================================================\nINVOICE #12222347\nIssuance Date: 03/18/2017\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Gregory, Patterson and Fischer 439 Hunter Land South Jameschester, MT 09091\nTax Identifier: 958-94-6606\nSettlement IBAN: GB10YCPS61791791374226282\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Wilson PLC 667 Wu Ports Marshallmouth, AK 03373\nTax Identifier: 928-91-2431\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Zara Yellow Shift Dress XS\n   Quantity: 5,00 | Unit Price: 24,75 | Net Worth: 123,75 | VAT: 10% | Gross Total: 136,13\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 123,75\nTax / VAT: $ 12,38\nGross Total Due: $ 136,13\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #12222347 Document & OCR",
        "text": "========================================================================\nINVOICE #12222347\nIssuance Date: 03/18/2017\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Gregory, Patterson and Fischer 439 Hunter Land South Jameschester, MT 09091\nTax Identifier: 958-94-6606\nSettlement IBAN: GB10YCPS61791791374226282\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Wilson PLC 667 Wu Ports Marshallmouth, AK 03373\nTax Identifier: 928-91-2431\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Zara Yellow Shift Dress XS\n   Quantity: 5,00 | Unit Price: 24,75 | Net Worth: 123,75 | VAT: 10% | Gross Total: 136,13\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 123,75\nTax / VAT: $ 12,38\nGross Total Due: $ 136,13\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "12222347",
      "date": "03/18/2017",
      "total_amount": "$ 136,13",
      "subtotal": "$ 123,75",
      "tax_amount": "$ 12,38",
      "seller": "Gregory, Patterson and Fischer 439 Hunter Land South Jameschester, MT 09091",
      "client": "Wilson PLC 667 Wu Ports Marshallmouth, AK 03373",
      "iban": "GB10YCPS61791791374226282",
      "items": [
        {
          "description": "Zara Yellow Shift Dress XS",
          "quantity": "5,00",
          "unit_price": "24,75",
          "total_price": "123,75",
          "vat": "10%",
          "gross_worth": "136,13"
        }
      ],
      "seller_tax_id": "958-94-6606",
      "client_tax_id": "928-91-2431",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-cd310a/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-cd310a/image"
  },
  {
    "id": "inv-79ebc8",
    "filename": "KatanaML_Invoice_009.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #25698672 issued by Gordon, Alvarado and Jones 943 Sean Park Suite 284 North Derrick, OR 67536 to Manning-Ho 92026 Michael Terrace Apt. 138 West Michael, IL 42693 for gross total $ 127,00 on 08/01/2015.",
    "text_content": "========================================================================\nINVOICE #25698672\nIssuance Date: 08/01/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Gordon, Alvarado and Jones 943 Sean Park Suite 284 North Derrick, OR 67536\nTax Identifier: 936-79-2794\nSettlement IBAN: GB47JKAT88391563723291\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Manning-Ho 92026 Michael Terrace Apt. 138 West Michael, IL 42693\nTax Identifier: 960-85-1578\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. CCNA 200-301 50 GB AUG 2020 Cisco Video/Official Books/Exam Dumps/Licences\n   Quantity: 5,00 | Unit Price: 1,99 | Net Worth: 9,95 | VAT: 10% | Gross Total: 10,94\n2. Tales from the Buffalo Bills\n   Quantity: 5,00 | Unit Price: 5,50 | Net Worth: 27,50 | VAT: 10% | Gross Total: 30,25\n3. A boy who grew up eating nightmare It's Okay to Not Be Okay Picturebook 00000000\n   Quantity: 4,00 | Unit Price: 19,50 | Net Worth: 78,00 | VAT: 10% | Gross Total: 85,80\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 115,45\nTax / VAT: $ 11,55\nGross Total Due: $ 127,00\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #25698672 Document & OCR",
        "text": "========================================================================\nINVOICE #25698672\nIssuance Date: 08/01/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Gordon, Alvarado and Jones 943 Sean Park Suite 284 North Derrick, OR 67536\nTax Identifier: 936-79-2794\nSettlement IBAN: GB47JKAT88391563723291\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Manning-Ho 92026 Michael Terrace Apt. 138 West Michael, IL 42693\nTax Identifier: 960-85-1578\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. CCNA 200-301 50 GB AUG 2020 Cisco Video/Official Books/Exam Dumps/Licences\n   Quantity: 5,00 | Unit Price: 1,99 | Net Worth: 9,95 | VAT: 10% | Gross Total: 10,94\n2. Tales from the Buffalo Bills\n   Quantity: 5,00 | Unit Price: 5,50 | Net Worth: 27,50 | VAT: 10% | Gross Total: 30,25\n3. A boy who grew up eating nightmare It's Okay to Not Be Okay Picturebook 00000000\n   Quantity: 4,00 | Unit Price: 19,50 | Net Worth: 78,00 | VAT: 10% | Gross Total: 85,80\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 115,45\nTax / VAT: $ 11,55\nGross Total Due: $ 127,00\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "25698672",
      "date": "08/01/2015",
      "total_amount": "$ 127,00",
      "subtotal": "$ 115,45",
      "tax_amount": "$ 11,55",
      "seller": "Gordon, Alvarado and Jones 943 Sean Park Suite 284 North Derrick, OR 67536",
      "client": "Manning-Ho 92026 Michael Terrace Apt. 138 West Michael, IL 42693",
      "iban": "GB47JKAT88391563723291",
      "items": [
        {
          "description": "CCNA 200-301 50 GB AUG 2020 Cisco Video/Official Books/Exam Dumps/Licences",
          "quantity": "5,00",
          "unit_price": "1,99",
          "total_price": "9,95",
          "vat": "10%",
          "gross_worth": "10,94"
        },
        {
          "description": "Tales from the Buffalo Bills",
          "quantity": "5,00",
          "unit_price": "5,50",
          "total_price": "27,50",
          "vat": "10%",
          "gross_worth": "30,25"
        },
        {
          "description": "A boy who grew up eating nightmare It's Okay to Not Be Okay Picturebook 00000000",
          "quantity": "4,00",
          "unit_price": "19,50",
          "total_price": "78,00",
          "vat": "10%",
          "gross_worth": "85,80"
        }
      ],
      "seller_tax_id": "936-79-2794",
      "client_tax_id": "960-85-1578",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-79ebc8/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-79ebc8/image"
  },
  {
    "id": "inv-9dfe5a",
    "filename": "KatanaML_Invoice_010.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #24048799 issued by Rodriguez-jackson 4804 Riley Row Suite 059 East Edwardtown, MN 91106 to Williams, Fletcher and Taylor 9371 Harvey Port Suite 901 South Tabitha, ID 50921 for gross total $5,45 on 05/21/2014.",
    "text_content": "========================================================================\nINVOICE #24048799\nIssuance Date: 05/21/2014\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Rodriguez-jackson 4804 Riley Row Suite 059 East Edwardtown, MN 91106\nTax Identifier: 983-85-8151\nSettlement IBAN: GB55GZIH60469560297692\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Williams, Fletcher and Taylor 9371 Harvey Port Suite 901 South Tabitha, ID 50921\nTax Identifier: 932-73-0724\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Large Blue Long Sleeve Fit & Flare Dress Elastic Waist Crochet Detail Bohemian\n   Quantity: 5,00 | Unit Price: 0,99 | Net Worth: 4,95 | VAT: 10% | Gross Total: 5,45\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 4,95\nTax / VAT: $0,50\nGross Total Due: $5,45\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #24048799 Document & OCR",
        "text": "========================================================================\nINVOICE #24048799\nIssuance Date: 05/21/2014\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Rodriguez-jackson 4804 Riley Row Suite 059 East Edwardtown, MN 91106\nTax Identifier: 983-85-8151\nSettlement IBAN: GB55GZIH60469560297692\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Williams, Fletcher and Taylor 9371 Harvey Port Suite 901 South Tabitha, ID 50921\nTax Identifier: 932-73-0724\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Large Blue Long Sleeve Fit & Flare Dress Elastic Waist Crochet Detail Bohemian\n   Quantity: 5,00 | Unit Price: 0,99 | Net Worth: 4,95 | VAT: 10% | Gross Total: 5,45\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 4,95\nTax / VAT: $0,50\nGross Total Due: $5,45\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "24048799",
      "date": "05/21/2014",
      "total_amount": "$5,45",
      "subtotal": "$ 4,95",
      "tax_amount": "$0,50",
      "seller": "Rodriguez-jackson 4804 Riley Row Suite 059 East Edwardtown, MN 91106",
      "client": "Williams, Fletcher and Taylor 9371 Harvey Port Suite 901 South Tabitha, ID 50921",
      "iban": "GB55GZIH60469560297692",
      "items": [
        {
          "description": "Large Blue Long Sleeve Fit & Flare Dress Elastic Waist Crochet Detail Bohemian",
          "quantity": "5,00",
          "unit_price": "0,99",
          "total_price": "4,95",
          "vat": "10%",
          "gross_worth": "5,45"
        }
      ],
      "seller_tax_id": "983-85-8151",
      "client_tax_id": "932-73-0724",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-9dfe5a/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-9dfe5a/image"
  },
  {
    "id": "inv-44deef",
    "filename": "KatanaML_Invoice_011.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #72455228 issued by Potts, Reed and Miller USCGC Weeks FPO AA 06868 to Brady LLC 26039 Anita Stravenue North Peter, WA 22187 for gross total $2155,98 on 05/11/2021.",
    "text_content": "========================================================================\nINVOICE #72455228\nIssuance Date: 05/11/2021\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Potts, Reed and Miller USCGC Weeks FPO AA 06868\nTax Identifier: 913-82-5781\nSettlement IBAN: GB54RDGK95400103726634\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Brady LLC 26039 Anita Stravenue North Peter, WA 22187\nTax Identifier: 953-75-0545\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. PlayStation 5 Console Disc Version PREORDER\"00OO\n   Quantity: 1,00 | Unit Price: 899,99 | Net Worth: 899,99 | VAT: 10% | Gross Total: 989,99\n2. Sony PlayStation 4 Slim 1TB (Upgraded to SSD) Black Game Console\n   Quantity: 2,00 | Unit Price: 150,00 | Net Worth: 300,00 | VAT: 10% | Gross Total: 330,00\n3. Nintendo Gameboy Pocket Console Clear Purple with Box MGB-001 Japan Tested 53\n   Quantity: 1,00 | Unit Price: 85,00 | Net Worth: 85,00 | VAT: 10% | Gross Total: 93,50\n4. NEC PC Engine INTERFACE UNIT IFU-30 CD ROM Console PI-TG001 Tested Japan\n   Quantity: 1,00 | Unit Price: 159,99 | Net Worth: 159,99 | VAT: 10% | Gross Total: 175,99\n5. SONY Playstation2 Slim Console set \" SCPH-90000 / White \"I TESTED Working 11194\n   Quantity: 4,00 | Unit Price: 90,00 | Net Worth: 360,00 | VAT: 10% | Gross Total: 396,00\n6. Magnavox Odyssey 2 Microprocessor Console System w Joy Sticks & 15 Games - 1978\n   Quantity: 1,00 | Unit Price: 155,00 | Net Worth: 155,00 | VAT: 10% | Gross Total: 170,50\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $1959,98\nTax / VAT: $ 196,00\nGross Total Due: $2155,98\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #72455228 Document & OCR",
        "text": "========================================================================\nINVOICE #72455228\nIssuance Date: 05/11/2021\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Potts, Reed and Miller USCGC Weeks FPO AA 06868\nTax Identifier: 913-82-5781\nSettlement IBAN: GB54RDGK95400103726634\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Brady LLC 26039 Anita Stravenue North Peter, WA 22187\nTax Identifier: 953-75-0545\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. PlayStation 5 Console Disc Version PREORDER\"00OO\n   Quantity: 1,00 | Unit Price: 899,99 | Net Worth: 899,99 | VAT: 10% | Gross Total: 989,99\n2. Sony PlayStation 4 Slim 1TB (Upgraded to SSD) Black Game Console\n   Quantity: 2,00 | Unit Price: 150,00 | Net Worth: 300,00 | VAT: 10% | Gross Total: 330,00\n3. Nintendo Gameboy Pocket Console Clear Purple with Box MGB-001 Japan Tested 53\n   Quantity: 1,00 | Unit Price: 85,00 | Net Worth: 85,00 | VAT: 10% | Gross Total: 93,50\n4. NEC PC Engine INTERFACE UNIT IFU-30 CD ROM Console PI-TG001 Tested Japan\n   Quantity: 1,00 | Unit Price: 159,99 | Net Worth: 159,99 | VAT: 10% | Gross Total: 175,99\n5. SONY Playstation2 Slim Console set \" SCPH-90000 / White \"I TESTED Working 11194\n   Quantity: 4,00 | Unit Price: 90,00 | Net Worth: 360,00 | VAT: 10% | Gross Total: 396,00\n6. Magnavox Odyssey 2 Microprocessor Console System w Joy Sticks & 15 Games - 1978\n   Quantity: 1,00 | Unit Price: 155,00 | Net Worth: 155,00 | VAT: 10% | Gross Total: 170,50\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $1959,98\nTax / VAT: $ 196,00\nGross Total Due: $2155,98\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "72455228",
      "date": "05/11/2021",
      "total_amount": "$2155,98",
      "subtotal": "$1959,98",
      "tax_amount": "$ 196,00",
      "seller": "Potts, Reed and Miller USCGC Weeks FPO AA 06868",
      "client": "Brady LLC 26039 Anita Stravenue North Peter, WA 22187",
      "iban": "GB54RDGK95400103726634",
      "items": [
        {
          "description": "PlayStation 5 Console Disc Version PREORDER\"00OO",
          "quantity": "1,00",
          "unit_price": "899,99",
          "total_price": "899,99",
          "vat": "10%",
          "gross_worth": "989,99"
        },
        {
          "description": "Sony PlayStation 4 Slim 1TB (Upgraded to SSD) Black Game Console",
          "quantity": "2,00",
          "unit_price": "150,00",
          "total_price": "300,00",
          "vat": "10%",
          "gross_worth": "330,00"
        },
        {
          "description": "Nintendo Gameboy Pocket Console Clear Purple with Box MGB-001 Japan Tested 53",
          "quantity": "1,00",
          "unit_price": "85,00",
          "total_price": "85,00",
          "vat": "10%",
          "gross_worth": "93,50"
        },
        {
          "description": "NEC PC Engine INTERFACE UNIT IFU-30 CD ROM Console PI-TG001 Tested Japan",
          "quantity": "1,00",
          "unit_price": "159,99",
          "total_price": "159,99",
          "vat": "10%",
          "gross_worth": "175,99"
        },
        {
          "description": "SONY Playstation2 Slim Console set \" SCPH-90000 / White \"I TESTED Working 11194",
          "quantity": "4,00",
          "unit_price": "90,00",
          "total_price": "360,00",
          "vat": "10%",
          "gross_worth": "396,00"
        },
        {
          "description": "Magnavox Odyssey 2 Microprocessor Console System w Joy Sticks & 15 Games - 1978",
          "quantity": "1,00",
          "unit_price": "155,00",
          "total_price": "155,00",
          "vat": "10%",
          "gross_worth": "170,50"
        }
      ],
      "seller_tax_id": "913-82-5781",
      "client_tax_id": "953-75-0545",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-44deef/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-44deef/image"
  },
  {
    "id": "inv-0fe9bc",
    "filename": "KatanaML_Invoice_012.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #58478169 issued by Conley Ltd 262 Jeffrey Underpass Jamesview, WA 14945 to Wells-Avery 7065 Alejandro Forks Lake Jeffrey, ME 59849 for gross total $12 261,98 on 07/04/2016.",
    "text_content": "========================================================================\nINVOICE #58478169\nIssuance Date: 07/04/2016\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Conley Ltd 262 Jeffrey Underpass Jamesview, WA 14945\nTax Identifier: 919-79-8417\nSettlement IBAN: GB23MPY118052629547218\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Wells-Avery 7065 Alejandro Forks Lake Jeffrey, ME 59849\nTax Identifier: 965-90-7208\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 30 Inches Marble Patio Table Top Malachite Stone Inlaid Coffee Table Home Decor\n   Quantity: 3,00 | Unit Price: 1023,75 | Net Worth: 3071,25 | VAT: 10% | Gross Total: 3378,37\n2. 48 Inch Marble Restaurant Table Inlay with Lapis Lazuli Stone Dinning Table Top\n   Quantity: 3,00 | Unit Price: 2692,00 | Net Worth: 8076,00 | VAT: 10% | Gross Total: 8883,60\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $11 147,25\nTax / VAT: $1114,73\nGross Total Due: $12 261,98\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #58478169 Document & OCR",
        "text": "========================================================================\nINVOICE #58478169\nIssuance Date: 07/04/2016\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Conley Ltd 262 Jeffrey Underpass Jamesview, WA 14945\nTax Identifier: 919-79-8417\nSettlement IBAN: GB23MPY118052629547218\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Wells-Avery 7065 Alejandro Forks Lake Jeffrey, ME 59849\nTax Identifier: 965-90-7208\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 30 Inches Marble Patio Table Top Malachite Stone Inlaid Coffee Table Home Decor\n   Quantity: 3,00 | Unit Price: 1023,75 | Net Worth: 3071,25 | VAT: 10% | Gross Total: 3378,37\n2. 48 Inch Marble Restaurant Table Inlay with Lapis Lazuli Stone Dinning Table Top\n   Quantity: 3,00 | Unit Price: 2692,00 | Net Worth: 8076,00 | VAT: 10% | Gross Total: 8883,60\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $11 147,25\nTax / VAT: $1114,73\nGross Total Due: $12 261,98\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "58478169",
      "date": "07/04/2016",
      "total_amount": "$12 261,98",
      "subtotal": "$11 147,25",
      "tax_amount": "$1114,73",
      "seller": "Conley Ltd 262 Jeffrey Underpass Jamesview, WA 14945",
      "client": "Wells-Avery 7065 Alejandro Forks Lake Jeffrey, ME 59849",
      "iban": "GB23MPY118052629547218",
      "items": [
        {
          "description": "30 Inches Marble Patio Table Top Malachite Stone Inlaid Coffee Table Home Decor",
          "quantity": "3,00",
          "unit_price": "1023,75",
          "total_price": "3071,25",
          "vat": "10%",
          "gross_worth": "3378,37"
        },
        {
          "description": "48 Inch Marble Restaurant Table Inlay with Lapis Lazuli Stone Dinning Table Top",
          "quantity": "3,00",
          "unit_price": "2692,00",
          "total_price": "8076,00",
          "vat": "10%",
          "gross_worth": "8883,60"
        }
      ],
      "seller_tax_id": "919-79-8417",
      "client_tax_id": "965-90-7208",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-0fe9bc/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-0fe9bc/image"
  },
  {
    "id": "inv-0d91cc",
    "filename": "KatanaML_Invoice_013.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #90508672 issued by Stone-Waller 53428 Peter Dale Apt. 293 Amberchester, IA 57427 to Shaw Group 58420 John Turnpike Suite 767 North Ricardo, NV 32611 for gross total $7052,49 on 04/16/2020.",
    "text_content": "========================================================================\nINVOICE #90508672\nIssuance Date: 04/16/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Stone-Waller 53428 Peter Dale Apt. 293 Amberchester, IA 57427\nTax Identifier: 994-99-6683\nSettlement IBAN: GB61GZVZ46496690777484\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Shaw Group 58420 John Turnpike Suite 767 North Ricardo, NV 32611\nTax Identifier: 914-79-8228\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. SOFA SET\n   Quantity: 2,00 | Unit Price: 250,00 | Net Worth: 500,00 | VAT: 10% | Gross Total: 550,00\n2. Real Madrid Inflatable Chair (SG16136)\n   Quantity: 3,00 | Unit Price: 43,95 | Net Worth: 131,85 | VAT: 10% | Gross Total: 145,04\n3. 13 Inch Marble Coffee Table Stone Game Table Mother of Pearl with Check Pattern\n   Quantity: 4,00 | Unit Price: 301,75 | Net Worth: 1207,00 | VAT: 10% | Gross Total: 1327,70\n4. Carnelian Stone Floral Pattern Dinette Table Top Marble Coffee Table 30 Inches\n   Quantity: 2,00 | Unit Price: 993,75 | Net Worth: 1987,50 | VAT: 10% | Gross Total: 2 186,25\n5. 3'x2' Black Marvels Top Dining Table Italian Handmade Floral Art Christmas Gift\n   Quantity: 1,00 | Unit Price: 2585,00 | Net Worth: 2585,00 | VAT: 10% | Gross Total: 2843,50\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $6411,35\nTax / VAT: $ 641,14\nGross Total Due: $7052,49\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #90508672 Document & OCR",
        "text": "========================================================================\nINVOICE #90508672\nIssuance Date: 04/16/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Stone-Waller 53428 Peter Dale Apt. 293 Amberchester, IA 57427\nTax Identifier: 994-99-6683\nSettlement IBAN: GB61GZVZ46496690777484\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Shaw Group 58420 John Turnpike Suite 767 North Ricardo, NV 32611\nTax Identifier: 914-79-8228\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. SOFA SET\n   Quantity: 2,00 | Unit Price: 250,00 | Net Worth: 500,00 | VAT: 10% | Gross Total: 550,00\n2. Real Madrid Inflatable Chair (SG16136)\n   Quantity: 3,00 | Unit Price: 43,95 | Net Worth: 131,85 | VAT: 10% | Gross Total: 145,04\n3. 13 Inch Marble Coffee Table Stone Game Table Mother of Pearl with Check Pattern\n   Quantity: 4,00 | Unit Price: 301,75 | Net Worth: 1207,00 | VAT: 10% | Gross Total: 1327,70\n4. Carnelian Stone Floral Pattern Dinette Table Top Marble Coffee Table 30 Inches\n   Quantity: 2,00 | Unit Price: 993,75 | Net Worth: 1987,50 | VAT: 10% | Gross Total: 2 186,25\n5. 3'x2' Black Marvels Top Dining Table Italian Handmade Floral Art Christmas Gift\n   Quantity: 1,00 | Unit Price: 2585,00 | Net Worth: 2585,00 | VAT: 10% | Gross Total: 2843,50\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $6411,35\nTax / VAT: $ 641,14\nGross Total Due: $7052,49\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "90508672",
      "date": "04/16/2020",
      "total_amount": "$7052,49",
      "subtotal": "$6411,35",
      "tax_amount": "$ 641,14",
      "seller": "Stone-Waller 53428 Peter Dale Apt. 293 Amberchester, IA 57427",
      "client": "Shaw Group 58420 John Turnpike Suite 767 North Ricardo, NV 32611",
      "iban": "GB61GZVZ46496690777484",
      "items": [
        {
          "description": "SOFA SET",
          "quantity": "2,00",
          "unit_price": "250,00",
          "total_price": "500,00",
          "vat": "10%",
          "gross_worth": "550,00"
        },
        {
          "description": "Real Madrid Inflatable Chair (SG16136)",
          "quantity": "3,00",
          "unit_price": "43,95",
          "total_price": "131,85",
          "vat": "10%",
          "gross_worth": "145,04"
        },
        {
          "description": "13 Inch Marble Coffee Table Stone Game Table Mother of Pearl with Check Pattern",
          "quantity": "4,00",
          "unit_price": "301,75",
          "total_price": "1207,00",
          "vat": "10%",
          "gross_worth": "1327,70"
        },
        {
          "description": "Carnelian Stone Floral Pattern Dinette Table Top Marble Coffee Table 30 Inches",
          "quantity": "2,00",
          "unit_price": "993,75",
          "total_price": "1987,50",
          "vat": "10%",
          "gross_worth": "2 186,25"
        },
        {
          "description": "3'x2' Black Marvels Top Dining Table Italian Handmade Floral Art Christmas Gift",
          "quantity": "1,00",
          "unit_price": "2585,00",
          "total_price": "2585,00",
          "vat": "10%",
          "gross_worth": "2843,50"
        }
      ],
      "seller_tax_id": "994-99-6683",
      "client_tax_id": "914-79-8228",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-0d91cc/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-0d91cc/image"
  },
  {
    "id": "inv-a0b568",
    "filename": "KatanaML_Invoice_014.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #96051364 issued by Jackson Ltd 134 Catherine Valley Apt. 756 Lake Jennifer, NE 09531 to Williams, Fowler and Phillips 115 Mccormick Knolls North Kevin, TN 27580 for gross total $ 1579 929,37 on 04/28/2020.",
    "text_content": "========================================================================\nINVOICE #96051364\nIssuance Date: 04/28/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Jackson Ltd 134 Catherine Valley Apt. 756 Lake Jennifer, NE 09531\nTax Identifier: 914-85-0938\nSettlement IBAN: GB61XXNT90578783067262\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Williams, Fowler and Phillips 115 Mccormick Knolls North Kevin, TN 27580\nTax Identifier: 963-87-9620\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 49\"x22\" Marble Top Center Table Carnelian Mosaic Italian Art Christmas Gift Arts\n   Quantity: 4,00 | Unit Price: 2400,00 | Net Worth: 9600,00 | VAT: 10% | Gross Total: 10 560,00\n2. 6'x3' Marble Dining Center Table With Black Top Floral Collectible Inlaid E963\n   Quantity: 3,00 | Unit Price: 6040,40 | Net Worth: 18 121,20 | VAT: 10% | Gross Total: 19 933,32\n3. 7'x4' Blue Random Marble Dining Hallway Table Top Lapis Lazuli Inlay Decor E947A\n   Quantity: 5,00 | Unit Price: 8194,09 | Net Worth: 40970,45 | VAT: 10% | Gross Total: 45 067,50\n4. 36\" Marble White Top Counter Table Lapis Inlaid Pietradura Art Christmas Gifts\n   Quantity: 3,00 | Unit Price: 3 200,00 | Net Worth: 9 600,00 | VAT: 10% | Gross Total: 10 560,00\n5. 6'x3' White Marble Dining Table Top Multi Inlay Floral Elephant Art Decor H4952\n   Quantity: 5,00 | Unit Price: 6408,49 | Net Worth: 32042,45 | VAT: 10% | Gross Total: 35 246,69\n6. 6'x3' Marble Dining Center Table Marquetry Inlay Italian Mosaic Patio Arts H3112\n   Quantity: 5,00 | Unit Price: 6647,61 | Net Worth: N/A | VAT: 10% | Gross Total: 36 561,85\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $143572,15\nTax / VAT: $ 14357,22\nGross Total Due: $ 1579 929,37\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #96051364 Document & OCR",
        "text": "========================================================================\nINVOICE #96051364\nIssuance Date: 04/28/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Jackson Ltd 134 Catherine Valley Apt. 756 Lake Jennifer, NE 09531\nTax Identifier: 914-85-0938\nSettlement IBAN: GB61XXNT90578783067262\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Williams, Fowler and Phillips 115 Mccormick Knolls North Kevin, TN 27580\nTax Identifier: 963-87-9620\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 49\"x22\" Marble Top Center Table Carnelian Mosaic Italian Art Christmas Gift Arts\n   Quantity: 4,00 | Unit Price: 2400,00 | Net Worth: 9600,00 | VAT: 10% | Gross Total: 10 560,00\n2. 6'x3' Marble Dining Center Table With Black Top Floral Collectible Inlaid E963\n   Quantity: 3,00 | Unit Price: 6040,40 | Net Worth: 18 121,20 | VAT: 10% | Gross Total: 19 933,32\n3. 7'x4' Blue Random Marble Dining Hallway Table Top Lapis Lazuli Inlay Decor E947A\n   Quantity: 5,00 | Unit Price: 8194,09 | Net Worth: 40970,45 | VAT: 10% | Gross Total: 45 067,50\n4. 36\" Marble White Top Counter Table Lapis Inlaid Pietradura Art Christmas Gifts\n   Quantity: 3,00 | Unit Price: 3 200,00 | Net Worth: 9 600,00 | VAT: 10% | Gross Total: 10 560,00\n5. 6'x3' White Marble Dining Table Top Multi Inlay Floral Elephant Art Decor H4952\n   Quantity: 5,00 | Unit Price: 6408,49 | Net Worth: 32042,45 | VAT: 10% | Gross Total: 35 246,69\n6. 6'x3' Marble Dining Center Table Marquetry Inlay Italian Mosaic Patio Arts H3112\n   Quantity: 5,00 | Unit Price: 6647,61 | Net Worth: N/A | VAT: 10% | Gross Total: 36 561,85\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $143572,15\nTax / VAT: $ 14357,22\nGross Total Due: $ 1579 929,37\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "96051364",
      "date": "04/28/2020",
      "total_amount": "$ 1579 929,37",
      "subtotal": "$143572,15",
      "tax_amount": "$ 14357,22",
      "seller": "Jackson Ltd 134 Catherine Valley Apt. 756 Lake Jennifer, NE 09531",
      "client": "Williams, Fowler and Phillips 115 Mccormick Knolls North Kevin, TN 27580",
      "iban": "GB61XXNT90578783067262",
      "items": [
        {
          "description": "49\"x22\" Marble Top Center Table Carnelian Mosaic Italian Art Christmas Gift Arts",
          "quantity": "4,00",
          "unit_price": "2400,00",
          "total_price": "9600,00",
          "vat": "10%",
          "gross_worth": "10 560,00"
        },
        {
          "description": "6'x3' Marble Dining Center Table With Black Top Floral Collectible Inlaid E963",
          "quantity": "3,00",
          "unit_price": "6040,40",
          "total_price": "18 121,20",
          "vat": "10%",
          "gross_worth": "19 933,32"
        },
        {
          "description": "7'x4' Blue Random Marble Dining Hallway Table Top Lapis Lazuli Inlay Decor E947A",
          "quantity": "5,00",
          "unit_price": "8194,09",
          "total_price": "40970,45",
          "vat": "10%",
          "gross_worth": "45 067,50"
        },
        {
          "description": "36\" Marble White Top Counter Table Lapis Inlaid Pietradura Art Christmas Gifts",
          "quantity": "3,00",
          "unit_price": "3 200,00",
          "total_price": "9 600,00",
          "vat": "10%",
          "gross_worth": "10 560,00"
        },
        {
          "description": "6'x3' White Marble Dining Table Top Multi Inlay Floral Elephant Art Decor H4952",
          "quantity": "5,00",
          "unit_price": "6408,49",
          "total_price": "32042,45",
          "vat": "10%",
          "gross_worth": "35 246,69"
        },
        {
          "description": "6'x3' Marble Dining Center Table Marquetry Inlay Italian Mosaic Patio Arts H3112",
          "quantity": "5,00",
          "unit_price": "6647,61",
          "total_price": "N/A",
          "vat": "10%",
          "gross_worth": "36 561,85"
        }
      ],
      "seller_tax_id": "914-85-0938",
      "client_tax_id": "963-87-9620",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-a0b568/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-a0b568/image"
  },
  {
    "id": "inv-01ba2b",
    "filename": "KatanaML_Invoice_015.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #67856369 issued by Pierce PLC 3454 Mcbride Ramp Apt. 312 New Judy, WI 36022 to Cochran-Alvarez 488 Kenneth Mission Port Caroltown, NY 43776 for gross total $4952,82 on 05/27/2020.",
    "text_content": "========================================================================\nINVOICE #67856369\nIssuance Date: 05/27/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Pierce PLC 3454 Mcbride Ramp Apt. 312 New Judy, WI 36022\nTax Identifier: 959-99-4796\nSettlement IBAN: GB68KEDC47196257123820\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Cochran-Alvarez 488 Kenneth Mission Port Caroltown, NY 43776\nTax Identifier: 961-72-7276\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 24 Inches Round Marble Coffee Table Top Inlay Sofa Table with Geometrical Design\n   Quantity: 4,00 | Unit Price: 446,25 | Net Worth: 1785,00 | VAT: 10% | Gross Total: 1963,50\n2. 30\"x30\" Marble Black Top Table Semi Precious Bird Art Black Friday Gift D\u00e9cor\n   Quantity: 1,00 | Unit Price: 2399,00 | Net Worth: 2399,00 | VAT: 10% | Gross Total: 2 638,90\n3. 2 Industrial Live edge Legs 16\" Tall Cast Aluminum Cast Iron Coffee Table Bench\n   Quantity: 2,00 | Unit Price: 159,28 | Net Worth: 318,56 | VAT: 10% | Gross Total: 350,42\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $4 502,56\nTax / VAT: $ 450,26\nGross Total Due: $4952,82\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #67856369 Document & OCR",
        "text": "========================================================================\nINVOICE #67856369\nIssuance Date: 05/27/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Pierce PLC 3454 Mcbride Ramp Apt. 312 New Judy, WI 36022\nTax Identifier: 959-99-4796\nSettlement IBAN: GB68KEDC47196257123820\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Cochran-Alvarez 488 Kenneth Mission Port Caroltown, NY 43776\nTax Identifier: 961-72-7276\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 24 Inches Round Marble Coffee Table Top Inlay Sofa Table with Geometrical Design\n   Quantity: 4,00 | Unit Price: 446,25 | Net Worth: 1785,00 | VAT: 10% | Gross Total: 1963,50\n2. 30\"x30\" Marble Black Top Table Semi Precious Bird Art Black Friday Gift D\u00e9cor\n   Quantity: 1,00 | Unit Price: 2399,00 | Net Worth: 2399,00 | VAT: 10% | Gross Total: 2 638,90\n3. 2 Industrial Live edge Legs 16\" Tall Cast Aluminum Cast Iron Coffee Table Bench\n   Quantity: 2,00 | Unit Price: 159,28 | Net Worth: 318,56 | VAT: 10% | Gross Total: 350,42\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $4 502,56\nTax / VAT: $ 450,26\nGross Total Due: $4952,82\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "67856369",
      "date": "05/27/2020",
      "total_amount": "$4952,82",
      "subtotal": "$4 502,56",
      "tax_amount": "$ 450,26",
      "seller": "Pierce PLC 3454 Mcbride Ramp Apt. 312 New Judy, WI 36022",
      "client": "Cochran-Alvarez 488 Kenneth Mission Port Caroltown, NY 43776",
      "iban": "GB68KEDC47196257123820",
      "items": [
        {
          "description": "24 Inches Round Marble Coffee Table Top Inlay Sofa Table with Geometrical Design",
          "quantity": "4,00",
          "unit_price": "446,25",
          "total_price": "1785,00",
          "vat": "10%",
          "gross_worth": "1963,50"
        },
        {
          "description": "30\"x30\" Marble Black Top Table Semi Precious Bird Art Black Friday Gift D\u00e9cor",
          "quantity": "1,00",
          "unit_price": "2399,00",
          "total_price": "2399,00",
          "vat": "10%",
          "gross_worth": "2 638,90"
        },
        {
          "description": "2 Industrial Live edge Legs 16\" Tall Cast Aluminum Cast Iron Coffee Table Bench",
          "quantity": "2,00",
          "unit_price": "159,28",
          "total_price": "318,56",
          "vat": "10%",
          "gross_worth": "350,42"
        }
      ],
      "seller_tax_id": "959-99-4796",
      "client_tax_id": "961-72-7276",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-01ba2b/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-01ba2b/image"
  },
  {
    "id": "inv-4ce5ae",
    "filename": "KatanaML_Invoice_0001.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 4,
    "relationships_count": 3,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #97159829 issued by Bradley-Andrade 9879 Elizabeth Common Lake Jonathan, RI 12335 to Castro PLC Unit 9678 Box 9664 DPO AP 69387 for gross total $ 978,12 on 09/18/2015.",
    "text_content": "========================================================================\nINVOICE #97159829\nIssuance Date: 09/18/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Bradley-Andrade 9879 Elizabeth Common Lake Jonathan, RI 12335\nTax Identifier: 985-73-8194\nSettlement IBAN: GB81LZWO32519172531418\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Castro PLC Unit 9678 Box 9664 DPO AP 69387\nTax Identifier: 994-72-1270\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 12\" Marble Lapis Inlay Chess Table Top With 2\" Pieces & 15\" Wooden Stand W537\n   Quantity: 2,00 | Unit Price: 444,60 | Net Worth: 889,20 | VAT: 10% | Gross Total: 978,12\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 889,20\nTax / VAT: $ 88,92\nGross Total Due: $ 978,12\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #97159829 Document & OCR",
        "text": "========================================================================\nINVOICE #97159829\nIssuance Date: 09/18/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Bradley-Andrade 9879 Elizabeth Common Lake Jonathan, RI 12335\nTax Identifier: 985-73-8194\nSettlement IBAN: GB81LZWO32519172531418\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Castro PLC Unit 9678 Box 9664 DPO AP 69387\nTax Identifier: 994-72-1270\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 12\" Marble Lapis Inlay Chess Table Top With 2\" Pieces & 15\" Wooden Stand W537\n   Quantity: 2,00 | Unit Price: 444,60 | Net Worth: 889,20 | VAT: 10% | Gross Total: 978,12\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 889,20\nTax / VAT: $ 88,92\nGross Total Due: $ 978,12\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "97159829",
      "date": "09/18/2015",
      "total_amount": "$ 978,12",
      "subtotal": "$ 889,20",
      "tax_amount": "$ 88,92",
      "seller": "Bradley-Andrade 9879 Elizabeth Common Lake Jonathan, RI 12335",
      "client": "Castro PLC Unit 9678 Box 9664 DPO AP 69387",
      "iban": "GB81LZWO32519172531418",
      "items": [
        {
          "description": "12\" Marble Lapis Inlay Chess Table Top With 2\" Pieces & 15\" Wooden Stand W537",
          "quantity": "2,00",
          "unit_price": "444,60",
          "total_price": "889,20",
          "vat": "10%",
          "gross_worth": "978,12"
        }
      ],
      "seller_tax_id": "985-73-8194",
      "client_tax_id": "994-72-1270",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-4ce5ae/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-4ce5ae/image"
  },
  {
    "id": "inv-71287d",
    "filename": "KatanaML_Invoice_0002.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 9,
    "relationships_count": 8,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #13194726 issued by Hopkins and Sons 62283 Flores Tunnel North Luis, IA 69983 to Sims PLC USS Kramer FPO AA 81651 for gross total $ 640,12 on 05/29/2021.",
    "text_content": "========================================================================\nINVOICE #13194726\nIssuance Date: 05/29/2021\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Hopkins and Sons 62283 Flores Tunnel North Luis, IA 69983\nTax Identifier: 952-73-7223\nSettlement IBAN: GB31LZX520242755934691\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Sims PLC USS Kramer FPO AA 81651\nTax Identifier: 995-88-9495\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Beach Lunch Lounge Striped Shirt Dress Large Navy Blue White Long Sleeve Causal\n   Quantity: 1,00 | Unit Price: 16,99 | Net Worth: 16,99 | VAT: 10% | Gross Total: 18,69\n2. Jams World Hawaiian 0 Dress Rayon SZ.L\n   Quantity: 5,00 | Unit Price: 65,00 | Net Worth: 325,00 | VAT: 10% | Gross Total: 357,50\n3. LuLaRoe Nicole Dress Size Large 26\n   Quantity: 2,00 | Unit Price: 1,99 | Net Worth: 3,98 | VAT: 10% | Gross Total: 4,38\n4. Johnny Was Medium Linen Wrap Dress Dessert Rose Embroiderd Bohemian\n   Quantity: 2,00 | Unit Price: 89,99 | Net Worth: 179,98 | VAT: 10% | Gross Total: 197,98\n5. Eileen Fisher Women's Long Sleeve Fleece Lined Front Pockets Dress XS Gray\n   Quantity: 2,00 | Unit Price: 15,99 | Net Worth: 31,98 | VAT: 10% | Gross Total: 35,18\n6. Hanna Anderson Women's L Large Coral Short Sleeve Casual Fall Tee Shirt Dress\n   Quantity: 1,00 | Unit Price: 24,00 | Net Worth: 24,00 | VAT: 10% | Gross Total: 26,40\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $581,93\nTax / VAT: $58,19\nGross Total Due: $ 640,12\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #13194726 Document & OCR",
        "text": "========================================================================\nINVOICE #13194726\nIssuance Date: 05/29/2021\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Hopkins and Sons 62283 Flores Tunnel North Luis, IA 69983\nTax Identifier: 952-73-7223\nSettlement IBAN: GB31LZX520242755934691\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Sims PLC USS Kramer FPO AA 81651\nTax Identifier: 995-88-9495\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Beach Lunch Lounge Striped Shirt Dress Large Navy Blue White Long Sleeve Causal\n   Quantity: 1,00 | Unit Price: 16,99 | Net Worth: 16,99 | VAT: 10% | Gross Total: 18,69\n2. Jams World Hawaiian 0 Dress Rayon SZ.L\n   Quantity: 5,00 | Unit Price: 65,00 | Net Worth: 325,00 | VAT: 10% | Gross Total: 357,50\n3. LuLaRoe Nicole Dress Size Large 26\n   Quantity: 2,00 | Unit Price: 1,99 | Net Worth: 3,98 | VAT: 10% | Gross Total: 4,38\n4. Johnny Was Medium Linen Wrap Dress Dessert Rose Embroiderd Bohemian\n   Quantity: 2,00 | Unit Price: 89,99 | Net Worth: 179,98 | VAT: 10% | Gross Total: 197,98\n5. Eileen Fisher Women's Long Sleeve Fleece Lined Front Pockets Dress XS Gray\n   Quantity: 2,00 | Unit Price: 15,99 | Net Worth: 31,98 | VAT: 10% | Gross Total: 35,18\n6. Hanna Anderson Women's L Large Coral Short Sleeve Casual Fall Tee Shirt Dress\n   Quantity: 1,00 | Unit Price: 24,00 | Net Worth: 24,00 | VAT: 10% | Gross Total: 26,40\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $581,93\nTax / VAT: $58,19\nGross Total Due: $ 640,12\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "13194726",
      "date": "05/29/2021",
      "total_amount": "$ 640,12",
      "subtotal": "$581,93",
      "tax_amount": "$58,19",
      "seller": "Hopkins and Sons 62283 Flores Tunnel North Luis, IA 69983",
      "client": "Sims PLC USS Kramer FPO AA 81651",
      "iban": "GB31LZX520242755934691",
      "items": [
        {
          "description": "Beach Lunch Lounge Striped Shirt Dress Large Navy Blue White Long Sleeve Causal",
          "quantity": "1,00",
          "unit_price": "16,99",
          "total_price": "16,99",
          "vat": "10%",
          "gross_worth": "18,69"
        },
        {
          "description": "Jams World Hawaiian 0 Dress Rayon SZ.L",
          "quantity": "5,00",
          "unit_price": "65,00",
          "total_price": "325,00",
          "vat": "10%",
          "gross_worth": "357,50"
        },
        {
          "description": "LuLaRoe Nicole Dress Size Large 26",
          "quantity": "2,00",
          "unit_price": "1,99",
          "total_price": "3,98",
          "vat": "10%",
          "gross_worth": "4,38"
        },
        {
          "description": "Johnny Was Medium Linen Wrap Dress Dessert Rose Embroiderd Bohemian",
          "quantity": "2,00",
          "unit_price": "89,99",
          "total_price": "179,98",
          "vat": "10%",
          "gross_worth": "197,98"
        },
        {
          "description": "Eileen Fisher Women's Long Sleeve Fleece Lined Front Pockets Dress XS Gray",
          "quantity": "2,00",
          "unit_price": "15,99",
          "total_price": "31,98",
          "vat": "10%",
          "gross_worth": "35,18"
        },
        {
          "description": "Hanna Anderson Women's L Large Coral Short Sleeve Casual Fall Tee Shirt Dress",
          "quantity": "1,00",
          "unit_price": "24,00",
          "total_price": "24,00",
          "vat": "10%",
          "gross_worth": "26,40"
        }
      ],
      "seller_tax_id": "952-73-7223",
      "client_tax_id": "995-88-9495",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-71287d/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-71287d/image"
  },
  {
    "id": "inv-7a51be",
    "filename": "KatanaML_Invoice_0003.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 4,
    "relationships_count": 3,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #62517865 issued by Trujillo-Hunt 430 Mark Ferry Suite 495 Maxside, DC 65686 to Lee and Sons 8552 Karen Islands East Roger, ID 40416 for gross total $9,35 on 06/02/2015.",
    "text_content": "========================================================================\nINVOICE #62517865\nIssuance Date: 06/02/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Trujillo-Hunt 430 Mark Ferry Suite 495 Maxside, DC 65686\nTax Identifier: 992-71-8540\nSettlement IBAN: GB73HCPH34959888432899\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Lee and Sons 8552 Karen Islands East Roger, ID 40416\nTax Identifier: 929-86-0601\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Care & Repair of Furniture\n   Quantity: 2,00 | Unit Price: 4,25 | Net Worth: 8,50 | VAT: 10% | Gross Total: 9,35\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 8,50\nTax / VAT: $0,85\nGross Total Due: $9,35\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #62517865 Document & OCR",
        "text": "========================================================================\nINVOICE #62517865\nIssuance Date: 06/02/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Trujillo-Hunt 430 Mark Ferry Suite 495 Maxside, DC 65686\nTax Identifier: 992-71-8540\nSettlement IBAN: GB73HCPH34959888432899\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Lee and Sons 8552 Karen Islands East Roger, ID 40416\nTax Identifier: 929-86-0601\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Care & Repair of Furniture\n   Quantity: 2,00 | Unit Price: 4,25 | Net Worth: 8,50 | VAT: 10% | Gross Total: 9,35\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 8,50\nTax / VAT: $0,85\nGross Total Due: $9,35\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "62517865",
      "date": "06/02/2015",
      "total_amount": "$9,35",
      "subtotal": "$ 8,50",
      "tax_amount": "$0,85",
      "seller": "Trujillo-Hunt 430 Mark Ferry Suite 495 Maxside, DC 65686",
      "client": "Lee and Sons 8552 Karen Islands East Roger, ID 40416",
      "iban": "GB73HCPH34959888432899",
      "items": [
        {
          "description": "Care & Repair of Furniture",
          "quantity": "2,00",
          "unit_price": "4,25",
          "total_price": "8,50",
          "vat": "10%",
          "gross_worth": "9,35"
        }
      ],
      "seller_tax_id": "992-71-8540",
      "client_tax_id": "929-86-0601",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-7a51be/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-7a51be/image"
  },
  {
    "id": "inv-2cdf87",
    "filename": "KatanaML_Invoice_0004.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 5,
    "relationships_count": 4,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #56014042 issued by Nichols-Barajas 3882 Stacy Ville Apt. 488 Lake Kristinatown, ND 48049 to Mckay PLC 5542 Danielle Drive Suite 381 West Mason, ME 76671 for gross total $65,45 on 10/01/2014.",
    "text_content": "========================================================================\nINVOICE #56014042\nIssuance Date: 10/01/2014\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Nichols-Barajas 3882 Stacy Ville Apt. 488 Lake Kristinatown, ND 48049\nTax Identifier: 953-87-6813\nSettlement IBAN: GB08KXQT197119711661357354\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Mckay PLC 5542 Danielle Drive Suite 381 West Mason, ME 76671\nTax Identifier: 965-90-8517\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Jordan Hydro 2 (TD)-Child Size\n   Quantity: 2,00 | Unit Price: 5,75 | Net Worth: 11,50 | VAT: 10% | Gross Total: 12,65\n2. Sketchers Energy Lights Boys Black Canvas Size 4 With Charging Cable\n   Quantity: 4,00 | Unit Price: 12,00 | Net Worth: 48,00 | VAT: 10% | Gross Total: 52,80\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $59,50\nTax / VAT: $5,95\nGross Total Due: $65,45\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #56014042 Document & OCR",
        "text": "========================================================================\nINVOICE #56014042\nIssuance Date: 10/01/2014\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Nichols-Barajas 3882 Stacy Ville Apt. 488 Lake Kristinatown, ND 48049\nTax Identifier: 953-87-6813\nSettlement IBAN: GB08KXQT197119711661357354\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Mckay PLC 5542 Danielle Drive Suite 381 West Mason, ME 76671\nTax Identifier: 965-90-8517\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Jordan Hydro 2 (TD)-Child Size\n   Quantity: 2,00 | Unit Price: 5,75 | Net Worth: 11,50 | VAT: 10% | Gross Total: 12,65\n2. Sketchers Energy Lights Boys Black Canvas Size 4 With Charging Cable\n   Quantity: 4,00 | Unit Price: 12,00 | Net Worth: 48,00 | VAT: 10% | Gross Total: 52,80\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $59,50\nTax / VAT: $5,95\nGross Total Due: $65,45\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "56014042",
      "date": "10/01/2014",
      "total_amount": "$65,45",
      "subtotal": "$59,50",
      "tax_amount": "$5,95",
      "seller": "Nichols-Barajas 3882 Stacy Ville Apt. 488 Lake Kristinatown, ND 48049",
      "client": "Mckay PLC 5542 Danielle Drive Suite 381 West Mason, ME 76671",
      "iban": "GB08KXQT197119711661357354",
      "items": [
        {
          "description": "Jordan Hydro 2 (TD)-Child Size",
          "quantity": "2,00",
          "unit_price": "5,75",
          "total_price": "11,50",
          "vat": "10%",
          "gross_worth": "12,65"
        },
        {
          "description": "Sketchers Energy Lights Boys Black Canvas Size 4 With Charging Cable",
          "quantity": "4,00",
          "unit_price": "12,00",
          "total_price": "48,00",
          "vat": "10%",
          "gross_worth": "52,80"
        }
      ],
      "seller_tax_id": "953-87-6813",
      "client_tax_id": "965-90-8517",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-2cdf87/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-2cdf87/image"
  },
  {
    "id": "inv-370e7d",
    "filename": "KatanaML_Invoice_0005.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 10,
    "relationships_count": 9,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #16662010 issued by Smith-Cook 174 Justin Causeway West Michaelmouth, ME 69894 to Snyder-Johnson 05173 Heather Mill Jenniferfort, WV79662 for gross total $2259,10 on 08/28/2016.",
    "text_content": "========================================================================\nINVOICE #16662010\nIssuance Date: 08/28/2016\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Smith-Cook 174 Justin Causeway West Michaelmouth, ME 69894\nTax Identifier: 959-84-2124\nSettlement IBAN: GB20BAKH22085364527355\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Snyder-Johnson 05173 Heather Mill Jenniferfort, WV79662\nTax Identifier: 938-85-4960\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working 59\n   Quantity: 1,00 | Unit Price: 65,00 | Net Worth: 65,00 | VAT: 10% | Gross Total: 71,50\n2. New Sony Playstation 4 Slim 1TB 3 Game Bundle Console. Sealed!!!\n   Quantity: 3,00 | Unit Price: 399,99 | Net Worth: 1199,97 | VAT: 10% | Gross Total: 1319,97\n3. Atari Flashback 4 Classic Game Console 75 built in games Space Invaders Asteroid\n   Quantity: 4,00 | Unit Price: 8,50 | Net Worth: 34,00 | VAT: 10% | Gross Total: 37,40\n4. Sony PlayStation 1 PS1 Console model scph-7501\n   Quantity: 4,00 | Unit Price: 14,99 | Net Worth: 59,96 | VAT: 10% | Gross Total: 65,96\n5. Nintendo Wii Console 2 Remotes w/ Covers, Nunchucks, Sensor Sega Game Bundle\n   Quantity: 1,00 | Unit Price: 85,00 | Net Worth: 85,00 | VAT: 10% | Gross Total: 93,50\n6. Sony PlayStation 3 PS3 Super Slim Black Console 20GB *Tested* Console & Cables\n   Quantity: 4,00 | Unit Price: 99,95 | Net Worth: 399,80 | VAT: 10% | Gross Total: 439,78\n7. Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working\n   Quantity: 3,00 | Unit Price: 70,00 | Net Worth: 210,00 | VAT: 10% | Gross Total: 231,00\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $2053,73\nTax / VAT: $205,37\nGross Total Due: $2259,10\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #16662010 Document & OCR",
        "text": "========================================================================\nINVOICE #16662010\nIssuance Date: 08/28/2016\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Smith-Cook 174 Justin Causeway West Michaelmouth, ME 69894\nTax Identifier: 959-84-2124\nSettlement IBAN: GB20BAKH22085364527355\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Snyder-Johnson 05173 Heather Mill Jenniferfort, WV79662\nTax Identifier: 938-85-4960\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working 59\n   Quantity: 1,00 | Unit Price: 65,00 | Net Worth: 65,00 | VAT: 10% | Gross Total: 71,50\n2. New Sony Playstation 4 Slim 1TB 3 Game Bundle Console. Sealed!!!\n   Quantity: 3,00 | Unit Price: 399,99 | Net Worth: 1199,97 | VAT: 10% | Gross Total: 1319,97\n3. Atari Flashback 4 Classic Game Console 75 built in games Space Invaders Asteroid\n   Quantity: 4,00 | Unit Price: 8,50 | Net Worth: 34,00 | VAT: 10% | Gross Total: 37,40\n4. Sony PlayStation 1 PS1 Console model scph-7501\n   Quantity: 4,00 | Unit Price: 14,99 | Net Worth: 59,96 | VAT: 10% | Gross Total: 65,96\n5. Nintendo Wii Console 2 Remotes w/ Covers, Nunchucks, Sensor Sega Game Bundle\n   Quantity: 1,00 | Unit Price: 85,00 | Net Worth: 85,00 | VAT: 10% | Gross Total: 93,50\n6. Sony PlayStation 3 PS3 Super Slim Black Console 20GB *Tested* Console & Cables\n   Quantity: 4,00 | Unit Price: 99,95 | Net Worth: 399,80 | VAT: 10% | Gross Total: 439,78\n7. Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working\n   Quantity: 3,00 | Unit Price: 70,00 | Net Worth: 210,00 | VAT: 10% | Gross Total: 231,00\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $2053,73\nTax / VAT: $205,37\nGross Total Due: $2259,10\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "16662010",
      "date": "08/28/2016",
      "total_amount": "$2259,10",
      "subtotal": "$2053,73",
      "tax_amount": "$205,37",
      "seller": "Smith-Cook 174 Justin Causeway West Michaelmouth, ME 69894",
      "client": "Snyder-Johnson 05173 Heather Mill Jenniferfort, WV79662",
      "iban": "GB20BAKH22085364527355",
      "items": [
        {
          "description": "Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working 59",
          "quantity": "1,00",
          "unit_price": "65,00",
          "total_price": "65,00",
          "vat": "10%",
          "gross_worth": "71,50"
        },
        {
          "description": "New Sony Playstation 4 Slim 1TB 3 Game Bundle Console. Sealed!!!",
          "quantity": "3,00",
          "unit_price": "399,99",
          "total_price": "1199,97",
          "vat": "10%",
          "gross_worth": "1319,97"
        },
        {
          "description": "Atari Flashback 4 Classic Game Console 75 built in games Space Invaders Asteroid",
          "quantity": "4,00",
          "unit_price": "8,50",
          "total_price": "34,00",
          "vat": "10%",
          "gross_worth": "37,40"
        },
        {
          "description": "Sony PlayStation 1 PS1 Console model scph-7501",
          "quantity": "4,00",
          "unit_price": "14,99",
          "total_price": "59,96",
          "vat": "10%",
          "gross_worth": "65,96"
        },
        {
          "description": "Nintendo Wii Console 2 Remotes w/ Covers, Nunchucks, Sensor Sega Game Bundle",
          "quantity": "1,00",
          "unit_price": "85,00",
          "total_price": "85,00",
          "vat": "10%",
          "gross_worth": "93,50"
        },
        {
          "description": "Sony PlayStation 3 PS3 Super Slim Black Console 20GB *Tested* Console & Cables",
          "quantity": "4,00",
          "unit_price": "99,95",
          "total_price": "399,80",
          "vat": "10%",
          "gross_worth": "439,78"
        },
        {
          "description": "Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working",
          "quantity": "3,00",
          "unit_price": "70,00",
          "total_price": "210,00",
          "vat": "10%",
          "gross_worth": "231,00"
        }
      ],
      "seller_tax_id": "959-84-2124",
      "client_tax_id": "938-85-4960",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-370e7d/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-370e7d/image"
  },
  {
    "id": "inv-be7fea",
    "filename": "KatanaML_Invoice_0006.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #27543706 issued by Kaiser, Hays and Cook 460 Richard Forge Lake Maria, CA 86826 to Holland PLC 10833 Hill Courts Suite 606 Collinsland, CA 60385 for gross total 48 801,10 on 07/20/2020.",
    "text_content": "========================================================================\nINVOICE #27543706\nIssuance Date: 07/20/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Kaiser, Hays and Cook 460 Richard Forge Lake Maria, CA 86826\nTax Identifier: 980-78-9083\nSettlement IBAN: GB82GOCR29918894344551\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Holland PLC 10833 Hill Courts Suite 606 Collinsland, CA 60385\nTax Identifier: 998-85-0115\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Marble Beautiful White Coffee Table Top Malachite Inlay Art Home Decor H5372\n   Quantity: 5,00 | Unit Price: 271,01 | Net Worth: 1355,05 | VAT: 10% | Gross Total: 1 490,55\n2. 15\"x15\" White Decorative Coffee Table Top Lapis Lazuli Marquetery Patio D\u00e9cor\n   Quantity: 4,00 | Unit Price: 645,77 | Net Worth: 2583,08 | VAT: 10% | Gross Total: 2 841,39\n3. 16 Inches Marble Coffee Table Top Inlay with Multi Stone at Border Game Table\n   Quantity: 1,00 | Unit Price: 280,50 | Net Worth: 280,50 | VAT: 10% | Gross Total: 308,55\n4. 18\" Black Marble Coffee Table Top Mother of Pearl Inlay Furniture Decors H1883B\n   Quantity: 3,00 | Unit Price: 377,65 | Net Worth: 1132,95 | VAT: 10% | Gross Total: 1246,24\n5. 7'x4' Pietra Dura Marble Dining Hallway Table Top Inlay Design Patio Decor E977A\n   Quantity: 2,00 | Unit Price: 19 506,53 | Net Worth: 39 013,06 | VAT: 10% | Gross Total: 42 914,37\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 44 364,64\nTax / VAT: $4436,46\nGross Total Due: 48 801,10\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #27543706 Document & OCR",
        "text": "========================================================================\nINVOICE #27543706\nIssuance Date: 07/20/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Kaiser, Hays and Cook 460 Richard Forge Lake Maria, CA 86826\nTax Identifier: 980-78-9083\nSettlement IBAN: GB82GOCR29918894344551\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Holland PLC 10833 Hill Courts Suite 606 Collinsland, CA 60385\nTax Identifier: 998-85-0115\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Marble Beautiful White Coffee Table Top Malachite Inlay Art Home Decor H5372\n   Quantity: 5,00 | Unit Price: 271,01 | Net Worth: 1355,05 | VAT: 10% | Gross Total: 1 490,55\n2. 15\"x15\" White Decorative Coffee Table Top Lapis Lazuli Marquetery Patio D\u00e9cor\n   Quantity: 4,00 | Unit Price: 645,77 | Net Worth: 2583,08 | VAT: 10% | Gross Total: 2 841,39\n3. 16 Inches Marble Coffee Table Top Inlay with Multi Stone at Border Game Table\n   Quantity: 1,00 | Unit Price: 280,50 | Net Worth: 280,50 | VAT: 10% | Gross Total: 308,55\n4. 18\" Black Marble Coffee Table Top Mother of Pearl Inlay Furniture Decors H1883B\n   Quantity: 3,00 | Unit Price: 377,65 | Net Worth: 1132,95 | VAT: 10% | Gross Total: 1246,24\n5. 7'x4' Pietra Dura Marble Dining Hallway Table Top Inlay Design Patio Decor E977A\n   Quantity: 2,00 | Unit Price: 19 506,53 | Net Worth: 39 013,06 | VAT: 10% | Gross Total: 42 914,37\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 44 364,64\nTax / VAT: $4436,46\nGross Total Due: 48 801,10\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "27543706",
      "date": "07/20/2020",
      "total_amount": "48 801,10",
      "subtotal": "$ 44 364,64",
      "tax_amount": "$4436,46",
      "seller": "Kaiser, Hays and Cook 460 Richard Forge Lake Maria, CA 86826",
      "client": "Holland PLC 10833 Hill Courts Suite 606 Collinsland, CA 60385",
      "iban": "GB82GOCR29918894344551",
      "items": [
        {
          "description": "Marble Beautiful White Coffee Table Top Malachite Inlay Art Home Decor H5372",
          "quantity": "5,00",
          "unit_price": "271,01",
          "total_price": "1355,05",
          "vat": "10%",
          "gross_worth": "1 490,55"
        },
        {
          "description": "15\"x15\" White Decorative Coffee Table Top Lapis Lazuli Marquetery Patio D\u00e9cor",
          "quantity": "4,00",
          "unit_price": "645,77",
          "total_price": "2583,08",
          "vat": "10%",
          "gross_worth": "2 841,39"
        },
        {
          "description": "16 Inches Marble Coffee Table Top Inlay with Multi Stone at Border Game Table",
          "quantity": "1,00",
          "unit_price": "280,50",
          "total_price": "280,50",
          "vat": "10%",
          "gross_worth": "308,55"
        },
        {
          "description": "18\" Black Marble Coffee Table Top Mother of Pearl Inlay Furniture Decors H1883B",
          "quantity": "3,00",
          "unit_price": "377,65",
          "total_price": "1132,95",
          "vat": "10%",
          "gross_worth": "1246,24"
        },
        {
          "description": "7'x4' Pietra Dura Marble Dining Hallway Table Top Inlay Design Patio Decor E977A",
          "quantity": "2,00",
          "unit_price": "19 506,53",
          "total_price": "39 013,06",
          "vat": "10%",
          "gross_worth": "42 914,37"
        }
      ],
      "seller_tax_id": "980-78-9083",
      "client_tax_id": "998-85-0115",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-be7fea/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-be7fea/image"
  },
  {
    "id": "inv-ec5089",
    "filename": "KatanaML_Invoice_0007.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #26343874 issued by Smith Ltd 290 Jodi Gardens Charlesview, TN 10958 to Herring-Floyd 8113 Hansen Cliff Apt. 826 Port Alice, ID 99663 for gross total $3490,29 on 07/17/2013.",
    "text_content": "========================================================================\nINVOICE #26343874\nIssuance Date: 07/17/2013\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Smith Ltd 290 Jodi Gardens Charlesview, TN 10958\nTax Identifier: 916-97-6743\nSettlement IBAN: GB78TZMX55978564099007\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Herring-Floyd 8113 Hansen Cliff Apt. 826 Port Alice, ID 99663\nTax Identifier: 913-80-4636\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Microsoft Xbox One X 1TB 4k Ultra HD Console black controller works great 1787\n   Quantity: 5,00 | Unit Price: 249,00 | Net Worth: 1245,00 | VAT: 10% | Gross Total: 1369,50\n2. Cables 500gb,Sony PlayStation 4 PS4 CUH 1215A Jet Black Console w/ Controller\n   Quantity: 5,00 | Unit Price: 100,00 | Net Worth: 500,00 | VAT: 10% | Gross Total: 550,00\n3. PS2 Slim Console System SCPH-77000 PINK Playstation 2 Tested\n   Quantity: 4,00 | Unit Price: 252,00 | Net Worth: 1008,00 | VAT: 10% | Gross Total: 1 108,80\n4. Nintendo Game Boy Micro Console - Black (OXYSFBB)\n   Quantity: 2,00 | Unit Price: 130,00 | Net Worth: 260,00 | VAT: 10% | Gross Total: 286,00\n5. Nintendo GameCube System Console Bundle Mario Sunshine + Genuine controller LOT\n   Quantity: 1,00 | Unit Price: 159,99 | Net Worth: 159,99 | VAT: 10% | Gross Total: 175,99\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $3172,99\nTax / VAT: $ 317,30\nGross Total Due: $3490,29\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #26343874 Document & OCR",
        "text": "========================================================================\nINVOICE #26343874\nIssuance Date: 07/17/2013\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Smith Ltd 290 Jodi Gardens Charlesview, TN 10958\nTax Identifier: 916-97-6743\nSettlement IBAN: GB78TZMX55978564099007\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Herring-Floyd 8113 Hansen Cliff Apt. 826 Port Alice, ID 99663\nTax Identifier: 913-80-4636\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Microsoft Xbox One X 1TB 4k Ultra HD Console black controller works great 1787\n   Quantity: 5,00 | Unit Price: 249,00 | Net Worth: 1245,00 | VAT: 10% | Gross Total: 1369,50\n2. Cables 500gb,Sony PlayStation 4 PS4 CUH 1215A Jet Black Console w/ Controller\n   Quantity: 5,00 | Unit Price: 100,00 | Net Worth: 500,00 | VAT: 10% | Gross Total: 550,00\n3. PS2 Slim Console System SCPH-77000 PINK Playstation 2 Tested\n   Quantity: 4,00 | Unit Price: 252,00 | Net Worth: 1008,00 | VAT: 10% | Gross Total: 1 108,80\n4. Nintendo Game Boy Micro Console - Black (OXYSFBB)\n   Quantity: 2,00 | Unit Price: 130,00 | Net Worth: 260,00 | VAT: 10% | Gross Total: 286,00\n5. Nintendo GameCube System Console Bundle Mario Sunshine + Genuine controller LOT\n   Quantity: 1,00 | Unit Price: 159,99 | Net Worth: 159,99 | VAT: 10% | Gross Total: 175,99\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $3172,99\nTax / VAT: $ 317,30\nGross Total Due: $3490,29\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "26343874",
      "date": "07/17/2013",
      "total_amount": "$3490,29",
      "subtotal": "$3172,99",
      "tax_amount": "$ 317,30",
      "seller": "Smith Ltd 290 Jodi Gardens Charlesview, TN 10958",
      "client": "Herring-Floyd 8113 Hansen Cliff Apt. 826 Port Alice, ID 99663",
      "iban": "GB78TZMX55978564099007",
      "items": [
        {
          "description": "Microsoft Xbox One X 1TB 4k Ultra HD Console black controller works great 1787",
          "quantity": "5,00",
          "unit_price": "249,00",
          "total_price": "1245,00",
          "vat": "10%",
          "gross_worth": "1369,50"
        },
        {
          "description": "Cables 500gb,Sony PlayStation 4 PS4 CUH 1215A Jet Black Console w/ Controller",
          "quantity": "5,00",
          "unit_price": "100,00",
          "total_price": "500,00",
          "vat": "10%",
          "gross_worth": "550,00"
        },
        {
          "description": "PS2 Slim Console System SCPH-77000 PINK Playstation 2 Tested",
          "quantity": "4,00",
          "unit_price": "252,00",
          "total_price": "1008,00",
          "vat": "10%",
          "gross_worth": "1 108,80"
        },
        {
          "description": "Nintendo Game Boy Micro Console - Black (OXYSFBB)",
          "quantity": "2,00",
          "unit_price": "130,00",
          "total_price": "260,00",
          "vat": "10%",
          "gross_worth": "286,00"
        },
        {
          "description": "Nintendo GameCube System Console Bundle Mario Sunshine + Genuine controller LOT",
          "quantity": "1,00",
          "unit_price": "159,99",
          "total_price": "159,99",
          "vat": "10%",
          "gross_worth": "175,99"
        }
      ],
      "seller_tax_id": "916-97-6743",
      "client_tax_id": "913-80-4636",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-ec5089/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-ec5089/image"
  },
  {
    "id": "inv-478f13",
    "filename": "KatanaML_Invoice_0008.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 4,
    "relationships_count": 3,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #12222347 issued by Gregory, Patterson and Fischer 439 Hunter Land South Jameschester, MT 09091 to Wilson PLC 667 Wu Ports Marshallmouth, AK 03373 for gross total $ 136,13 on 03/18/2017.",
    "text_content": "========================================================================\nINVOICE #12222347\nIssuance Date: 03/18/2017\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Gregory, Patterson and Fischer 439 Hunter Land South Jameschester, MT 09091\nTax Identifier: 958-94-6606\nSettlement IBAN: GB10YCPS61791791374226282\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Wilson PLC 667 Wu Ports Marshallmouth, AK 03373\nTax Identifier: 928-91-2431\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Zara Yellow Shift Dress XS\n   Quantity: 5,00 | Unit Price: 24,75 | Net Worth: 123,75 | VAT: 10% | Gross Total: 136,13\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 123,75\nTax / VAT: $ 12,38\nGross Total Due: $ 136,13\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #12222347 Document & OCR",
        "text": "========================================================================\nINVOICE #12222347\nIssuance Date: 03/18/2017\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Gregory, Patterson and Fischer 439 Hunter Land South Jameschester, MT 09091\nTax Identifier: 958-94-6606\nSettlement IBAN: GB10YCPS61791791374226282\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Wilson PLC 667 Wu Ports Marshallmouth, AK 03373\nTax Identifier: 928-91-2431\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Zara Yellow Shift Dress XS\n   Quantity: 5,00 | Unit Price: 24,75 | Net Worth: 123,75 | VAT: 10% | Gross Total: 136,13\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 123,75\nTax / VAT: $ 12,38\nGross Total Due: $ 136,13\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "12222347",
      "date": "03/18/2017",
      "total_amount": "$ 136,13",
      "subtotal": "$ 123,75",
      "tax_amount": "$ 12,38",
      "seller": "Gregory, Patterson and Fischer 439 Hunter Land South Jameschester, MT 09091",
      "client": "Wilson PLC 667 Wu Ports Marshallmouth, AK 03373",
      "iban": "GB10YCPS61791791374226282",
      "items": [
        {
          "description": "Zara Yellow Shift Dress XS",
          "quantity": "5,00",
          "unit_price": "24,75",
          "total_price": "123,75",
          "vat": "10%",
          "gross_worth": "136,13"
        }
      ],
      "seller_tax_id": "958-94-6606",
      "client_tax_id": "928-91-2431",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-478f13/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-478f13/image"
  },
  {
    "id": "inv-02e72c",
    "filename": "KatanaML_Invoice_0009.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 6,
    "relationships_count": 5,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #25698672 issued by Gordon, Alvarado and Jones 943 Sean Park Suite 284 North Derrick, OR 67536 to Manning-Ho 92026 Michael Terrace Apt. 138 West Michael, IL 42693 for gross total $ 127,00 on 08/01/2015.",
    "text_content": "========================================================================\nINVOICE #25698672\nIssuance Date: 08/01/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Gordon, Alvarado and Jones 943 Sean Park Suite 284 North Derrick, OR 67536\nTax Identifier: 936-79-2794\nSettlement IBAN: GB47JKAT88391563723291\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Manning-Ho 92026 Michael Terrace Apt. 138 West Michael, IL 42693\nTax Identifier: 960-85-1578\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. CCNA 200-301 50 GB AUG 2020 Cisco Video/Official Books/Exam Dumps/Licences\n   Quantity: 5,00 | Unit Price: 1,99 | Net Worth: 9,95 | VAT: 10% | Gross Total: 10,94\n2. Tales from the Buffalo Bills\n   Quantity: 5,00 | Unit Price: 5,50 | Net Worth: 27,50 | VAT: 10% | Gross Total: 30,25\n3. A boy who grew up eating nightmare It's Okay to Not Be Okay Picturebook 00000000\n   Quantity: 4,00 | Unit Price: 19,50 | Net Worth: 78,00 | VAT: 10% | Gross Total: 85,80\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 115,45\nTax / VAT: $ 11,55\nGross Total Due: $ 127,00\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #25698672 Document & OCR",
        "text": "========================================================================\nINVOICE #25698672\nIssuance Date: 08/01/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Gordon, Alvarado and Jones 943 Sean Park Suite 284 North Derrick, OR 67536\nTax Identifier: 936-79-2794\nSettlement IBAN: GB47JKAT88391563723291\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Manning-Ho 92026 Michael Terrace Apt. 138 West Michael, IL 42693\nTax Identifier: 960-85-1578\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. CCNA 200-301 50 GB AUG 2020 Cisco Video/Official Books/Exam Dumps/Licences\n   Quantity: 5,00 | Unit Price: 1,99 | Net Worth: 9,95 | VAT: 10% | Gross Total: 10,94\n2. Tales from the Buffalo Bills\n   Quantity: 5,00 | Unit Price: 5,50 | Net Worth: 27,50 | VAT: 10% | Gross Total: 30,25\n3. A boy who grew up eating nightmare It's Okay to Not Be Okay Picturebook 00000000\n   Quantity: 4,00 | Unit Price: 19,50 | Net Worth: 78,00 | VAT: 10% | Gross Total: 85,80\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 115,45\nTax / VAT: $ 11,55\nGross Total Due: $ 127,00\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "25698672",
      "date": "08/01/2015",
      "total_amount": "$ 127,00",
      "subtotal": "$ 115,45",
      "tax_amount": "$ 11,55",
      "seller": "Gordon, Alvarado and Jones 943 Sean Park Suite 284 North Derrick, OR 67536",
      "client": "Manning-Ho 92026 Michael Terrace Apt. 138 West Michael, IL 42693",
      "iban": "GB47JKAT88391563723291",
      "items": [
        {
          "description": "CCNA 200-301 50 GB AUG 2020 Cisco Video/Official Books/Exam Dumps/Licences",
          "quantity": "5,00",
          "unit_price": "1,99",
          "total_price": "9,95",
          "vat": "10%",
          "gross_worth": "10,94"
        },
        {
          "description": "Tales from the Buffalo Bills",
          "quantity": "5,00",
          "unit_price": "5,50",
          "total_price": "27,50",
          "vat": "10%",
          "gross_worth": "30,25"
        },
        {
          "description": "A boy who grew up eating nightmare It's Okay to Not Be Okay Picturebook 00000000",
          "quantity": "4,00",
          "unit_price": "19,50",
          "total_price": "78,00",
          "vat": "10%",
          "gross_worth": "85,80"
        }
      ],
      "seller_tax_id": "936-79-2794",
      "client_tax_id": "960-85-1578",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-02e72c/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-02e72c/image"
  },
  {
    "id": "inv-30b66e",
    "filename": "KatanaML_Invoice_0010.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 4,
    "relationships_count": 3,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #24048799 issued by Rodriguez-jackson 4804 Riley Row Suite 059 East Edwardtown, MN 91106 to Williams, Fletcher and Taylor 9371 Harvey Port Suite 901 South Tabitha, ID 50921 for gross total $5,45 on 05/21/2014.",
    "text_content": "========================================================================\nINVOICE #24048799\nIssuance Date: 05/21/2014\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Rodriguez-jackson 4804 Riley Row Suite 059 East Edwardtown, MN 91106\nTax Identifier: 983-85-8151\nSettlement IBAN: GB55GZIH60469560297692\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Williams, Fletcher and Taylor 9371 Harvey Port Suite 901 South Tabitha, ID 50921\nTax Identifier: 932-73-0724\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Large Blue Long Sleeve Fit & Flare Dress Elastic Waist Crochet Detail Bohemian\n   Quantity: 5,00 | Unit Price: 0,99 | Net Worth: 4,95 | VAT: 10% | Gross Total: 5,45\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 4,95\nTax / VAT: $0,50\nGross Total Due: $5,45\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #24048799 Document & OCR",
        "text": "========================================================================\nINVOICE #24048799\nIssuance Date: 05/21/2014\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Rodriguez-jackson 4804 Riley Row Suite 059 East Edwardtown, MN 91106\nTax Identifier: 983-85-8151\nSettlement IBAN: GB55GZIH60469560297692\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Williams, Fletcher and Taylor 9371 Harvey Port Suite 901 South Tabitha, ID 50921\nTax Identifier: 932-73-0724\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Large Blue Long Sleeve Fit & Flare Dress Elastic Waist Crochet Detail Bohemian\n   Quantity: 5,00 | Unit Price: 0,99 | Net Worth: 4,95 | VAT: 10% | Gross Total: 5,45\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 4,95\nTax / VAT: $0,50\nGross Total Due: $5,45\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "24048799",
      "date": "05/21/2014",
      "total_amount": "$5,45",
      "subtotal": "$ 4,95",
      "tax_amount": "$0,50",
      "seller": "Rodriguez-jackson 4804 Riley Row Suite 059 East Edwardtown, MN 91106",
      "client": "Williams, Fletcher and Taylor 9371 Harvey Port Suite 901 South Tabitha, ID 50921",
      "iban": "GB55GZIH60469560297692",
      "items": [
        {
          "description": "Large Blue Long Sleeve Fit & Flare Dress Elastic Waist Crochet Detail Bohemian",
          "quantity": "5,00",
          "unit_price": "0,99",
          "total_price": "4,95",
          "vat": "10%",
          "gross_worth": "5,45"
        }
      ],
      "seller_tax_id": "983-85-8151",
      "client_tax_id": "932-73-0724",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-30b66e/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-30b66e/image"
  },
  {
    "id": "inv-b828e8",
    "filename": "KatanaML_Invoice_0011.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 9,
    "relationships_count": 8,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #72455228 issued by Potts, Reed and Miller USCGC Weeks FPO AA 06868 to Brady LLC 26039 Anita Stravenue North Peter, WA 22187 for gross total $2155,98 on 05/11/2021.",
    "text_content": "========================================================================\nINVOICE #72455228\nIssuance Date: 05/11/2021\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Potts, Reed and Miller USCGC Weeks FPO AA 06868\nTax Identifier: 913-82-5781\nSettlement IBAN: GB54RDGK95400103726634\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Brady LLC 26039 Anita Stravenue North Peter, WA 22187\nTax Identifier: 953-75-0545\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. PlayStation 5 Console Disc Version PREORDER\"00OO\n   Quantity: 1,00 | Unit Price: 899,99 | Net Worth: 899,99 | VAT: 10% | Gross Total: 989,99\n2. Sony PlayStation 4 Slim 1TB (Upgraded to SSD) Black Game Console\n   Quantity: 2,00 | Unit Price: 150,00 | Net Worth: 300,00 | VAT: 10% | Gross Total: 330,00\n3. Nintendo Gameboy Pocket Console Clear Purple with Box MGB-001 Japan Tested 53\n   Quantity: 1,00 | Unit Price: 85,00 | Net Worth: 85,00 | VAT: 10% | Gross Total: 93,50\n4. NEC PC Engine INTERFACE UNIT IFU-30 CD ROM Console PI-TG001 Tested Japan\n   Quantity: 1,00 | Unit Price: 159,99 | Net Worth: 159,99 | VAT: 10% | Gross Total: 175,99\n5. SONY Playstation2 Slim Console set \" SCPH-90000 / White \"I TESTED Working 11194\n   Quantity: 4,00 | Unit Price: 90,00 | Net Worth: 360,00 | VAT: 10% | Gross Total: 396,00\n6. Magnavox Odyssey 2 Microprocessor Console System w Joy Sticks & 15 Games - 1978\n   Quantity: 1,00 | Unit Price: 155,00 | Net Worth: 155,00 | VAT: 10% | Gross Total: 170,50\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $1959,98\nTax / VAT: $ 196,00\nGross Total Due: $2155,98\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #72455228 Document & OCR",
        "text": "========================================================================\nINVOICE #72455228\nIssuance Date: 05/11/2021\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Potts, Reed and Miller USCGC Weeks FPO AA 06868\nTax Identifier: 913-82-5781\nSettlement IBAN: GB54RDGK95400103726634\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Brady LLC 26039 Anita Stravenue North Peter, WA 22187\nTax Identifier: 953-75-0545\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. PlayStation 5 Console Disc Version PREORDER\"00OO\n   Quantity: 1,00 | Unit Price: 899,99 | Net Worth: 899,99 | VAT: 10% | Gross Total: 989,99\n2. Sony PlayStation 4 Slim 1TB (Upgraded to SSD) Black Game Console\n   Quantity: 2,00 | Unit Price: 150,00 | Net Worth: 300,00 | VAT: 10% | Gross Total: 330,00\n3. Nintendo Gameboy Pocket Console Clear Purple with Box MGB-001 Japan Tested 53\n   Quantity: 1,00 | Unit Price: 85,00 | Net Worth: 85,00 | VAT: 10% | Gross Total: 93,50\n4. NEC PC Engine INTERFACE UNIT IFU-30 CD ROM Console PI-TG001 Tested Japan\n   Quantity: 1,00 | Unit Price: 159,99 | Net Worth: 159,99 | VAT: 10% | Gross Total: 175,99\n5. SONY Playstation2 Slim Console set \" SCPH-90000 / White \"I TESTED Working 11194\n   Quantity: 4,00 | Unit Price: 90,00 | Net Worth: 360,00 | VAT: 10% | Gross Total: 396,00\n6. Magnavox Odyssey 2 Microprocessor Console System w Joy Sticks & 15 Games - 1978\n   Quantity: 1,00 | Unit Price: 155,00 | Net Worth: 155,00 | VAT: 10% | Gross Total: 170,50\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $1959,98\nTax / VAT: $ 196,00\nGross Total Due: $2155,98\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "72455228",
      "date": "05/11/2021",
      "total_amount": "$2155,98",
      "subtotal": "$1959,98",
      "tax_amount": "$ 196,00",
      "seller": "Potts, Reed and Miller USCGC Weeks FPO AA 06868",
      "client": "Brady LLC 26039 Anita Stravenue North Peter, WA 22187",
      "iban": "GB54RDGK95400103726634",
      "items": [
        {
          "description": "PlayStation 5 Console Disc Version PREORDER\"00OO",
          "quantity": "1,00",
          "unit_price": "899,99",
          "total_price": "899,99",
          "vat": "10%",
          "gross_worth": "989,99"
        },
        {
          "description": "Sony PlayStation 4 Slim 1TB (Upgraded to SSD) Black Game Console",
          "quantity": "2,00",
          "unit_price": "150,00",
          "total_price": "300,00",
          "vat": "10%",
          "gross_worth": "330,00"
        },
        {
          "description": "Nintendo Gameboy Pocket Console Clear Purple with Box MGB-001 Japan Tested 53",
          "quantity": "1,00",
          "unit_price": "85,00",
          "total_price": "85,00",
          "vat": "10%",
          "gross_worth": "93,50"
        },
        {
          "description": "NEC PC Engine INTERFACE UNIT IFU-30 CD ROM Console PI-TG001 Tested Japan",
          "quantity": "1,00",
          "unit_price": "159,99",
          "total_price": "159,99",
          "vat": "10%",
          "gross_worth": "175,99"
        },
        {
          "description": "SONY Playstation2 Slim Console set \" SCPH-90000 / White \"I TESTED Working 11194",
          "quantity": "4,00",
          "unit_price": "90,00",
          "total_price": "360,00",
          "vat": "10%",
          "gross_worth": "396,00"
        },
        {
          "description": "Magnavox Odyssey 2 Microprocessor Console System w Joy Sticks & 15 Games - 1978",
          "quantity": "1,00",
          "unit_price": "155,00",
          "total_price": "155,00",
          "vat": "10%",
          "gross_worth": "170,50"
        }
      ],
      "seller_tax_id": "913-82-5781",
      "client_tax_id": "953-75-0545",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-b828e8/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-b828e8/image"
  },
  {
    "id": "inv-d973b3",
    "filename": "KatanaML_Invoice_0012.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 5,
    "relationships_count": 4,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #58478169 issued by Conley Ltd 262 Jeffrey Underpass Jamesview, WA 14945 to Wells-Avery 7065 Alejandro Forks Lake Jeffrey, ME 59849 for gross total $12 261,98 on 07/04/2016.",
    "text_content": "========================================================================\nINVOICE #58478169\nIssuance Date: 07/04/2016\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Conley Ltd 262 Jeffrey Underpass Jamesview, WA 14945\nTax Identifier: 919-79-8417\nSettlement IBAN: GB23MPY118052629547218\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Wells-Avery 7065 Alejandro Forks Lake Jeffrey, ME 59849\nTax Identifier: 965-90-7208\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 30 Inches Marble Patio Table Top Malachite Stone Inlaid Coffee Table Home Decor\n   Quantity: 3,00 | Unit Price: 1023,75 | Net Worth: 3071,25 | VAT: 10% | Gross Total: 3378,37\n2. 48 Inch Marble Restaurant Table Inlay with Lapis Lazuli Stone Dinning Table Top\n   Quantity: 3,00 | Unit Price: 2692,00 | Net Worth: 8076,00 | VAT: 10% | Gross Total: 8883,60\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $11 147,25\nTax / VAT: $1114,73\nGross Total Due: $12 261,98\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #58478169 Document & OCR",
        "text": "========================================================================\nINVOICE #58478169\nIssuance Date: 07/04/2016\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Conley Ltd 262 Jeffrey Underpass Jamesview, WA 14945\nTax Identifier: 919-79-8417\nSettlement IBAN: GB23MPY118052629547218\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Wells-Avery 7065 Alejandro Forks Lake Jeffrey, ME 59849\nTax Identifier: 965-90-7208\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 30 Inches Marble Patio Table Top Malachite Stone Inlaid Coffee Table Home Decor\n   Quantity: 3,00 | Unit Price: 1023,75 | Net Worth: 3071,25 | VAT: 10% | Gross Total: 3378,37\n2. 48 Inch Marble Restaurant Table Inlay with Lapis Lazuli Stone Dinning Table Top\n   Quantity: 3,00 | Unit Price: 2692,00 | Net Worth: 8076,00 | VAT: 10% | Gross Total: 8883,60\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $11 147,25\nTax / VAT: $1114,73\nGross Total Due: $12 261,98\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "58478169",
      "date": "07/04/2016",
      "total_amount": "$12 261,98",
      "subtotal": "$11 147,25",
      "tax_amount": "$1114,73",
      "seller": "Conley Ltd 262 Jeffrey Underpass Jamesview, WA 14945",
      "client": "Wells-Avery 7065 Alejandro Forks Lake Jeffrey, ME 59849",
      "iban": "GB23MPY118052629547218",
      "items": [
        {
          "description": "30 Inches Marble Patio Table Top Malachite Stone Inlaid Coffee Table Home Decor",
          "quantity": "3,00",
          "unit_price": "1023,75",
          "total_price": "3071,25",
          "vat": "10%",
          "gross_worth": "3378,37"
        },
        {
          "description": "48 Inch Marble Restaurant Table Inlay with Lapis Lazuli Stone Dinning Table Top",
          "quantity": "3,00",
          "unit_price": "2692,00",
          "total_price": "8076,00",
          "vat": "10%",
          "gross_worth": "8883,60"
        }
      ],
      "seller_tax_id": "919-79-8417",
      "client_tax_id": "965-90-7208",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-d973b3/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-d973b3/image"
  },
  {
    "id": "inv-cb3b9c",
    "filename": "KatanaML_Invoice_0013.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #90508672 issued by Stone-Waller 53428 Peter Dale Apt. 293 Amberchester, IA 57427 to Shaw Group 58420 John Turnpike Suite 767 North Ricardo, NV 32611 for gross total $7052,49 on 04/16/2020.",
    "text_content": "========================================================================\nINVOICE #90508672\nIssuance Date: 04/16/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Stone-Waller 53428 Peter Dale Apt. 293 Amberchester, IA 57427\nTax Identifier: 994-99-6683\nSettlement IBAN: GB61GZVZ46496690777484\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Shaw Group 58420 John Turnpike Suite 767 North Ricardo, NV 32611\nTax Identifier: 914-79-8228\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. SOFA SET\n   Quantity: 2,00 | Unit Price: 250,00 | Net Worth: 500,00 | VAT: 10% | Gross Total: 550,00\n2. Real Madrid Inflatable Chair (SG16136)\n   Quantity: 3,00 | Unit Price: 43,95 | Net Worth: 131,85 | VAT: 10% | Gross Total: 145,04\n3. 13 Inch Marble Coffee Table Stone Game Table Mother of Pearl with Check Pattern\n   Quantity: 4,00 | Unit Price: 301,75 | Net Worth: 1207,00 | VAT: 10% | Gross Total: 1327,70\n4. Carnelian Stone Floral Pattern Dinette Table Top Marble Coffee Table 30 Inches\n   Quantity: 2,00 | Unit Price: 993,75 | Net Worth: 1987,50 | VAT: 10% | Gross Total: 2 186,25\n5. 3'x2' Black Marvels Top Dining Table Italian Handmade Floral Art Christmas Gift\n   Quantity: 1,00 | Unit Price: 2585,00 | Net Worth: 2585,00 | VAT: 10% | Gross Total: 2843,50\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $6411,35\nTax / VAT: $ 641,14\nGross Total Due: $7052,49\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #90508672 Document & OCR",
        "text": "========================================================================\nINVOICE #90508672\nIssuance Date: 04/16/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Stone-Waller 53428 Peter Dale Apt. 293 Amberchester, IA 57427\nTax Identifier: 994-99-6683\nSettlement IBAN: GB61GZVZ46496690777484\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Shaw Group 58420 John Turnpike Suite 767 North Ricardo, NV 32611\nTax Identifier: 914-79-8228\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. SOFA SET\n   Quantity: 2,00 | Unit Price: 250,00 | Net Worth: 500,00 | VAT: 10% | Gross Total: 550,00\n2. Real Madrid Inflatable Chair (SG16136)\n   Quantity: 3,00 | Unit Price: 43,95 | Net Worth: 131,85 | VAT: 10% | Gross Total: 145,04\n3. 13 Inch Marble Coffee Table Stone Game Table Mother of Pearl with Check Pattern\n   Quantity: 4,00 | Unit Price: 301,75 | Net Worth: 1207,00 | VAT: 10% | Gross Total: 1327,70\n4. Carnelian Stone Floral Pattern Dinette Table Top Marble Coffee Table 30 Inches\n   Quantity: 2,00 | Unit Price: 993,75 | Net Worth: 1987,50 | VAT: 10% | Gross Total: 2 186,25\n5. 3'x2' Black Marvels Top Dining Table Italian Handmade Floral Art Christmas Gift\n   Quantity: 1,00 | Unit Price: 2585,00 | Net Worth: 2585,00 | VAT: 10% | Gross Total: 2843,50\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $6411,35\nTax / VAT: $ 641,14\nGross Total Due: $7052,49\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "90508672",
      "date": "04/16/2020",
      "total_amount": "$7052,49",
      "subtotal": "$6411,35",
      "tax_amount": "$ 641,14",
      "seller": "Stone-Waller 53428 Peter Dale Apt. 293 Amberchester, IA 57427",
      "client": "Shaw Group 58420 John Turnpike Suite 767 North Ricardo, NV 32611",
      "iban": "GB61GZVZ46496690777484",
      "items": [
        {
          "description": "SOFA SET",
          "quantity": "2,00",
          "unit_price": "250,00",
          "total_price": "500,00",
          "vat": "10%",
          "gross_worth": "550,00"
        },
        {
          "description": "Real Madrid Inflatable Chair (SG16136)",
          "quantity": "3,00",
          "unit_price": "43,95",
          "total_price": "131,85",
          "vat": "10%",
          "gross_worth": "145,04"
        },
        {
          "description": "13 Inch Marble Coffee Table Stone Game Table Mother of Pearl with Check Pattern",
          "quantity": "4,00",
          "unit_price": "301,75",
          "total_price": "1207,00",
          "vat": "10%",
          "gross_worth": "1327,70"
        },
        {
          "description": "Carnelian Stone Floral Pattern Dinette Table Top Marble Coffee Table 30 Inches",
          "quantity": "2,00",
          "unit_price": "993,75",
          "total_price": "1987,50",
          "vat": "10%",
          "gross_worth": "2 186,25"
        },
        {
          "description": "3'x2' Black Marvels Top Dining Table Italian Handmade Floral Art Christmas Gift",
          "quantity": "1,00",
          "unit_price": "2585,00",
          "total_price": "2585,00",
          "vat": "10%",
          "gross_worth": "2843,50"
        }
      ],
      "seller_tax_id": "994-99-6683",
      "client_tax_id": "914-79-8228",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-cb3b9c/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-cb3b9c/image"
  },
  {
    "id": "inv-9e236e",
    "filename": "KatanaML_Invoice_0014.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 9,
    "relationships_count": 8,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #96051364 issued by Jackson Ltd 134 Catherine Valley Apt. 756 Lake Jennifer, NE 09531 to Williams, Fowler and Phillips 115 Mccormick Knolls North Kevin, TN 27580 for gross total $ 1579 929,37 on 04/28/2020.",
    "text_content": "========================================================================\nINVOICE #96051364\nIssuance Date: 04/28/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Jackson Ltd 134 Catherine Valley Apt. 756 Lake Jennifer, NE 09531\nTax Identifier: 914-85-0938\nSettlement IBAN: GB61XXNT90578783067262\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Williams, Fowler and Phillips 115 Mccormick Knolls North Kevin, TN 27580\nTax Identifier: 963-87-9620\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 49\"x22\" Marble Top Center Table Carnelian Mosaic Italian Art Christmas Gift Arts\n   Quantity: 4,00 | Unit Price: 2400,00 | Net Worth: 9600,00 | VAT: 10% | Gross Total: 10 560,00\n2. 6'x3' Marble Dining Center Table With Black Top Floral Collectible Inlaid E963\n   Quantity: 3,00 | Unit Price: 6040,40 | Net Worth: 18 121,20 | VAT: 10% | Gross Total: 19 933,32\n3. 7'x4' Blue Random Marble Dining Hallway Table Top Lapis Lazuli Inlay Decor E947A\n   Quantity: 5,00 | Unit Price: 8194,09 | Net Worth: 40970,45 | VAT: 10% | Gross Total: 45 067,50\n4. 36\" Marble White Top Counter Table Lapis Inlaid Pietradura Art Christmas Gifts\n   Quantity: 3,00 | Unit Price: 3 200,00 | Net Worth: 9 600,00 | VAT: 10% | Gross Total: 10 560,00\n5. 6'x3' White Marble Dining Table Top Multi Inlay Floral Elephant Art Decor H4952\n   Quantity: 5,00 | Unit Price: 6408,49 | Net Worth: 32042,45 | VAT: 10% | Gross Total: 35 246,69\n6. 6'x3' Marble Dining Center Table Marquetry Inlay Italian Mosaic Patio Arts H3112\n   Quantity: 5,00 | Unit Price: 6647,61 | Net Worth: N/A | VAT: 10% | Gross Total: 36 561,85\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $143572,15\nTax / VAT: $ 14357,22\nGross Total Due: $ 1579 929,37\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #96051364 Document & OCR",
        "text": "========================================================================\nINVOICE #96051364\nIssuance Date: 04/28/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Jackson Ltd 134 Catherine Valley Apt. 756 Lake Jennifer, NE 09531\nTax Identifier: 914-85-0938\nSettlement IBAN: GB61XXNT90578783067262\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Williams, Fowler and Phillips 115 Mccormick Knolls North Kevin, TN 27580\nTax Identifier: 963-87-9620\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 49\"x22\" Marble Top Center Table Carnelian Mosaic Italian Art Christmas Gift Arts\n   Quantity: 4,00 | Unit Price: 2400,00 | Net Worth: 9600,00 | VAT: 10% | Gross Total: 10 560,00\n2. 6'x3' Marble Dining Center Table With Black Top Floral Collectible Inlaid E963\n   Quantity: 3,00 | Unit Price: 6040,40 | Net Worth: 18 121,20 | VAT: 10% | Gross Total: 19 933,32\n3. 7'x4' Blue Random Marble Dining Hallway Table Top Lapis Lazuli Inlay Decor E947A\n   Quantity: 5,00 | Unit Price: 8194,09 | Net Worth: 40970,45 | VAT: 10% | Gross Total: 45 067,50\n4. 36\" Marble White Top Counter Table Lapis Inlaid Pietradura Art Christmas Gifts\n   Quantity: 3,00 | Unit Price: 3 200,00 | Net Worth: 9 600,00 | VAT: 10% | Gross Total: 10 560,00\n5. 6'x3' White Marble Dining Table Top Multi Inlay Floral Elephant Art Decor H4952\n   Quantity: 5,00 | Unit Price: 6408,49 | Net Worth: 32042,45 | VAT: 10% | Gross Total: 35 246,69\n6. 6'x3' Marble Dining Center Table Marquetry Inlay Italian Mosaic Patio Arts H3112\n   Quantity: 5,00 | Unit Price: 6647,61 | Net Worth: N/A | VAT: 10% | Gross Total: 36 561,85\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $143572,15\nTax / VAT: $ 14357,22\nGross Total Due: $ 1579 929,37\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "96051364",
      "date": "04/28/2020",
      "total_amount": "$ 1579 929,37",
      "subtotal": "$143572,15",
      "tax_amount": "$ 14357,22",
      "seller": "Jackson Ltd 134 Catherine Valley Apt. 756 Lake Jennifer, NE 09531",
      "client": "Williams, Fowler and Phillips 115 Mccormick Knolls North Kevin, TN 27580",
      "iban": "GB61XXNT90578783067262",
      "items": [
        {
          "description": "49\"x22\" Marble Top Center Table Carnelian Mosaic Italian Art Christmas Gift Arts",
          "quantity": "4,00",
          "unit_price": "2400,00",
          "total_price": "9600,00",
          "vat": "10%",
          "gross_worth": "10 560,00"
        },
        {
          "description": "6'x3' Marble Dining Center Table With Black Top Floral Collectible Inlaid E963",
          "quantity": "3,00",
          "unit_price": "6040,40",
          "total_price": "18 121,20",
          "vat": "10%",
          "gross_worth": "19 933,32"
        },
        {
          "description": "7'x4' Blue Random Marble Dining Hallway Table Top Lapis Lazuli Inlay Decor E947A",
          "quantity": "5,00",
          "unit_price": "8194,09",
          "total_price": "40970,45",
          "vat": "10%",
          "gross_worth": "45 067,50"
        },
        {
          "description": "36\" Marble White Top Counter Table Lapis Inlaid Pietradura Art Christmas Gifts",
          "quantity": "3,00",
          "unit_price": "3 200,00",
          "total_price": "9 600,00",
          "vat": "10%",
          "gross_worth": "10 560,00"
        },
        {
          "description": "6'x3' White Marble Dining Table Top Multi Inlay Floral Elephant Art Decor H4952",
          "quantity": "5,00",
          "unit_price": "6408,49",
          "total_price": "32042,45",
          "vat": "10%",
          "gross_worth": "35 246,69"
        },
        {
          "description": "6'x3' Marble Dining Center Table Marquetry Inlay Italian Mosaic Patio Arts H3112",
          "quantity": "5,00",
          "unit_price": "6647,61",
          "total_price": "N/A",
          "vat": "10%",
          "gross_worth": "36 561,85"
        }
      ],
      "seller_tax_id": "914-85-0938",
      "client_tax_id": "963-87-9620",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-9e236e/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-9e236e/image"
  },
  {
    "id": "inv-da583d",
    "filename": "KatanaML_Invoice_0015.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 6,
    "relationships_count": 5,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #67856369 issued by Pierce PLC 3454 Mcbride Ramp Apt. 312 New Judy, WI 36022 to Cochran-Alvarez 488 Kenneth Mission Port Caroltown, NY 43776 for gross total $4952,82 on 05/27/2020.",
    "text_content": "========================================================================\nINVOICE #67856369\nIssuance Date: 05/27/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Pierce PLC 3454 Mcbride Ramp Apt. 312 New Judy, WI 36022\nTax Identifier: 959-99-4796\nSettlement IBAN: GB68KEDC47196257123820\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Cochran-Alvarez 488 Kenneth Mission Port Caroltown, NY 43776\nTax Identifier: 961-72-7276\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 24 Inches Round Marble Coffee Table Top Inlay Sofa Table with Geometrical Design\n   Quantity: 4,00 | Unit Price: 446,25 | Net Worth: 1785,00 | VAT: 10% | Gross Total: 1963,50\n2. 30\"x30\" Marble Black Top Table Semi Precious Bird Art Black Friday Gift D\u00e9cor\n   Quantity: 1,00 | Unit Price: 2399,00 | Net Worth: 2399,00 | VAT: 10% | Gross Total: 2 638,90\n3. 2 Industrial Live edge Legs 16\" Tall Cast Aluminum Cast Iron Coffee Table Bench\n   Quantity: 2,00 | Unit Price: 159,28 | Net Worth: 318,56 | VAT: 10% | Gross Total: 350,42\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $4 502,56\nTax / VAT: $ 450,26\nGross Total Due: $4952,82\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #67856369 Document & OCR",
        "text": "========================================================================\nINVOICE #67856369\nIssuance Date: 05/27/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Pierce PLC 3454 Mcbride Ramp Apt. 312 New Judy, WI 36022\nTax Identifier: 959-99-4796\nSettlement IBAN: GB68KEDC47196257123820\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Cochran-Alvarez 488 Kenneth Mission Port Caroltown, NY 43776\nTax Identifier: 961-72-7276\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 24 Inches Round Marble Coffee Table Top Inlay Sofa Table with Geometrical Design\n   Quantity: 4,00 | Unit Price: 446,25 | Net Worth: 1785,00 | VAT: 10% | Gross Total: 1963,50\n2. 30\"x30\" Marble Black Top Table Semi Precious Bird Art Black Friday Gift D\u00e9cor\n   Quantity: 1,00 | Unit Price: 2399,00 | Net Worth: 2399,00 | VAT: 10% | Gross Total: 2 638,90\n3. 2 Industrial Live edge Legs 16\" Tall Cast Aluminum Cast Iron Coffee Table Bench\n   Quantity: 2,00 | Unit Price: 159,28 | Net Worth: 318,56 | VAT: 10% | Gross Total: 350,42\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $4 502,56\nTax / VAT: $ 450,26\nGross Total Due: $4952,82\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "67856369",
      "date": "05/27/2020",
      "total_amount": "$4952,82",
      "subtotal": "$4 502,56",
      "tax_amount": "$ 450,26",
      "seller": "Pierce PLC 3454 Mcbride Ramp Apt. 312 New Judy, WI 36022",
      "client": "Cochran-Alvarez 488 Kenneth Mission Port Caroltown, NY 43776",
      "iban": "GB68KEDC47196257123820",
      "items": [
        {
          "description": "24 Inches Round Marble Coffee Table Top Inlay Sofa Table with Geometrical Design",
          "quantity": "4,00",
          "unit_price": "446,25",
          "total_price": "1785,00",
          "vat": "10%",
          "gross_worth": "1963,50"
        },
        {
          "description": "30\"x30\" Marble Black Top Table Semi Precious Bird Art Black Friday Gift D\u00e9cor",
          "quantity": "1,00",
          "unit_price": "2399,00",
          "total_price": "2399,00",
          "vat": "10%",
          "gross_worth": "2 638,90"
        },
        {
          "description": "2 Industrial Live edge Legs 16\" Tall Cast Aluminum Cast Iron Coffee Table Bench",
          "quantity": "2,00",
          "unit_price": "159,28",
          "total_price": "318,56",
          "vat": "10%",
          "gross_worth": "350,42"
        }
      ],
      "seller_tax_id": "959-99-4796",
      "client_tax_id": "961-72-7276",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-da583d/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-da583d/image"
  },
  {
    "id": "inv-207214",
    "filename": "KatanaML_Invoice_0016.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 4,
    "relationships_count": 3,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #69934544 issued by Spence-Castro 547 Reynolds Trafficway Suite 938 Joshuabury, RI 79742 to Wolfe and Sons 45940 Larson Stravenue Suite 451 Port Michelle, WI 66283 for gross total $ 43,96 on 04/17/2014.",
    "text_content": "========================================================================\nINVOICE #69934544\nIssuance Date: 04/17/2014\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Spence-Castro 547 Reynolds Trafficway Suite 938 Joshuabury, RI 79742\nTax Identifier: 965-84-3671\nSettlement IBAN: GB22MTVU06245364076494\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Wolfe and Sons 45940 Larson Stravenue Suite 451 Port Michelle, WI 66283\nTax Identifier: 937-77-3183\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Hammered Brass Over Stainless steel Stemless Wine Glasses/ Candle Holders\n   Quantity: 4,00 | Unit Price: 9,99 | Net Worth: 39,96 | VAT: 10% | Gross Total: 43,96\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 39,96\nTax / VAT: $4,00\nGross Total Due: $ 43,96\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #69934544 Document & OCR",
        "text": "========================================================================\nINVOICE #69934544\nIssuance Date: 04/17/2014\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Spence-Castro 547 Reynolds Trafficway Suite 938 Joshuabury, RI 79742\nTax Identifier: 965-84-3671\nSettlement IBAN: GB22MTVU06245364076494\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Wolfe and Sons 45940 Larson Stravenue Suite 451 Port Michelle, WI 66283\nTax Identifier: 937-77-3183\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Hammered Brass Over Stainless steel Stemless Wine Glasses/ Candle Holders\n   Quantity: 4,00 | Unit Price: 9,99 | Net Worth: 39,96 | VAT: 10% | Gross Total: 43,96\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 39,96\nTax / VAT: $4,00\nGross Total Due: $ 43,96\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "69934544",
      "date": "04/17/2014",
      "total_amount": "$ 43,96",
      "subtotal": "$ 39,96",
      "tax_amount": "$4,00",
      "seller": "Spence-Castro 547 Reynolds Trafficway Suite 938 Joshuabury, RI 79742",
      "client": "Wolfe and Sons 45940 Larson Stravenue Suite 451 Port Michelle, WI 66283",
      "iban": "GB22MTVU06245364076494",
      "items": [
        {
          "description": "Hammered Brass Over Stainless steel Stemless Wine Glasses/ Candle Holders",
          "quantity": "4,00",
          "unit_price": "9,99",
          "total_price": "39,96",
          "vat": "10%",
          "gross_worth": "43,96"
        }
      ],
      "seller_tax_id": "965-84-3671",
      "client_tax_id": "937-77-3183",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-207214/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-207214/image"
  },
  {
    "id": "inv-0f4f39",
    "filename": "KatanaML_Invoice_0017.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 10,
    "relationships_count": 9,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #23152691 issued by Whitaker Ltd 57724 Hall Flats Apt. 570 Robertsonstad, KS 16218 to Stout-Miller 80207 Samantha Streets Suite 926 Thomaschester, DE 30356 for gross total $4783,70 on 08/01/2015.",
    "text_content": "========================================================================\nINVOICE #23152691\nIssuance Date: 08/01/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Whitaker Ltd 57724 Hall Flats Apt. 570 Robertsonstad, KS 16218\nTax Identifier: 931-73-0965\nSettlement IBAN: GB71ALPL38952311779111\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Stout-Miller 80207 Samantha Streets Suite 926 Thomaschester, DE 30356\nTax Identifier: 938-72-5881\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. personal computer\n   Quantity: 4,00 | Unit Price: 59,00 | Net Worth: 236,00 | VAT: 10% | Gross Total: 259,60\n2. HP All-in-One Computer 22\" Full-HD Display Intel 2.90GHz 4GB 1TB HD Win10 - TEAL\n   Quantity: 1,00 | Unit Price: 449,99 | Net Worth: 449,99 | VAT: 10% | Gross Total: 494,99\n3. Dell Optiplex SFF Desktop Computer Windows 10 4GB 160GB\n   Quantity: 4,00 | Unit Price: 89,99 | Net Worth: 359,96 | VAT: 10% | Gross Total: 395,96\n4. HP Elite 8300 Business USFF Desktop Computer i3 4GB 250GB Windows 10\n   Quantity: 2,00 | Unit Price: 84,99 | Net Worth: 169,98 | VAT: 10% | Gross Total: 186,98\n5. SAMA RGB Gaming PC Desktop Computer i5 3.7GHz Nvidia GTX 1060 16GB Windows 10\n   Quantity: 5,00 | Unit Price: 400,00 | Net Worth: 2 000,00 | VAT: 10% | Gross Total: 2 200,00\n6. Lenovo C20-00...all in one desktop computer ...with Wireless Mouse.....\n   Quantity: 3,00 | Unit Price: 277,64 | Net Worth: 832,92 | VAT: 10% | Gross Total: 916,21\n7. Dell Optiplex 7040 SFF PC Computer Intel Core i5-6500 3.2GHz 4GB RAM 500GB HDD\n   Quantity: 3,00 | Unit Price: 99,99 | Net Worth: 299,97 | VAT: 10% | Gross Total: 329,97\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $4348,82\nTax / VAT: $ 434,88\nGross Total Due: $4783,70\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #23152691 Document & OCR",
        "text": "========================================================================\nINVOICE #23152691\nIssuance Date: 08/01/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Whitaker Ltd 57724 Hall Flats Apt. 570 Robertsonstad, KS 16218\nTax Identifier: 931-73-0965\nSettlement IBAN: GB71ALPL38952311779111\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Stout-Miller 80207 Samantha Streets Suite 926 Thomaschester, DE 30356\nTax Identifier: 938-72-5881\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. personal computer\n   Quantity: 4,00 | Unit Price: 59,00 | Net Worth: 236,00 | VAT: 10% | Gross Total: 259,60\n2. HP All-in-One Computer 22\" Full-HD Display Intel 2.90GHz 4GB 1TB HD Win10 - TEAL\n   Quantity: 1,00 | Unit Price: 449,99 | Net Worth: 449,99 | VAT: 10% | Gross Total: 494,99\n3. Dell Optiplex SFF Desktop Computer Windows 10 4GB 160GB\n   Quantity: 4,00 | Unit Price: 89,99 | Net Worth: 359,96 | VAT: 10% | Gross Total: 395,96\n4. HP Elite 8300 Business USFF Desktop Computer i3 4GB 250GB Windows 10\n   Quantity: 2,00 | Unit Price: 84,99 | Net Worth: 169,98 | VAT: 10% | Gross Total: 186,98\n5. SAMA RGB Gaming PC Desktop Computer i5 3.7GHz Nvidia GTX 1060 16GB Windows 10\n   Quantity: 5,00 | Unit Price: 400,00 | Net Worth: 2 000,00 | VAT: 10% | Gross Total: 2 200,00\n6. Lenovo C20-00...all in one desktop computer ...with Wireless Mouse.....\n   Quantity: 3,00 | Unit Price: 277,64 | Net Worth: 832,92 | VAT: 10% | Gross Total: 916,21\n7. Dell Optiplex 7040 SFF PC Computer Intel Core i5-6500 3.2GHz 4GB RAM 500GB HDD\n   Quantity: 3,00 | Unit Price: 99,99 | Net Worth: 299,97 | VAT: 10% | Gross Total: 329,97\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $4348,82\nTax / VAT: $ 434,88\nGross Total Due: $4783,70\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "23152691",
      "date": "08/01/2015",
      "total_amount": "$4783,70",
      "subtotal": "$4348,82",
      "tax_amount": "$ 434,88",
      "seller": "Whitaker Ltd 57724 Hall Flats Apt. 570 Robertsonstad, KS 16218",
      "client": "Stout-Miller 80207 Samantha Streets Suite 926 Thomaschester, DE 30356",
      "iban": "GB71ALPL38952311779111",
      "items": [
        {
          "description": "personal computer",
          "quantity": "4,00",
          "unit_price": "59,00",
          "total_price": "236,00",
          "vat": "10%",
          "gross_worth": "259,60"
        },
        {
          "description": "HP All-in-One Computer 22\" Full-HD Display Intel 2.90GHz 4GB 1TB HD Win10 - TEAL",
          "quantity": "1,00",
          "unit_price": "449,99",
          "total_price": "449,99",
          "vat": "10%",
          "gross_worth": "494,99"
        },
        {
          "description": "Dell Optiplex SFF Desktop Computer Windows 10 4GB 160GB",
          "quantity": "4,00",
          "unit_price": "89,99",
          "total_price": "359,96",
          "vat": "10%",
          "gross_worth": "395,96"
        },
        {
          "description": "HP Elite 8300 Business USFF Desktop Computer i3 4GB 250GB Windows 10",
          "quantity": "2,00",
          "unit_price": "84,99",
          "total_price": "169,98",
          "vat": "10%",
          "gross_worth": "186,98"
        },
        {
          "description": "SAMA RGB Gaming PC Desktop Computer i5 3.7GHz Nvidia GTX 1060 16GB Windows 10",
          "quantity": "5,00",
          "unit_price": "400,00",
          "total_price": "2 000,00",
          "vat": "10%",
          "gross_worth": "2 200,00"
        },
        {
          "description": "Lenovo C20-00...all in one desktop computer ...with Wireless Mouse.....",
          "quantity": "3,00",
          "unit_price": "277,64",
          "total_price": "832,92",
          "vat": "10%",
          "gross_worth": "916,21"
        },
        {
          "description": "Dell Optiplex 7040 SFF PC Computer Intel Core i5-6500 3.2GHz 4GB RAM 500GB HDD",
          "quantity": "3,00",
          "unit_price": "99,99",
          "total_price": "299,97",
          "vat": "10%",
          "gross_worth": "329,97"
        }
      ],
      "seller_tax_id": "931-73-0965",
      "client_tax_id": "938-72-5881",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-0f4f39/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-0f4f39/image"
  },
  {
    "id": "inv-84f21a",
    "filename": "KatanaML_Invoice_0018.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 10,
    "relationships_count": 9,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #14878236 issued by Hernandez, Coleman and Alvarado 6080 Justin Fort Suite 152 Brownburgh, NC 87582 to Turner-Green 7245 Stephens Orchard Lake Mitchellview, MI 50388 for gross total $ 568,49 on 04/26/2015.",
    "text_content": "========================================================================\nINVOICE #14878236\nIssuance Date: 04/26/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Hernandez, Coleman and Alvarado 6080 Justin Fort Suite 152 Brownburgh, NC 87582\nTax Identifier: 988-79-4495\nSettlement IBAN: GB17VARZ09653710676977\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Turner-Green 7245 Stephens Orchard Lake Mitchellview, MI 50388\nTax Identifier: 950-70-5065\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Cabi 5610 Striped White Blue Launch Maxi Dress Womens Sz\n   Quantity: 3,00 | Unit Price: 48,99 | Net Worth: 146,97 | VAT: 10% | Gross Total: 161,67\n2. Boden black blue floral short sleeve dress size 6\n   Quantity: 2,00 | Unit Price: 36,99 | Net Worth: 73,98 | VAT: 10% | Gross Total: 81,38\n3. Ann Taylor LOFT 3/4 Knit Sleeve Dress Size 0\n   Quantity: 4,00 | Unit Price: 8,00 | Net Worth: 32,00 | VAT: 10% | Gross Total: 35,20\n4. Divided Black Asymmetrical Dress size 8 NWT\n   Quantity: 2,00 | Unit Price: 7,99 | Net Worth: 15,98 | VAT: 10% | Gross Total: 17,58\n5. Women Elegant Fashion O-Neck Knee Length Short Sleeve Retro Floral Print Dress\n   Quantity: 4,00 | Unit Price: 12,00 | Net Worth: 48,00 | VAT: 10% | Gross Total: 52,80\n6. Vintage 90s Sostanza Plus Size Dress 22W Floral Cottagecore\n   Quantity: 3,00 | Unit Price: 49,96 | Net Worth: 149,88 | VAT: 10% | Gross Total: 164,87\n7. Matilda Jane Women's Light Rising High Low Green Floral Dress Size L Pockets\n   Quantity: 1,00 | Unit Price: 50,00 | Net Worth: 50,00 | VAT: 10% | Gross Total: 55,00\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 516,81\nTax / VAT: $51,68\nGross Total Due: $ 568,49\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #14878236 Document & OCR",
        "text": "========================================================================\nINVOICE #14878236\nIssuance Date: 04/26/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Hernandez, Coleman and Alvarado 6080 Justin Fort Suite 152 Brownburgh, NC 87582\nTax Identifier: 988-79-4495\nSettlement IBAN: GB17VARZ09653710676977\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Turner-Green 7245 Stephens Orchard Lake Mitchellview, MI 50388\nTax Identifier: 950-70-5065\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Cabi 5610 Striped White Blue Launch Maxi Dress Womens Sz\n   Quantity: 3,00 | Unit Price: 48,99 | Net Worth: 146,97 | VAT: 10% | Gross Total: 161,67\n2. Boden black blue floral short sleeve dress size 6\n   Quantity: 2,00 | Unit Price: 36,99 | Net Worth: 73,98 | VAT: 10% | Gross Total: 81,38\n3. Ann Taylor LOFT 3/4 Knit Sleeve Dress Size 0\n   Quantity: 4,00 | Unit Price: 8,00 | Net Worth: 32,00 | VAT: 10% | Gross Total: 35,20\n4. Divided Black Asymmetrical Dress size 8 NWT\n   Quantity: 2,00 | Unit Price: 7,99 | Net Worth: 15,98 | VAT: 10% | Gross Total: 17,58\n5. Women Elegant Fashion O-Neck Knee Length Short Sleeve Retro Floral Print Dress\n   Quantity: 4,00 | Unit Price: 12,00 | Net Worth: 48,00 | VAT: 10% | Gross Total: 52,80\n6. Vintage 90s Sostanza Plus Size Dress 22W Floral Cottagecore\n   Quantity: 3,00 | Unit Price: 49,96 | Net Worth: 149,88 | VAT: 10% | Gross Total: 164,87\n7. Matilda Jane Women's Light Rising High Low Green Floral Dress Size L Pockets\n   Quantity: 1,00 | Unit Price: 50,00 | Net Worth: 50,00 | VAT: 10% | Gross Total: 55,00\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 516,81\nTax / VAT: $51,68\nGross Total Due: $ 568,49\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "14878236",
      "date": "04/26/2015",
      "total_amount": "$ 568,49",
      "subtotal": "$ 516,81",
      "tax_amount": "$51,68",
      "seller": "Hernandez, Coleman and Alvarado 6080 Justin Fort Suite 152 Brownburgh, NC 87582",
      "client": "Turner-Green 7245 Stephens Orchard Lake Mitchellview, MI 50388",
      "iban": "GB17VARZ09653710676977",
      "items": [
        {
          "description": "Cabi 5610 Striped White Blue Launch Maxi Dress Womens Sz",
          "quantity": "3,00",
          "unit_price": "48,99",
          "total_price": "146,97",
          "vat": "10%",
          "gross_worth": "161,67"
        },
        {
          "description": "Boden black blue floral short sleeve dress size 6",
          "quantity": "2,00",
          "unit_price": "36,99",
          "total_price": "73,98",
          "vat": "10%",
          "gross_worth": "81,38"
        },
        {
          "description": "Ann Taylor LOFT 3/4 Knit Sleeve Dress Size 0",
          "quantity": "4,00",
          "unit_price": "8,00",
          "total_price": "32,00",
          "vat": "10%",
          "gross_worth": "35,20"
        },
        {
          "description": "Divided Black Asymmetrical Dress size 8 NWT",
          "quantity": "2,00",
          "unit_price": "7,99",
          "total_price": "15,98",
          "vat": "10%",
          "gross_worth": "17,58"
        },
        {
          "description": "Women Elegant Fashion O-Neck Knee Length Short Sleeve Retro Floral Print Dress",
          "quantity": "4,00",
          "unit_price": "12,00",
          "total_price": "48,00",
          "vat": "10%",
          "gross_worth": "52,80"
        },
        {
          "description": "Vintage 90s Sostanza Plus Size Dress 22W Floral Cottagecore",
          "quantity": "3,00",
          "unit_price": "49,96",
          "total_price": "149,88",
          "vat": "10%",
          "gross_worth": "164,87"
        },
        {
          "description": "Matilda Jane Women's Light Rising High Low Green Floral Dress Size L Pockets",
          "quantity": "1,00",
          "unit_price": "50,00",
          "total_price": "50,00",
          "vat": "10%",
          "gross_worth": "55,00"
        }
      ],
      "seller_tax_id": "988-79-4495",
      "client_tax_id": "950-70-5065",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-84f21a/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-84f21a/image"
  },
  {
    "id": "inv-cd74fe",
    "filename": "KatanaML_Invoice_0019.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 6,
    "relationships_count": 5,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #84777898 issued by Byrd PLC 5954 Stewart Isle Suite 748 South Sarahshire, DC 77638 to Palmer LLC 321 Sarah Forge North Elizabeth, KY 13557 for gross total $ 314,62 on 06/02/2017.",
    "text_content": "========================================================================\nINVOICE #84777898\nIssuance Date: 06/02/2017\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Byrd PLC 5954 Stewart Isle Suite 748 South Sarahshire, DC 77638\nTax Identifier: 991-72-8541\nSettlement IBAN: GB55NFWY80188862802477\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Palmer LLC 321 Sarah Forge North Elizabeth, KY 13557\nTax Identifier: 947-73-4805\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Vintage Cobalt Blue Spiral Stemmed Wine Glasses Pair\n   Quantity: 1,00 | Unit Price: 30,00 | Net Worth: 30,00 | VAT: 10% | Gross Total: 33,00\n2. 1PC Tricycle Shape Red Wine Rack Cocktail Holder Wine Display Rack for Home Bar\n   Quantity: 5,00 | Unit Price: 32,13 | Net Worth: 160,65 | VAT: 10% | Gross Total: 176,72\n3. Wine Glass European Style Wine Glass Rack for Home Kitchen Bar Restaurant\n   Quantity: 3,00 | Unit Price: 31,79 | Net Worth: 95,37 | VAT: 10% | Gross Total: 104,91\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 286,02\nTax / VAT: $28,60\nGross Total Due: $ 314,62\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #84777898 Document & OCR",
        "text": "========================================================================\nINVOICE #84777898\nIssuance Date: 06/02/2017\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Byrd PLC 5954 Stewart Isle Suite 748 South Sarahshire, DC 77638\nTax Identifier: 991-72-8541\nSettlement IBAN: GB55NFWY80188862802477\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Palmer LLC 321 Sarah Forge North Elizabeth, KY 13557\nTax Identifier: 947-73-4805\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Vintage Cobalt Blue Spiral Stemmed Wine Glasses Pair\n   Quantity: 1,00 | Unit Price: 30,00 | Net Worth: 30,00 | VAT: 10% | Gross Total: 33,00\n2. 1PC Tricycle Shape Red Wine Rack Cocktail Holder Wine Display Rack for Home Bar\n   Quantity: 5,00 | Unit Price: 32,13 | Net Worth: 160,65 | VAT: 10% | Gross Total: 176,72\n3. Wine Glass European Style Wine Glass Rack for Home Kitchen Bar Restaurant\n   Quantity: 3,00 | Unit Price: 31,79 | Net Worth: 95,37 | VAT: 10% | Gross Total: 104,91\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 286,02\nTax / VAT: $28,60\nGross Total Due: $ 314,62\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "84777898",
      "date": "06/02/2017",
      "total_amount": "$ 314,62",
      "subtotal": "$ 286,02",
      "tax_amount": "$28,60",
      "seller": "Byrd PLC 5954 Stewart Isle Suite 748 South Sarahshire, DC 77638",
      "client": "Palmer LLC 321 Sarah Forge North Elizabeth, KY 13557",
      "iban": "GB55NFWY80188862802477",
      "items": [
        {
          "description": "Vintage Cobalt Blue Spiral Stemmed Wine Glasses Pair",
          "quantity": "1,00",
          "unit_price": "30,00",
          "total_price": "30,00",
          "vat": "10%",
          "gross_worth": "33,00"
        },
        {
          "description": "1PC Tricycle Shape Red Wine Rack Cocktail Holder Wine Display Rack for Home Bar",
          "quantity": "5,00",
          "unit_price": "32,13",
          "total_price": "160,65",
          "vat": "10%",
          "gross_worth": "176,72"
        },
        {
          "description": "Wine Glass European Style Wine Glass Rack for Home Kitchen Bar Restaurant",
          "quantity": "3,00",
          "unit_price": "31,79",
          "total_price": "95,37",
          "vat": "10%",
          "gross_worth": "104,91"
        }
      ],
      "seller_tax_id": "991-72-8541",
      "client_tax_id": "947-73-4805",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-cd74fe/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-cd74fe/image"
  },
  {
    "id": "inv-e56ac0",
    "filename": "KatanaML_Invoice_0020.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 5,
    "relationships_count": 4,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #57338979 issued by Estrada and Sons 70379 Brooks Heights Apt. 110 Lake Megan, WI 84417 to Santana-Sherman 4195 Sutton Plaza Suite 750 Christopherfort, MS 70499 for gross total $15089,59 on 05/10/2021.",
    "text_content": "========================================================================\nINVOICE #57338979\nIssuance Date: 05/10/2021\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Estrada and Sons 70379 Brooks Heights Apt. 110 Lake Megan, WI 84417\nTax Identifier: 926-74-0874\nSettlement IBAN: GB90ALYU92362362601688809\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Santana-Sherman 4195 Sutton Plaza Suite 750 Christopherfort, MS 70499\nTax Identifier: 939-81-4695\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 3'x2' Black Marvels Top Dining Table Italian Handmade Floral Art Christmas Gift\n   Quantity: 5,00 | Unit Price: 2585,00 | Net Worth: 12 925,00 | VAT:  | Gross Total: 14 217,50\n2. 12\" Marble Coffee Table Top Multi Stone Peacock & Floral Inlay Home Decors W364\n   Quantity: 3,00 | Unit Price: 264,27 | Net Worth: 792,81 | VAT:  | Gross Total: 872,09\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $13 717,81\nTax / VAT: $1371,78\nGross Total Due: $15089,59\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #57338979 Document & OCR",
        "text": "========================================================================\nINVOICE #57338979\nIssuance Date: 05/10/2021\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Estrada and Sons 70379 Brooks Heights Apt. 110 Lake Megan, WI 84417\nTax Identifier: 926-74-0874\nSettlement IBAN: GB90ALYU92362362601688809\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Santana-Sherman 4195 Sutton Plaza Suite 750 Christopherfort, MS 70499\nTax Identifier: 939-81-4695\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 3'x2' Black Marvels Top Dining Table Italian Handmade Floral Art Christmas Gift\n   Quantity: 5,00 | Unit Price: 2585,00 | Net Worth: 12 925,00 | VAT:  | Gross Total: 14 217,50\n2. 12\" Marble Coffee Table Top Multi Stone Peacock & Floral Inlay Home Decors W364\n   Quantity: 3,00 | Unit Price: 264,27 | Net Worth: 792,81 | VAT:  | Gross Total: 872,09\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $13 717,81\nTax / VAT: $1371,78\nGross Total Due: $15089,59\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "57338979",
      "date": "05/10/2021",
      "total_amount": "$15089,59",
      "subtotal": "$13 717,81",
      "tax_amount": "$1371,78",
      "seller": "Estrada and Sons 70379 Brooks Heights Apt. 110 Lake Megan, WI 84417",
      "client": "Santana-Sherman 4195 Sutton Plaza Suite 750 Christopherfort, MS 70499",
      "iban": "GB90ALYU92362362601688809",
      "items": [
        {
          "description": "3'x2' Black Marvels Top Dining Table Italian Handmade Floral Art Christmas Gift",
          "quantity": "5,00",
          "unit_price": "2585,00",
          "total_price": "12 925,00",
          "vat": "",
          "gross_worth": "14 217,50"
        },
        {
          "description": "12\" Marble Coffee Table Top Multi Stone Peacock & Floral Inlay Home Decors W364",
          "quantity": "3,00",
          "unit_price": "264,27",
          "total_price": "792,81",
          "vat": "",
          "gross_worth": "872,09"
        }
      ],
      "seller_tax_id": "926-74-0874",
      "client_tax_id": "939-81-4695",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-e56ac0/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-e56ac0/image"
  },
  {
    "id": "inv-2d3d97",
    "filename": "KatanaML_Invoice_0036.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #56513760 issued by Lyons-Murphy 178 Mann Shoals Apt. 732 West Johnview, WI 44188 to Lawrence LLC 2959 Marquez Junction Suite 826 Michaelchester, CA 10095 for gross total $7110,40 on 10/25/2011.",
    "text_content": "========================================================================\nINVOICE #56513760\nIssuance Date: 10/25/2011\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Lyons-Murphy 178 Mann Shoals Apt. 732 West Johnview, WI 44188\nTax Identifier: 975-78-1218\nSettlement IBAN: GB22WVAZ26078980173503\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Lawrence LLC 2959 Marquez Junction Suite 826 Michaelchester, CA 10095\nTax Identifier: 987-70-6179\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Nexlink DG41RQ Desktop Computer Windows 10 w/DVD/CD Rom Drive\n   Quantity: 2,00 | Unit Price: 11,95 | Net Worth: 23,90 | VAT: 10% | Gross Total: 26,29\n2. Gaming PC Desktop Computer HDMI RGB Intel i7 RTX 2060, HDD+SSD, Windows 10, Wifi\n   Quantity: 5,00 | Unit Price: 999,50 | Net Worth: 4997,50 | VAT: 10% | Gross Total: 5497,25\n3. Lenovo i5 I 32GB 12TB ISSD Windows 10 Pro Desktop Computer PC WiFi Bluetooth\n   Quantity: 1,00 | Unit Price: 139,00 | Net Worth: 139,00 | VAT: 10% | Gross Total: 152,90\n4. Gaming PC Desktop Computer RGB Intel i7, RTX 2060, 16GB RAM, 240GB SSD, 2TB HDD\n   Quantity: 1,00 | Unit Price: 903,80 | Net Worth: 903,80 | VAT: 10% | Gross Total: 994,18\n5. HP 8200 USFF Desktop Computer PC Core i5 4GB 500GB Windows 10 Pro DisplayPort\n   Quantity: 4,00 | Unit Price: 99,95 | Net Worth: 399,80 | VAT: 10% | Gross Total: 439,78\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $6464,00\nTax / VAT: $ 646,40\nGross Total Due: $7110,40\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #56513760 Document & OCR",
        "text": "========================================================================\nINVOICE #56513760\nIssuance Date: 10/25/2011\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Lyons-Murphy 178 Mann Shoals Apt. 732 West Johnview, WI 44188\nTax Identifier: 975-78-1218\nSettlement IBAN: GB22WVAZ26078980173503\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Lawrence LLC 2959 Marquez Junction Suite 826 Michaelchester, CA 10095\nTax Identifier: 987-70-6179\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Nexlink DG41RQ Desktop Computer Windows 10 w/DVD/CD Rom Drive\n   Quantity: 2,00 | Unit Price: 11,95 | Net Worth: 23,90 | VAT: 10% | Gross Total: 26,29\n2. Gaming PC Desktop Computer HDMI RGB Intel i7 RTX 2060, HDD+SSD, Windows 10, Wifi\n   Quantity: 5,00 | Unit Price: 999,50 | Net Worth: 4997,50 | VAT: 10% | Gross Total: 5497,25\n3. Lenovo i5 I 32GB 12TB ISSD Windows 10 Pro Desktop Computer PC WiFi Bluetooth\n   Quantity: 1,00 | Unit Price: 139,00 | Net Worth: 139,00 | VAT: 10% | Gross Total: 152,90\n4. Gaming PC Desktop Computer RGB Intel i7, RTX 2060, 16GB RAM, 240GB SSD, 2TB HDD\n   Quantity: 1,00 | Unit Price: 903,80 | Net Worth: 903,80 | VAT: 10% | Gross Total: 994,18\n5. HP 8200 USFF Desktop Computer PC Core i5 4GB 500GB Windows 10 Pro DisplayPort\n   Quantity: 4,00 | Unit Price: 99,95 | Net Worth: 399,80 | VAT: 10% | Gross Total: 439,78\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $6464,00\nTax / VAT: $ 646,40\nGross Total Due: $7110,40\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "56513760",
      "date": "10/25/2011",
      "total_amount": "$7110,40",
      "subtotal": "$6464,00",
      "tax_amount": "$ 646,40",
      "seller": "Lyons-Murphy 178 Mann Shoals Apt. 732 West Johnview, WI 44188",
      "client": "Lawrence LLC 2959 Marquez Junction Suite 826 Michaelchester, CA 10095",
      "iban": "GB22WVAZ26078980173503",
      "items": [
        {
          "description": "Nexlink DG41RQ Desktop Computer Windows 10 w/DVD/CD Rom Drive",
          "quantity": "2,00",
          "unit_price": "11,95",
          "total_price": "23,90",
          "vat": "10%",
          "gross_worth": "26,29"
        },
        {
          "description": "Gaming PC Desktop Computer HDMI RGB Intel i7 RTX 2060, HDD+SSD, Windows 10, Wifi",
          "quantity": "5,00",
          "unit_price": "999,50",
          "total_price": "4997,50",
          "vat": "10%",
          "gross_worth": "5497,25"
        },
        {
          "description": "Lenovo i5 I 32GB 12TB ISSD Windows 10 Pro Desktop Computer PC WiFi Bluetooth",
          "quantity": "1,00",
          "unit_price": "139,00",
          "total_price": "139,00",
          "vat": "10%",
          "gross_worth": "152,90"
        },
        {
          "description": "Gaming PC Desktop Computer RGB Intel i7, RTX 2060, 16GB RAM, 240GB SSD, 2TB HDD",
          "quantity": "1,00",
          "unit_price": "903,80",
          "total_price": "903,80",
          "vat": "10%",
          "gross_worth": "994,18"
        },
        {
          "description": "HP 8200 USFF Desktop Computer PC Core i5 4GB 500GB Windows 10 Pro DisplayPort",
          "quantity": "4,00",
          "unit_price": "99,95",
          "total_price": "399,80",
          "vat": "10%",
          "gross_worth": "439,78"
        }
      ],
      "seller_tax_id": "975-78-1218",
      "client_tax_id": "987-70-6179",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-2d3d97/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-2d3d97/image"
  },
  {
    "id": "inv-1a86e0",
    "filename": "KatanaML_Invoice_0037.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 7,
    "relationships_count": 6,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #38870308 issued by Dunn-Campbel. 36709 Santiago Viaduct Dianaland, MN 12512 to Ramirez, Donaldson and Lane 567 Ortiz Valley Suite 979 Kellyfort, GA 69454 for gross total $ 328,83 on 08/01/2019.",
    "text_content": "========================================================================\nINVOICE #38870308\nIssuance Date: 08/01/2019\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Dunn-Campbel. 36709 Santiago Viaduct Dianaland, MN 12512\nTax Identifier: 986-74-6578\nSettlement IBAN: GB37QZVP50159087754233\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Ramirez, Donaldson and Lane 567 Ortiz Valley Suite 979 Kellyfort, GA 69454\nTax Identifier: 948-74-8143\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Ol Red Wine Glasses Ball Mason Jar Fancy Rednecks Set of 2 New in Box\n   Quantity: 4,00 | Unit Price: 35,00 | Net Worth: 140,00 | VAT: 10% | Gross Total: 154,00\n2. 2 Cakebread Cellars Napa Valley Wine Glasses\n   Quantity: 1,00 | Unit Price: 29,95 | Net Worth: 29,95 | VAT: 10% | Gross Total: 32,95\n3. Vintage Wine Basket Holder - 3 Bottles\n   Quantity: 1,00 | Unit Price: 32,99 | Net Worth: 32,99 | VAT: 10% | Gross Total: 36,29\n4. Vintage Set of 3 Cobalt Blue Glass Wine Glasses / Water Goblets Barware Stemware\n   Quantity: 4,00 | Unit Price: 24,00 | Net Worth: 96,00 | VAT: 10% | Gross Total: 105,60\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 298,94\nTax / VAT: $29,89\nGross Total Due: $ 328,83\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #38870308 Document & OCR",
        "text": "========================================================================\nINVOICE #38870308\nIssuance Date: 08/01/2019\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Dunn-Campbel. 36709 Santiago Viaduct Dianaland, MN 12512\nTax Identifier: 986-74-6578\nSettlement IBAN: GB37QZVP50159087754233\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Ramirez, Donaldson and Lane 567 Ortiz Valley Suite 979 Kellyfort, GA 69454\nTax Identifier: 948-74-8143\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Ol Red Wine Glasses Ball Mason Jar Fancy Rednecks Set of 2 New in Box\n   Quantity: 4,00 | Unit Price: 35,00 | Net Worth: 140,00 | VAT: 10% | Gross Total: 154,00\n2. 2 Cakebread Cellars Napa Valley Wine Glasses\n   Quantity: 1,00 | Unit Price: 29,95 | Net Worth: 29,95 | VAT: 10% | Gross Total: 32,95\n3. Vintage Wine Basket Holder - 3 Bottles\n   Quantity: 1,00 | Unit Price: 32,99 | Net Worth: 32,99 | VAT: 10% | Gross Total: 36,29\n4. Vintage Set of 3 Cobalt Blue Glass Wine Glasses / Water Goblets Barware Stemware\n   Quantity: 4,00 | Unit Price: 24,00 | Net Worth: 96,00 | VAT: 10% | Gross Total: 105,60\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 298,94\nTax / VAT: $29,89\nGross Total Due: $ 328,83\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "38870308",
      "date": "08/01/2019",
      "total_amount": "$ 328,83",
      "subtotal": "$ 298,94",
      "tax_amount": "$29,89",
      "seller": "Dunn-Campbel. 36709 Santiago Viaduct Dianaland, MN 12512",
      "client": "Ramirez, Donaldson and Lane 567 Ortiz Valley Suite 979 Kellyfort, GA 69454",
      "iban": "GB37QZVP50159087754233",
      "items": [
        {
          "description": "Ol Red Wine Glasses Ball Mason Jar Fancy Rednecks Set of 2 New in Box",
          "quantity": "4,00",
          "unit_price": "35,00",
          "total_price": "140,00",
          "vat": "10%",
          "gross_worth": "154,00"
        },
        {
          "description": "2 Cakebread Cellars Napa Valley Wine Glasses",
          "quantity": "1,00",
          "unit_price": "29,95",
          "total_price": "29,95",
          "vat": "10%",
          "gross_worth": "32,95"
        },
        {
          "description": "Vintage Wine Basket Holder - 3 Bottles",
          "quantity": "1,00",
          "unit_price": "32,99",
          "total_price": "32,99",
          "vat": "10%",
          "gross_worth": "36,29"
        },
        {
          "description": "Vintage Set of 3 Cobalt Blue Glass Wine Glasses / Water Goblets Barware Stemware",
          "quantity": "4,00",
          "unit_price": "24,00",
          "total_price": "96,00",
          "vat": "10%",
          "gross_worth": "105,60"
        }
      ],
      "seller_tax_id": "986-74-6578",
      "client_tax_id": "948-74-8143",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-1a86e0/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-1a86e0/image"
  },
  {
    "id": "inv-6f9438",
    "filename": "KatanaML_Invoice_0038.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 9,
    "relationships_count": 8,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #37999492 issued by Smith Ltd 783 Harmon Mews New Andrew, MN 96499 to Jones, Miller and Yoder 97586 Alvarado Common Apt. 920 West Tracichester, MD 67308 for gross total $4949,18 on 10/22/2017.",
    "text_content": "========================================================================\nINVOICE #37999492\nIssuance Date: 10/22/2017\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Smith Ltd 783 Harmon Mews New Andrew, MN 96499\nTax Identifier: 953-76-7010\nSettlement IBAN: GB135MWG74801940420584\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Jones, Miller and Yoder 97586 Alvarado Common Apt. 920 West Tracichester, MD 67308\nTax Identifier: 977-76-8087\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. HP Computer 8300 Elite USDT PC i3-3220 3.3GHz 4GB Wins 7Home COA\n   Quantity: 4,00 | Unit Price: 55,00 | Net Worth: 220,00 | VAT: 10% | Gross Total: 242,00\n2. Dell Optiplex Desktop Computer PC Quad Core i5 16GB 1TB HD Wifi Windows 10 Pro\n   Quantity: 3,00 | Unit Price: 169,95 | Net Worth: 509,85 | VAT: 10% | Gross Total: 560,83\n3. HP All-in-One Computer 22\" Full-HD Display Intel 2.90GHz 4GB 1TB HD Win10 - TEAL\n   Quantity: 5,00 | Unit Price: 449,99 | Net Worth: 2249,95 | VAT: 10% | Gross Total: 2 474,95\n4. HP ProDesk G1 Desktop Computer Core i3 3.4GHz 8GB 500GB HD 19\" LCD Windows 10\n   Quantity: 4,00 | Unit Price: 119,95 | Net Worth: N/A | VAT: 10% | Gross Total: 527,78\n5. Dell Desktop Computer PC Core 158GB 500GB HD DVD Wifi 19\" LCD Windows 10 Pro\n   Quantity: 2,00 | Unit Price: 144,95 | Net Worth: 289,90 | VAT: 10% | Gross Total: 318,89\n6. Dell Desktop Computer Tower Quad Intel Core i5 8GB 1TB HD DVD Wifi Windows 10 PC\n   Quantity: 5,00 | Unit Price: 149,95 | Net Worth: 749,75 | VAT: 10% | Gross Total: 824,73\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $4499,25\nTax / VAT: $ 449,93\nGross Total Due: $4949,18\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #37999492 Document & OCR",
        "text": "========================================================================\nINVOICE #37999492\nIssuance Date: 10/22/2017\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Smith Ltd 783 Harmon Mews New Andrew, MN 96499\nTax Identifier: 953-76-7010\nSettlement IBAN: GB135MWG74801940420584\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Jones, Miller and Yoder 97586 Alvarado Common Apt. 920 West Tracichester, MD 67308\nTax Identifier: 977-76-8087\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. HP Computer 8300 Elite USDT PC i3-3220 3.3GHz 4GB Wins 7Home COA\n   Quantity: 4,00 | Unit Price: 55,00 | Net Worth: 220,00 | VAT: 10% | Gross Total: 242,00\n2. Dell Optiplex Desktop Computer PC Quad Core i5 16GB 1TB HD Wifi Windows 10 Pro\n   Quantity: 3,00 | Unit Price: 169,95 | Net Worth: 509,85 | VAT: 10% | Gross Total: 560,83\n3. HP All-in-One Computer 22\" Full-HD Display Intel 2.90GHz 4GB 1TB HD Win10 - TEAL\n   Quantity: 5,00 | Unit Price: 449,99 | Net Worth: 2249,95 | VAT: 10% | Gross Total: 2 474,95\n4. HP ProDesk G1 Desktop Computer Core i3 3.4GHz 8GB 500GB HD 19\" LCD Windows 10\n   Quantity: 4,00 | Unit Price: 119,95 | Net Worth: N/A | VAT: 10% | Gross Total: 527,78\n5. Dell Desktop Computer PC Core 158GB 500GB HD DVD Wifi 19\" LCD Windows 10 Pro\n   Quantity: 2,00 | Unit Price: 144,95 | Net Worth: 289,90 | VAT: 10% | Gross Total: 318,89\n6. Dell Desktop Computer Tower Quad Intel Core i5 8GB 1TB HD DVD Wifi Windows 10 PC\n   Quantity: 5,00 | Unit Price: 149,95 | Net Worth: 749,75 | VAT: 10% | Gross Total: 824,73\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $4499,25\nTax / VAT: $ 449,93\nGross Total Due: $4949,18\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "37999492",
      "date": "10/22/2017",
      "total_amount": "$4949,18",
      "subtotal": "$4499,25",
      "tax_amount": "$ 449,93",
      "seller": "Smith Ltd 783 Harmon Mews New Andrew, MN 96499",
      "client": "Jones, Miller and Yoder 97586 Alvarado Common Apt. 920 West Tracichester, MD 67308",
      "iban": "GB135MWG74801940420584",
      "items": [
        {
          "description": "HP Computer 8300 Elite USDT PC i3-3220 3.3GHz 4GB Wins 7Home COA",
          "quantity": "4,00",
          "unit_price": "55,00",
          "total_price": "220,00",
          "vat": "10%",
          "gross_worth": "242,00"
        },
        {
          "description": "Dell Optiplex Desktop Computer PC Quad Core i5 16GB 1TB HD Wifi Windows 10 Pro",
          "quantity": "3,00",
          "unit_price": "169,95",
          "total_price": "509,85",
          "vat": "10%",
          "gross_worth": "560,83"
        },
        {
          "description": "HP All-in-One Computer 22\" Full-HD Display Intel 2.90GHz 4GB 1TB HD Win10 - TEAL",
          "quantity": "5,00",
          "unit_price": "449,99",
          "total_price": "2249,95",
          "vat": "10%",
          "gross_worth": "2 474,95"
        },
        {
          "description": "HP ProDesk G1 Desktop Computer Core i3 3.4GHz 8GB 500GB HD 19\" LCD Windows 10",
          "quantity": "4,00",
          "unit_price": "119,95",
          "total_price": "N/A",
          "vat": "10%",
          "gross_worth": "527,78"
        },
        {
          "description": "Dell Desktop Computer PC Core 158GB 500GB HD DVD Wifi 19\" LCD Windows 10 Pro",
          "quantity": "2,00",
          "unit_price": "144,95",
          "total_price": "289,90",
          "vat": "10%",
          "gross_worth": "318,89"
        },
        {
          "description": "Dell Desktop Computer Tower Quad Intel Core i5 8GB 1TB HD DVD Wifi Windows 10 PC",
          "quantity": "5,00",
          "unit_price": "149,95",
          "total_price": "749,75",
          "vat": "10%",
          "gross_worth": "824,73"
        }
      ],
      "seller_tax_id": "953-76-7010",
      "client_tax_id": "977-76-8087",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-6f9438/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-6f9438/image"
  },
  {
    "id": "inv-482266",
    "filename": "KatanaML_Invoice_0039.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 10,
    "relationships_count": 9,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #75367021 issued by Martinez-Ramirez 358 Tiffany Prairie Jerryland, AZ 91504 to Lawrence, Stevens and Robinson Unit 4195 Box 3361 DPO AP 86918 for gross total $36651,71 on 11/12/2018.",
    "text_content": "========================================================================\nINVOICE #75367021\nIssuance Date: 11/12/2018\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Martinez-Ramirez 358 Tiffany Prairie Jerryland, AZ 91504\nTax Identifier: 937-84-3596\nSettlement IBAN: GB48JUXI42713843742192\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Lawrence, Stevens and Robinson Unit 4195 Box 3361 DPO AP 86918\nTax Identifier: 912-77-9229\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 6'x3' Marble Restaurant Dining Table Top Marquetry Inlay Occasional Decor H5017B\n   Quantity: 3,00 | Unit Price: 5138,07 | Net Worth: 15414,21 | VAT: 10% | Gross Total: 16 955,63\n2. Carnelian Stone Floral Pattern Dinette Table Top Marble Coffee Table 30 Inches\n   Quantity: 5,00 | Unit Price: 993,75 | Net Worth: 4968,75 | VAT: 10% | Gross Total: 5 465,63\n3. 15\"x15\" White Marble Chess Top Table Carnelian Inlay Art Black Friday Gift Deco\n   Quantity: 1,00 | Unit Price: 600,00 | Net Worth: 600,00 | VAT: 10% | Gross Total: 660,00\n4. 36 Inches Marble Dinning Table Top Inlay Kitchen Table with Blue Elephant Design\n   Quantity: 5,00 | Unit Price: 1515,00 | Net Worth: 7575,00 | VAT: 10% | Gross Total: 8 332,50\n5. 25 Inches Black Marble Center Table Top with Multi Stones Coffee Table for Home\n   Quantity: 4,00 | Unit Price: 731,25 | Net Worth: 2925,00 | VAT: 10% | Gross Total: 3 217,50\n6. 12\"White Marble Center Coffee Table Top Lapis Random Inlay Cafeteria Decor W294\n   Quantity: 1,00 | Unit Price: 248,78 | Net Worth: 248,78 | VAT: 10% | Gross Total: 273,66\n7. 27\"x27\" Black Marble Top Coffee Table Floral Inlay Art Black Friday Gift D\u00e9cor\n   Quantity: 1,00 | Unit Price: 1 588,00 | Net Worth: 1588,00 | VAT: 10% | Gross Total: 1 746,80\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $33319,74\nTax / VAT: $3331,97\nGross Total Due: $36651,71\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #75367021 Document & OCR",
        "text": "========================================================================\nINVOICE #75367021\nIssuance Date: 11/12/2018\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Martinez-Ramirez 358 Tiffany Prairie Jerryland, AZ 91504\nTax Identifier: 937-84-3596\nSettlement IBAN: GB48JUXI42713843742192\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Lawrence, Stevens and Robinson Unit 4195 Box 3361 DPO AP 86918\nTax Identifier: 912-77-9229\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 6'x3' Marble Restaurant Dining Table Top Marquetry Inlay Occasional Decor H5017B\n   Quantity: 3,00 | Unit Price: 5138,07 | Net Worth: 15414,21 | VAT: 10% | Gross Total: 16 955,63\n2. Carnelian Stone Floral Pattern Dinette Table Top Marble Coffee Table 30 Inches\n   Quantity: 5,00 | Unit Price: 993,75 | Net Worth: 4968,75 | VAT: 10% | Gross Total: 5 465,63\n3. 15\"x15\" White Marble Chess Top Table Carnelian Inlay Art Black Friday Gift Deco\n   Quantity: 1,00 | Unit Price: 600,00 | Net Worth: 600,00 | VAT: 10% | Gross Total: 660,00\n4. 36 Inches Marble Dinning Table Top Inlay Kitchen Table with Blue Elephant Design\n   Quantity: 5,00 | Unit Price: 1515,00 | Net Worth: 7575,00 | VAT: 10% | Gross Total: 8 332,50\n5. 25 Inches Black Marble Center Table Top with Multi Stones Coffee Table for Home\n   Quantity: 4,00 | Unit Price: 731,25 | Net Worth: 2925,00 | VAT: 10% | Gross Total: 3 217,50\n6. 12\"White Marble Center Coffee Table Top Lapis Random Inlay Cafeteria Decor W294\n   Quantity: 1,00 | Unit Price: 248,78 | Net Worth: 248,78 | VAT: 10% | Gross Total: 273,66\n7. 27\"x27\" Black Marble Top Coffee Table Floral Inlay Art Black Friday Gift D\u00e9cor\n   Quantity: 1,00 | Unit Price: 1 588,00 | Net Worth: 1588,00 | VAT: 10% | Gross Total: 1 746,80\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $33319,74\nTax / VAT: $3331,97\nGross Total Due: $36651,71\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "75367021",
      "date": "11/12/2018",
      "total_amount": "$36651,71",
      "subtotal": "$33319,74",
      "tax_amount": "$3331,97",
      "seller": "Martinez-Ramirez 358 Tiffany Prairie Jerryland, AZ 91504",
      "client": "Lawrence, Stevens and Robinson Unit 4195 Box 3361 DPO AP 86918",
      "iban": "GB48JUXI42713843742192",
      "items": [
        {
          "description": "6'x3' Marble Restaurant Dining Table Top Marquetry Inlay Occasional Decor H5017B",
          "quantity": "3,00",
          "unit_price": "5138,07",
          "total_price": "15414,21",
          "vat": "10%",
          "gross_worth": "16 955,63"
        },
        {
          "description": "Carnelian Stone Floral Pattern Dinette Table Top Marble Coffee Table 30 Inches",
          "quantity": "5,00",
          "unit_price": "993,75",
          "total_price": "4968,75",
          "vat": "10%",
          "gross_worth": "5 465,63"
        },
        {
          "description": "15\"x15\" White Marble Chess Top Table Carnelian Inlay Art Black Friday Gift Deco",
          "quantity": "1,00",
          "unit_price": "600,00",
          "total_price": "600,00",
          "vat": "10%",
          "gross_worth": "660,00"
        },
        {
          "description": "36 Inches Marble Dinning Table Top Inlay Kitchen Table with Blue Elephant Design",
          "quantity": "5,00",
          "unit_price": "1515,00",
          "total_price": "7575,00",
          "vat": "10%",
          "gross_worth": "8 332,50"
        },
        {
          "description": "25 Inches Black Marble Center Table Top with Multi Stones Coffee Table for Home",
          "quantity": "4,00",
          "unit_price": "731,25",
          "total_price": "2925,00",
          "vat": "10%",
          "gross_worth": "3 217,50"
        },
        {
          "description": "12\"White Marble Center Coffee Table Top Lapis Random Inlay Cafeteria Decor W294",
          "quantity": "1,00",
          "unit_price": "248,78",
          "total_price": "248,78",
          "vat": "10%",
          "gross_worth": "273,66"
        },
        {
          "description": "27\"x27\" Black Marble Top Coffee Table Floral Inlay Art Black Friday Gift D\u00e9cor",
          "quantity": "1,00",
          "unit_price": "1 588,00",
          "total_price": "1588,00",
          "vat": "10%",
          "gross_worth": "1 746,80"
        }
      ],
      "seller_tax_id": "937-84-3596",
      "client_tax_id": "912-77-9229",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-482266/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-482266/image"
  },
  {
    "id": "inv-4afe17",
    "filename": "KatanaML_Invoice_0040.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 10,
    "relationships_count": 9,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #76903393 issued by Young, Owens and Hall PSC 2231, Box 3989 APO AP 45024 to King-Wells 014 Julia Locks Johnbury, KY 64775 for gross total $5230,40 on 07/24/2012.",
    "text_content": "========================================================================\nINVOICE #76903393\nIssuance Date: 07/24/2012\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Young, Owens and Hall PSC 2231, Box 3989 APO AP 45024\nTax Identifier: 964-86-1473\nSettlement IBAN: GB75SYCE31934427988296\n\nBILLED RECIPIENT / CLIENT:\nOrganization: King-Wells 014 Julia Locks Johnbury, KY 64775\nTax Identifier: 993-82-3637\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Sony PlayStation 5 Digital Edition 825GB Video Game Console White\n   Quantity: 1,00 | Unit Price: 550,00 | Net Worth: 550,00 | VAT: 10% | Gross Total: 605,00\n2. Nintendo Switch Lite Yellow CONSOLE ONLY No Accessories or Charger [B1-1]\n   Quantity: 5,00 | Unit Price: 135,00 | Net Worth: 675,00 | VAT: 10% | Gross Total: 742,50\n3. SONY Playstation2 Console SCPH-39000 \" Aqua Color\"I TESTED 11180\n   Quantity: 1,00 | Unit Price: 60,00 | Net Worth: 60,00 | VAT: 10% | Gross Total: 66,00\n4. Nintendo 64 N64 Console Black Japan Tested Working NUSHA\n   Quantity: 3,00 | Unit Price: 49,99 | Net Worth: 149,97 | VAT: 10% | Gross Total: 164,97\n5. Sony PlayStation 5 Console - White Disc Version CONFIRMED PRE ORDER PS5\n   Quantity: 5,00 | Unit Price: 499,99 | Net Worth: 2 499,95 | VAT: 10% | Gross Total: 2 749,95\n6. Sega V Saturn Victor Console RG-JX1 Gray Tested Working\n   Quantity: 1,00 | Unit Price: 119,99 | Net Worth: 119,99 | VAT: 10% | Gross Total: 131,99\n7. Nintendo Gameboy Original Console Gray with Box Manual DMB-01 Japan Tested 67\n   Quantity: 5,00 | Unit Price: 140,00 | Net Worth: 700,00 | VAT: 10% | Gross Total: 770,00\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $4754,91\nTax / VAT: $ 475,49\nGross Total Due: $5230,40\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #76903393 Document & OCR",
        "text": "========================================================================\nINVOICE #76903393\nIssuance Date: 07/24/2012\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Young, Owens and Hall PSC 2231, Box 3989 APO AP 45024\nTax Identifier: 964-86-1473\nSettlement IBAN: GB75SYCE31934427988296\n\nBILLED RECIPIENT / CLIENT:\nOrganization: King-Wells 014 Julia Locks Johnbury, KY 64775\nTax Identifier: 993-82-3637\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Sony PlayStation 5 Digital Edition 825GB Video Game Console White\n   Quantity: 1,00 | Unit Price: 550,00 | Net Worth: 550,00 | VAT: 10% | Gross Total: 605,00\n2. Nintendo Switch Lite Yellow CONSOLE ONLY No Accessories or Charger [B1-1]\n   Quantity: 5,00 | Unit Price: 135,00 | Net Worth: 675,00 | VAT: 10% | Gross Total: 742,50\n3. SONY Playstation2 Console SCPH-39000 \" Aqua Color\"I TESTED 11180\n   Quantity: 1,00 | Unit Price: 60,00 | Net Worth: 60,00 | VAT: 10% | Gross Total: 66,00\n4. Nintendo 64 N64 Console Black Japan Tested Working NUSHA\n   Quantity: 3,00 | Unit Price: 49,99 | Net Worth: 149,97 | VAT: 10% | Gross Total: 164,97\n5. Sony PlayStation 5 Console - White Disc Version CONFIRMED PRE ORDER PS5\n   Quantity: 5,00 | Unit Price: 499,99 | Net Worth: 2 499,95 | VAT: 10% | Gross Total: 2 749,95\n6. Sega V Saturn Victor Console RG-JX1 Gray Tested Working\n   Quantity: 1,00 | Unit Price: 119,99 | Net Worth: 119,99 | VAT: 10% | Gross Total: 131,99\n7. Nintendo Gameboy Original Console Gray with Box Manual DMB-01 Japan Tested 67\n   Quantity: 5,00 | Unit Price: 140,00 | Net Worth: 700,00 | VAT: 10% | Gross Total: 770,00\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $4754,91\nTax / VAT: $ 475,49\nGross Total Due: $5230,40\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "76903393",
      "date": "07/24/2012",
      "total_amount": "$5230,40",
      "subtotal": "$4754,91",
      "tax_amount": "$ 475,49",
      "seller": "Young, Owens and Hall PSC 2231, Box 3989 APO AP 45024",
      "client": "King-Wells 014 Julia Locks Johnbury, KY 64775",
      "iban": "GB75SYCE31934427988296",
      "items": [
        {
          "description": "Sony PlayStation 5 Digital Edition 825GB Video Game Console White",
          "quantity": "1,00",
          "unit_price": "550,00",
          "total_price": "550,00",
          "vat": "10%",
          "gross_worth": "605,00"
        },
        {
          "description": "Nintendo Switch Lite Yellow CONSOLE ONLY No Accessories or Charger [B1-1]",
          "quantity": "5,00",
          "unit_price": "135,00",
          "total_price": "675,00",
          "vat": "10%",
          "gross_worth": "742,50"
        },
        {
          "description": "SONY Playstation2 Console SCPH-39000 \" Aqua Color\"I TESTED 11180",
          "quantity": "1,00",
          "unit_price": "60,00",
          "total_price": "60,00",
          "vat": "10%",
          "gross_worth": "66,00"
        },
        {
          "description": "Nintendo 64 N64 Console Black Japan Tested Working NUSHA",
          "quantity": "3,00",
          "unit_price": "49,99",
          "total_price": "149,97",
          "vat": "10%",
          "gross_worth": "164,97"
        },
        {
          "description": "Sony PlayStation 5 Console - White Disc Version CONFIRMED PRE ORDER PS5",
          "quantity": "5,00",
          "unit_price": "499,99",
          "total_price": "2 499,95",
          "vat": "10%",
          "gross_worth": "2 749,95"
        },
        {
          "description": "Sega V Saturn Victor Console RG-JX1 Gray Tested Working",
          "quantity": "1,00",
          "unit_price": "119,99",
          "total_price": "119,99",
          "vat": "10%",
          "gross_worth": "131,99"
        },
        {
          "description": "Nintendo Gameboy Original Console Gray with Box Manual DMB-01 Japan Tested 67",
          "quantity": "5,00",
          "unit_price": "140,00",
          "total_price": "700,00",
          "vat": "10%",
          "gross_worth": "770,00"
        }
      ],
      "seller_tax_id": "964-86-1473",
      "client_tax_id": "993-82-3637",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-4afe17/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-4afe17/image"
  },
  {
    "id": "inv-abf93a",
    "filename": "KatanaML_Invoice_0041.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 7,
    "relationships_count": 6,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #18531177 issued by Adkins, Campbell and Butler PSC 8125, Box 9401 APO AA 65326 to Bird, Bates and Johnston 970 Rowe Street Kristieton, CO 20645 for gross total $ 245,20 on 04/30/2015.",
    "text_content": "========================================================================\nINVOICE #18531177\nIssuance Date: 04/30/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Adkins, Campbell and Butler PSC 8125, Box 9401 APO AA 65326\nTax Identifier: 948-87-7876\nSettlement IBAN: GB66GZAK57253283036257\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Bird, Bates and Johnston 970 Rowe Street Kristieton, CO 20645\nTax Identifier: 910-92-9312\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Toddler Car Rain boots 5\n   Quantity: 3,00 | Unit Price: 9,00 | Net Worth: 27,00 | VAT: 10% | Gross Total: 29,70\n2. Skechers Kids' Snap Sprints Sneaker Size 4 Blue/Black 975461\n   Quantity: 4,00 | Unit Price: 29,99 | Net Worth: 119,96 | VAT: 10% | Gross Total: 131,96\n3. Skechers Blue Athletic Shoes Kids Size 2 EUC\n   Quantity: 3,00 | Unit Price: 11,99 | Net Worth: 35,97 | VAT: 10% | Gross Total: 39,57\n4. Joma Youth Boy Supercopa 201 Soccer Cleats 4.5 Negro Verde Multitaco Black Green\n   Quantity: 2,00 | Unit Price: 19,99 | Net Worth: 39,98 | VAT: 10% | Gross Total: 43,98\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $222,91\nTax / VAT: $22,29\nGross Total Due: $ 245,20\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #18531177 Document & OCR",
        "text": "========================================================================\nINVOICE #18531177\nIssuance Date: 04/30/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Adkins, Campbell and Butler PSC 8125, Box 9401 APO AA 65326\nTax Identifier: 948-87-7876\nSettlement IBAN: GB66GZAK57253283036257\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Bird, Bates and Johnston 970 Rowe Street Kristieton, CO 20645\nTax Identifier: 910-92-9312\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Toddler Car Rain boots 5\n   Quantity: 3,00 | Unit Price: 9,00 | Net Worth: 27,00 | VAT: 10% | Gross Total: 29,70\n2. Skechers Kids' Snap Sprints Sneaker Size 4 Blue/Black 975461\n   Quantity: 4,00 | Unit Price: 29,99 | Net Worth: 119,96 | VAT: 10% | Gross Total: 131,96\n3. Skechers Blue Athletic Shoes Kids Size 2 EUC\n   Quantity: 3,00 | Unit Price: 11,99 | Net Worth: 35,97 | VAT: 10% | Gross Total: 39,57\n4. Joma Youth Boy Supercopa 201 Soccer Cleats 4.5 Negro Verde Multitaco Black Green\n   Quantity: 2,00 | Unit Price: 19,99 | Net Worth: 39,98 | VAT: 10% | Gross Total: 43,98\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $222,91\nTax / VAT: $22,29\nGross Total Due: $ 245,20\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "18531177",
      "date": "04/30/2015",
      "total_amount": "$ 245,20",
      "subtotal": "$222,91",
      "tax_amount": "$22,29",
      "seller": "Adkins, Campbell and Butler PSC 8125, Box 9401 APO AA 65326",
      "client": "Bird, Bates and Johnston 970 Rowe Street Kristieton, CO 20645",
      "iban": "GB66GZAK57253283036257",
      "items": [
        {
          "description": "Toddler Car Rain boots 5",
          "quantity": "3,00",
          "unit_price": "9,00",
          "total_price": "27,00",
          "vat": "10%",
          "gross_worth": "29,70"
        },
        {
          "description": "Skechers Kids' Snap Sprints Sneaker Size 4 Blue/Black 975461",
          "quantity": "4,00",
          "unit_price": "29,99",
          "total_price": "119,96",
          "vat": "10%",
          "gross_worth": "131,96"
        },
        {
          "description": "Skechers Blue Athletic Shoes Kids Size 2 EUC",
          "quantity": "3,00",
          "unit_price": "11,99",
          "total_price": "35,97",
          "vat": "10%",
          "gross_worth": "39,57"
        },
        {
          "description": "Joma Youth Boy Supercopa 201 Soccer Cleats 4.5 Negro Verde Multitaco Black Green",
          "quantity": "2,00",
          "unit_price": "19,99",
          "total_price": "39,98",
          "vat": "10%",
          "gross_worth": "43,98"
        }
      ],
      "seller_tax_id": "948-87-7876",
      "client_tax_id": "910-92-9312",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-abf93a/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-abf93a/image"
  },
  {
    "id": "inv-cd9f79",
    "filename": "KatanaML_Invoice_0042.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 7,
    "relationships_count": 6,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #65095335 issued by Payne-Davis 2065 Joshua Via Lake Chadmouth, TX 15224 to Flores LLC 45998 Lance Shores Martinchester, NH 74633 for gross total $46910,41 on 02/15/2017.",
    "text_content": "========================================================================\nINVOICE #65095335\nIssuance Date: 02/15/2017\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Payne-Davis 2065 Joshua Via Lake Chadmouth, TX 15224\nTax Identifier: 963-77-0670\nSettlement IBAN: GB82ORRJ16785128958323\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Flores LLC 45998 Lance Shores Martinchester, NH 74633\nTax Identifier: 946-95-4678\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 15\"x15\" White Marble Chess Top Table Carnelian Inlay Art Black Friday Gift Deco\n   Quantity: 1,00 | Unit Price: 600,00 | Net Worth: 600,00 | VAT: 10% | Gross Total: 660,00\n2. Antique Vintage style hand carved table *Unique*\n   Quantity: 2,00 | Unit Price: 13 000,00 | Net Worth: 26 000,00 | VAT: 10% | Gross Total: 28 600,00\n3. 15\"x15\" White Decorative Coffee Table Top Lapis Lazuli Marquetery Patio D\u00e9cor\n   Quantity: 5,00 | Unit Price: 645,77 | Net Worth: 3228,85 | VAT: 10% | Gross Total: 3551,73\n4. 6'x3' White Marble Dining Table Top Multi Inlay Floral Elephant Art Decor H4952\n   Quantity: 2,00 | Unit Price: 6408,49 | Net Worth: 12 816,98 | VAT: 10% | Gross Total: 14 098,68\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $42 645,83\nTax / VAT: $4264,58\nGross Total Due: $46910,41\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #65095335 Document & OCR",
        "text": "========================================================================\nINVOICE #65095335\nIssuance Date: 02/15/2017\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Payne-Davis 2065 Joshua Via Lake Chadmouth, TX 15224\nTax Identifier: 963-77-0670\nSettlement IBAN: GB82ORRJ16785128958323\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Flores LLC 45998 Lance Shores Martinchester, NH 74633\nTax Identifier: 946-95-4678\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. 15\"x15\" White Marble Chess Top Table Carnelian Inlay Art Black Friday Gift Deco\n   Quantity: 1,00 | Unit Price: 600,00 | Net Worth: 600,00 | VAT: 10% | Gross Total: 660,00\n2. Antique Vintage style hand carved table *Unique*\n   Quantity: 2,00 | Unit Price: 13 000,00 | Net Worth: 26 000,00 | VAT: 10% | Gross Total: 28 600,00\n3. 15\"x15\" White Decorative Coffee Table Top Lapis Lazuli Marquetery Patio D\u00e9cor\n   Quantity: 5,00 | Unit Price: 645,77 | Net Worth: 3228,85 | VAT: 10% | Gross Total: 3551,73\n4. 6'x3' White Marble Dining Table Top Multi Inlay Floral Elephant Art Decor H4952\n   Quantity: 2,00 | Unit Price: 6408,49 | Net Worth: 12 816,98 | VAT: 10% | Gross Total: 14 098,68\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $42 645,83\nTax / VAT: $4264,58\nGross Total Due: $46910,41\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "65095335",
      "date": "02/15/2017",
      "total_amount": "$46910,41",
      "subtotal": "$42 645,83",
      "tax_amount": "$4264,58",
      "seller": "Payne-Davis 2065 Joshua Via Lake Chadmouth, TX 15224",
      "client": "Flores LLC 45998 Lance Shores Martinchester, NH 74633",
      "iban": "GB82ORRJ16785128958323",
      "items": [
        {
          "description": "15\"x15\" White Marble Chess Top Table Carnelian Inlay Art Black Friday Gift Deco",
          "quantity": "1,00",
          "unit_price": "600,00",
          "total_price": "600,00",
          "vat": "10%",
          "gross_worth": "660,00"
        },
        {
          "description": "Antique Vintage style hand carved table *Unique*",
          "quantity": "2,00",
          "unit_price": "13 000,00",
          "total_price": "26 000,00",
          "vat": "10%",
          "gross_worth": "28 600,00"
        },
        {
          "description": "15\"x15\" White Decorative Coffee Table Top Lapis Lazuli Marquetery Patio D\u00e9cor",
          "quantity": "5,00",
          "unit_price": "645,77",
          "total_price": "3228,85",
          "vat": "10%",
          "gross_worth": "3551,73"
        },
        {
          "description": "6'x3' White Marble Dining Table Top Multi Inlay Floral Elephant Art Decor H4952",
          "quantity": "2,00",
          "unit_price": "6408,49",
          "total_price": "12 816,98",
          "vat": "10%",
          "gross_worth": "14 098,68"
        }
      ],
      "seller_tax_id": "963-77-0670",
      "client_tax_id": "946-95-4678",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-cd9f79/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-cd9f79/image"
  },
  {
    "id": "inv-d266b7",
    "filename": "KatanaML_Invoice_0043.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 7,
    "relationships_count": 6,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #76658127 issued by Crawford-Byrd PSC 3342, Box 5976 APO AA 60940 to Sherman PLC 8359 Chapman Loop Torresside, MS 13114 for gross total 628,00 on 10/23/2011.",
    "text_content": "========================================================================\nINVOICE #76658127\nIssuance Date: 10/23/2011\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Crawford-Byrd PSC 3342, Box 5976 APO AA 60940\nTax Identifier: 922-97-5588\nSettlement IBAN: GB21ZEZG695359535709532307\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Sherman PLC 8359 Chapman Loop Torresside, MS 13114\nTax Identifier: 973-85-9820\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Women Black Dress Mori Girl Puff Sleeve Korean Casual Loose Peter Pan Collar\n   Quantity: 4,00 | Unit Price: 13,99 | Net Worth: 55,96 | VAT: 10% | Gross Total: 61,56\n2. BCBG Maxazria dress XS\n   Quantity: 4,00 | Unit Price: 20,00 | Net Worth: 80,00 | VAT: 10% | Gross Total: 88,00\n3. NWT J.Crew Silk Wedding Dress\n   Quantity: 1,00 | Unit Price: 395,00 | Net Worth: 395,00 | VAT: 10% | Gross Total: 434,50\n4. Divided Black Asymmetrical Dress -size 8 NWT\n   Quantity: 5,00 | Unit Price: 7,99 | Net Worth: 39,95 | VAT: 10% | Gross Total: 43,95\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $570,91\nTax / VAT: $57,09\nGross Total Due: 628,00\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #76658127 Document & OCR",
        "text": "========================================================================\nINVOICE #76658127\nIssuance Date: 10/23/2011\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Crawford-Byrd PSC 3342, Box 5976 APO AA 60940\nTax Identifier: 922-97-5588\nSettlement IBAN: GB21ZEZG695359535709532307\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Sherman PLC 8359 Chapman Loop Torresside, MS 13114\nTax Identifier: 973-85-9820\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Women Black Dress Mori Girl Puff Sleeve Korean Casual Loose Peter Pan Collar\n   Quantity: 4,00 | Unit Price: 13,99 | Net Worth: 55,96 | VAT: 10% | Gross Total: 61,56\n2. BCBG Maxazria dress XS\n   Quantity: 4,00 | Unit Price: 20,00 | Net Worth: 80,00 | VAT: 10% | Gross Total: 88,00\n3. NWT J.Crew Silk Wedding Dress\n   Quantity: 1,00 | Unit Price: 395,00 | Net Worth: 395,00 | VAT: 10% | Gross Total: 434,50\n4. Divided Black Asymmetrical Dress -size 8 NWT\n   Quantity: 5,00 | Unit Price: 7,99 | Net Worth: 39,95 | VAT: 10% | Gross Total: 43,95\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $570,91\nTax / VAT: $57,09\nGross Total Due: 628,00\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "76658127",
      "date": "10/23/2011",
      "total_amount": "628,00",
      "subtotal": "$570,91",
      "tax_amount": "$57,09",
      "seller": "Crawford-Byrd PSC 3342, Box 5976 APO AA 60940",
      "client": "Sherman PLC 8359 Chapman Loop Torresside, MS 13114",
      "iban": "GB21ZEZG695359535709532307",
      "items": [
        {
          "description": "Women Black Dress Mori Girl Puff Sleeve Korean Casual Loose Peter Pan Collar",
          "quantity": "4,00",
          "unit_price": "13,99",
          "total_price": "55,96",
          "vat": "10%",
          "gross_worth": "61,56"
        },
        {
          "description": "BCBG Maxazria dress XS",
          "quantity": "4,00",
          "unit_price": "20,00",
          "total_price": "80,00",
          "vat": "10%",
          "gross_worth": "88,00"
        },
        {
          "description": "NWT J.Crew Silk Wedding Dress",
          "quantity": "1,00",
          "unit_price": "395,00",
          "total_price": "395,00",
          "vat": "10%",
          "gross_worth": "434,50"
        },
        {
          "description": "Divided Black Asymmetrical Dress -size 8 NWT",
          "quantity": "5,00",
          "unit_price": "7,99",
          "total_price": "39,95",
          "vat": "10%",
          "gross_worth": "43,95"
        }
      ],
      "seller_tax_id": "922-97-5588",
      "client_tax_id": "973-85-9820",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-d266b7/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-d266b7/image"
  },
  {
    "id": "inv-2c9f5c",
    "filename": "KatanaML_Invoice_0044.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 10,
    "relationships_count": 9,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #64281058 issued by Zuniga, Short and Jensen 3742 Stephanie Haven Apt. 492 Port Davidfurt, NY 66413 to Wells Ltd 0691 Adam Brook South Brittany, WA 02993 for gross total $ 15 416,49 on 11/08/2019.",
    "text_content": "========================================================================\nINVOICE #64281058\nIssuance Date: 11/08/2019\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Zuniga, Short and Jensen 3742 Stephanie Haven Apt. 492 Port Davidfurt, NY 66413\nTax Identifier: 984-91-8764\nSettlement IBAN: GB67BNED14756248228264\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Wells Ltd 0691 Adam Brook South Brittany, WA 02993\nTax Identifier: 951-97-2583\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Gaming PC Desktop Computer HDMI RGB Intel i7 RTX 2060, HDD+SSD, Windows 10, Wifi\n   Quantity: 5,00 | Unit Price: 999,50 | Net Worth: 4997,50 | VAT: 10% | Gross Total: 5 497,25\n2. Ryzen Gaming Computer\n   Quantity: 4,00 | Unit Price: 752,00 | Net Worth: 3008,00 | VAT: 10% | Gross Total: 3 308,80\n3. Custom Built Windows 98 Retro Gaming Industrial PC Computer P2 B Montego II 5GB\n   Quantity: 1,00 | Unit Price: 409,99 | Net Worth: 409,99 | VAT: 10% | Gross Total: 450,99\n4. Dell Optiplex Desktop Computer 790 Core i7 8GB RAM 1TB HD DVD Windows 10 PC Wifi\n   Quantity: 5,00 | Unit Price: 159,95 | Net Worth: 799,75 | VAT: 10% | Gross Total: 879,73\n5. HP Windows 10 Pro Desktop Computer Intel QUAD CORE i5 Wifi, Keyboard & Mouse\n   Quantity: 2,00 | Unit Price: 169,95 | Net Worth: 339,90 | VAT: 10% | Gross Total: 373,89\n6. Dell Optiplex Desktop Computer PC Quad Core i5 16GB 1TB HD Wifi Windows 10 Pro\n   Quantity: 3,00 | Unit Price: 169,95 | Net Worth: 509,85 | VAT: 10% | Gross Total: 560,83\n7. Fast i7 RGB Gaming Desktop PC Computer VR-Ready WiFi AAA Fortnite GTAV PUBG IG3\n   Quantity: 5,00 | Unit Price: 790,00 | Net Worth: 3950,00 | VAT: 10% | Gross Total: 4 345,00\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 14 014,99\nTax / VAT: $1401,50\nGross Total Due: $ 15 416,49\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #64281058 Document & OCR",
        "text": "========================================================================\nINVOICE #64281058\nIssuance Date: 11/08/2019\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Zuniga, Short and Jensen 3742 Stephanie Haven Apt. 492 Port Davidfurt, NY 66413\nTax Identifier: 984-91-8764\nSettlement IBAN: GB67BNED14756248228264\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Wells Ltd 0691 Adam Brook South Brittany, WA 02993\nTax Identifier: 951-97-2583\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Gaming PC Desktop Computer HDMI RGB Intel i7 RTX 2060, HDD+SSD, Windows 10, Wifi\n   Quantity: 5,00 | Unit Price: 999,50 | Net Worth: 4997,50 | VAT: 10% | Gross Total: 5 497,25\n2. Ryzen Gaming Computer\n   Quantity: 4,00 | Unit Price: 752,00 | Net Worth: 3008,00 | VAT: 10% | Gross Total: 3 308,80\n3. Custom Built Windows 98 Retro Gaming Industrial PC Computer P2 B Montego II 5GB\n   Quantity: 1,00 | Unit Price: 409,99 | Net Worth: 409,99 | VAT: 10% | Gross Total: 450,99\n4. Dell Optiplex Desktop Computer 790 Core i7 8GB RAM 1TB HD DVD Windows 10 PC Wifi\n   Quantity: 5,00 | Unit Price: 159,95 | Net Worth: 799,75 | VAT: 10% | Gross Total: 879,73\n5. HP Windows 10 Pro Desktop Computer Intel QUAD CORE i5 Wifi, Keyboard & Mouse\n   Quantity: 2,00 | Unit Price: 169,95 | Net Worth: 339,90 | VAT: 10% | Gross Total: 373,89\n6. Dell Optiplex Desktop Computer PC Quad Core i5 16GB 1TB HD Wifi Windows 10 Pro\n   Quantity: 3,00 | Unit Price: 169,95 | Net Worth: 509,85 | VAT: 10% | Gross Total: 560,83\n7. Fast i7 RGB Gaming Desktop PC Computer VR-Ready WiFi AAA Fortnite GTAV PUBG IG3\n   Quantity: 5,00 | Unit Price: 790,00 | Net Worth: 3950,00 | VAT: 10% | Gross Total: 4 345,00\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 14 014,99\nTax / VAT: $1401,50\nGross Total Due: $ 15 416,49\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "64281058",
      "date": "11/08/2019",
      "total_amount": "$ 15 416,49",
      "subtotal": "$ 14 014,99",
      "tax_amount": "$1401,50",
      "seller": "Zuniga, Short and Jensen 3742 Stephanie Haven Apt. 492 Port Davidfurt, NY 66413",
      "client": "Wells Ltd 0691 Adam Brook South Brittany, WA 02993",
      "iban": "GB67BNED14756248228264",
      "items": [
        {
          "description": "Gaming PC Desktop Computer HDMI RGB Intel i7 RTX 2060, HDD+SSD, Windows 10, Wifi",
          "quantity": "5,00",
          "unit_price": "999,50",
          "total_price": "4997,50",
          "vat": "10%",
          "gross_worth": "5 497,25"
        },
        {
          "description": "Ryzen Gaming Computer",
          "quantity": "4,00",
          "unit_price": "752,00",
          "total_price": "3008,00",
          "vat": "10%",
          "gross_worth": "3 308,80"
        },
        {
          "description": "Custom Built Windows 98 Retro Gaming Industrial PC Computer P2 B Montego II 5GB",
          "quantity": "1,00",
          "unit_price": "409,99",
          "total_price": "409,99",
          "vat": "10%",
          "gross_worth": "450,99"
        },
        {
          "description": "Dell Optiplex Desktop Computer 790 Core i7 8GB RAM 1TB HD DVD Windows 10 PC Wifi",
          "quantity": "5,00",
          "unit_price": "159,95",
          "total_price": "799,75",
          "vat": "10%",
          "gross_worth": "879,73"
        },
        {
          "description": "HP Windows 10 Pro Desktop Computer Intel QUAD CORE i5 Wifi, Keyboard & Mouse",
          "quantity": "2,00",
          "unit_price": "169,95",
          "total_price": "339,90",
          "vat": "10%",
          "gross_worth": "373,89"
        },
        {
          "description": "Dell Optiplex Desktop Computer PC Quad Core i5 16GB 1TB HD Wifi Windows 10 Pro",
          "quantity": "3,00",
          "unit_price": "169,95",
          "total_price": "509,85",
          "vat": "10%",
          "gross_worth": "560,83"
        },
        {
          "description": "Fast i7 RGB Gaming Desktop PC Computer VR-Ready WiFi AAA Fortnite GTAV PUBG IG3",
          "quantity": "5,00",
          "unit_price": "790,00",
          "total_price": "3950,00",
          "vat": "10%",
          "gross_worth": "4 345,00"
        }
      ],
      "seller_tax_id": "984-91-8764",
      "client_tax_id": "951-97-2583",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-2c9f5c/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-2c9f5c/image"
  },
  {
    "id": "inv-aa4e0f",
    "filename": "KatanaML_Invoice_0045.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 6,
    "relationships_count": 5,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #64125453 issued by Soto and Sons 733 Walker Wells South Grace, AL 58131 to Campos PLC 021 Ramirez Springs Apt. 983 Bradleyville, IN 84303 for gross total $ 296,91 on 03/25/2013.",
    "text_content": "========================================================================\nINVOICE #64125453\nIssuance Date: 03/25/2013\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Soto and Sons 733 Walker Wells South Grace, AL 58131\nTax Identifier: 953-83-6829\nSettlement IBAN: GB58PNWL56187666639321\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Campos PLC 021 Ramirez Springs Apt. 983 Bradleyville, IN 84303\nTax Identifier: 942-98-6009\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. New Fully Automatic Red Wine Bottle Opener Electric Red Wine Opener Corkscrew\n   Quantity: 3,00 | Unit Price: 25,99 | Net Worth: 77,97 | VAT: 10% | Gross Total: 85,77\n2. NEW Wall Mounted Metal Relax Glass and Bottle Holder Wine Cork Storage 4 Rack\n   Quantity: 5,00 | Unit Price: 35,99 | Net Worth: 179,95 | VAT: 10% | Gross Total: 197,95\n3. Wine Glasses Goblets Pair Clear Glass\n   Quantity: 1,00 | Unit Price: 12,00 | Net Worth: 12,00 | VAT: 10% | Gross Total: 13,20\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 269,92\nTax / VAT: $26,99\nGross Total Due: $ 296,91\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #64125453 Document & OCR",
        "text": "========================================================================\nINVOICE #64125453\nIssuance Date: 03/25/2013\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Soto and Sons 733 Walker Wells South Grace, AL 58131\nTax Identifier: 953-83-6829\nSettlement IBAN: GB58PNWL56187666639321\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Campos PLC 021 Ramirez Springs Apt. 983 Bradleyville, IN 84303\nTax Identifier: 942-98-6009\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. New Fully Automatic Red Wine Bottle Opener Electric Red Wine Opener Corkscrew\n   Quantity: 3,00 | Unit Price: 25,99 | Net Worth: 77,97 | VAT: 10% | Gross Total: 85,77\n2. NEW Wall Mounted Metal Relax Glass and Bottle Holder Wine Cork Storage 4 Rack\n   Quantity: 5,00 | Unit Price: 35,99 | Net Worth: 179,95 | VAT: 10% | Gross Total: 197,95\n3. Wine Glasses Goblets Pair Clear Glass\n   Quantity: 1,00 | Unit Price: 12,00 | Net Worth: 12,00 | VAT: 10% | Gross Total: 13,20\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 269,92\nTax / VAT: $26,99\nGross Total Due: $ 296,91\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "64125453",
      "date": "03/25/2013",
      "total_amount": "$ 296,91",
      "subtotal": "$ 269,92",
      "tax_amount": "$26,99",
      "seller": "Soto and Sons 733 Walker Wells South Grace, AL 58131",
      "client": "Campos PLC 021 Ramirez Springs Apt. 983 Bradleyville, IN 84303",
      "iban": "GB58PNWL56187666639321",
      "items": [
        {
          "description": "New Fully Automatic Red Wine Bottle Opener Electric Red Wine Opener Corkscrew",
          "quantity": "3,00",
          "unit_price": "25,99",
          "total_price": "77,97",
          "vat": "10%",
          "gross_worth": "85,77"
        },
        {
          "description": "NEW Wall Mounted Metal Relax Glass and Bottle Holder Wine Cork Storage 4 Rack",
          "quantity": "5,00",
          "unit_price": "35,99",
          "total_price": "179,95",
          "vat": "10%",
          "gross_worth": "197,95"
        },
        {
          "description": "Wine Glasses Goblets Pair Clear Glass",
          "quantity": "1,00",
          "unit_price": "12,00",
          "total_price": "12,00",
          "vat": "10%",
          "gross_worth": "13,20"
        }
      ],
      "seller_tax_id": "953-83-6829",
      "client_tax_id": "942-98-6009",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-aa4e0f/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-aa4e0f/image"
  },
  {
    "id": "inv-9fda38",
    "filename": "KatanaML_Invoice_0046.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 4,
    "relationships_count": 3,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #84635791 issued by Jimenez, Cummings and Ross 5907 Amanda Hills Apt. 227 Rachelburgh, ME 69330 to Jones Ltd 915 Brian Prairie Suite 967 Norrischester, WY 77144 for gross total $ 351,96 on 04/17/2020.",
    "text_content": "========================================================================\nINVOICE #84635791\nIssuance Date: 04/17/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Jimenez, Cummings and Ross 5907 Amanda Hills Apt. 227 Rachelburgh, ME 69330\nTax Identifier: 929-71-2703\nSettlement IBAN: GB68BGUP70302879698237\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Jones Ltd 915 Brian Prairie Suite 967 Norrischester, WY 77144\nTax Identifier: 977-91-8574\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Sony PlayStation 2 Console Black (SCPH-39001) w/ 2 Controllers and 5 Games\n   Quantity: 4,00 | Unit Price: 79,99 | Net Worth: 319,96 | VAT: 10% | Gross Total: 351,96\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 319,96\nTax / VAT: $ 32,00\nGross Total Due: $ 351,96\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #84635791 Document & OCR",
        "text": "========================================================================\nINVOICE #84635791\nIssuance Date: 04/17/2020\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Jimenez, Cummings and Ross 5907 Amanda Hills Apt. 227 Rachelburgh, ME 69330\nTax Identifier: 929-71-2703\nSettlement IBAN: GB68BGUP70302879698237\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Jones Ltd 915 Brian Prairie Suite 967 Norrischester, WY 77144\nTax Identifier: 977-91-8574\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Sony PlayStation 2 Console Black (SCPH-39001) w/ 2 Controllers and 5 Games\n   Quantity: 4,00 | Unit Price: 79,99 | Net Worth: 319,96 | VAT: 10% | Gross Total: 351,96\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 319,96\nTax / VAT: $ 32,00\nGross Total Due: $ 351,96\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "84635791",
      "date": "04/17/2020",
      "total_amount": "$ 351,96",
      "subtotal": "$ 319,96",
      "tax_amount": "$ 32,00",
      "seller": "Jimenez, Cummings and Ross 5907 Amanda Hills Apt. 227 Rachelburgh, ME 69330",
      "client": "Jones Ltd 915 Brian Prairie Suite 967 Norrischester, WY 77144",
      "iban": "GB68BGUP70302879698237",
      "items": [
        {
          "description": "Sony PlayStation 2 Console Black (SCPH-39001) w/ 2 Controllers and 5 Games",
          "quantity": "4,00",
          "unit_price": "79,99",
          "total_price": "319,96",
          "vat": "10%",
          "gross_worth": "351,96"
        }
      ],
      "seller_tax_id": "929-71-2703",
      "client_tax_id": "977-91-8574",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-9fda38/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-9fda38/image"
  },
  {
    "id": "inv-b85544",
    "filename": "KatanaML_Invoice_0047.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 10,
    "relationships_count": 9,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #94404257 issued by Cruz PLC USNV Harris FPO AA 34966 to Sandoval-Phillips 23699 James Villages Suite 818 West Tamara, MS 58825 for gross total $ 138,90 on 07/03/2013.",
    "text_content": "========================================================================\nINVOICE #94404257\nIssuance Date: 07/03/2013\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Cruz PLC USNV Harris FPO AA 34966\nTax Identifier: 964-99-8203\nSettlement IBAN: GB31XOVK34958853133204\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Sandoval-Phillips 23699 James Villages Suite 818 West Tamara, MS 58825\nTax Identifier: 976-94-5245\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. B0028NA06C Shoeless Joe\n   Quantity: 5,00 | Unit Price: 3,49 | Net Worth: 17,45 | VAT: 10% | Gross Total: 19,20\n2. The Fifty Greatest Conspiracies of All Time History s Biggest Myster\n   Quantity: 3,00 | Unit Price: 4,49 | Net Worth: 13,47 | VAT: 10% | Gross Total: 14,82\n3. Story of a Soul: The Autobiography of St. Therese of Lisieux\n   Quantity: 5,00 | Unit Price: 9,35 | Net Worth: 46,75 | VAT: 10% | Gross Total: 51,42\n4. The Complete Idiots Guide to Trouble-Free Home Re\n   Quantity: 4,00 | Unit Price: 4,49 | Net Worth: 17,96 | VAT: 10% | Gross Total: 19,76\n5. Rebecca to the Rescue (American Girl (Quality))\n   Quantity: 2,00 | Unit Price: 4,89 | Net Worth: 9,78 | VAT: 10% | Gross Total: 10,76\n6. Tales from the Buffalo Bills\n   Quantity: 1,00 | Unit Price: 5,50 | Net Worth: 5,50 | VAT: 10% | Gross Total: 6,05\n7. Vietnam, The Decisive Battles\n   Quantity: 2,00 | Unit Price: 7,68 | Net Worth: 15,36 | VAT: 10% | Gross Total: 16,90\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 126,27\nTax / VAT: $ 12,63\nGross Total Due: $ 138,90\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #94404257 Document & OCR",
        "text": "========================================================================\nINVOICE #94404257\nIssuance Date: 07/03/2013\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Cruz PLC USNV Harris FPO AA 34966\nTax Identifier: 964-99-8203\nSettlement IBAN: GB31XOVK34958853133204\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Sandoval-Phillips 23699 James Villages Suite 818 West Tamara, MS 58825\nTax Identifier: 976-94-5245\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. B0028NA06C Shoeless Joe\n   Quantity: 5,00 | Unit Price: 3,49 | Net Worth: 17,45 | VAT: 10% | Gross Total: 19,20\n2. The Fifty Greatest Conspiracies of All Time History s Biggest Myster\n   Quantity: 3,00 | Unit Price: 4,49 | Net Worth: 13,47 | VAT: 10% | Gross Total: 14,82\n3. Story of a Soul: The Autobiography of St. Therese of Lisieux\n   Quantity: 5,00 | Unit Price: 9,35 | Net Worth: 46,75 | VAT: 10% | Gross Total: 51,42\n4. The Complete Idiots Guide to Trouble-Free Home Re\n   Quantity: 4,00 | Unit Price: 4,49 | Net Worth: 17,96 | VAT: 10% | Gross Total: 19,76\n5. Rebecca to the Rescue (American Girl (Quality))\n   Quantity: 2,00 | Unit Price: 4,89 | Net Worth: 9,78 | VAT: 10% | Gross Total: 10,76\n6. Tales from the Buffalo Bills\n   Quantity: 1,00 | Unit Price: 5,50 | Net Worth: 5,50 | VAT: 10% | Gross Total: 6,05\n7. Vietnam, The Decisive Battles\n   Quantity: 2,00 | Unit Price: 7,68 | Net Worth: 15,36 | VAT: 10% | Gross Total: 16,90\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $ 126,27\nTax / VAT: $ 12,63\nGross Total Due: $ 138,90\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "94404257",
      "date": "07/03/2013",
      "total_amount": "$ 138,90",
      "subtotal": "$ 126,27",
      "tax_amount": "$ 12,63",
      "seller": "Cruz PLC USNV Harris FPO AA 34966",
      "client": "Sandoval-Phillips 23699 James Villages Suite 818 West Tamara, MS 58825",
      "iban": "GB31XOVK34958853133204",
      "items": [
        {
          "description": "B0028NA06C Shoeless Joe",
          "quantity": "5,00",
          "unit_price": "3,49",
          "total_price": "17,45",
          "vat": "10%",
          "gross_worth": "19,20"
        },
        {
          "description": "The Fifty Greatest Conspiracies of All Time History s Biggest Myster",
          "quantity": "3,00",
          "unit_price": "4,49",
          "total_price": "13,47",
          "vat": "10%",
          "gross_worth": "14,82"
        },
        {
          "description": "Story of a Soul: The Autobiography of St. Therese of Lisieux",
          "quantity": "5,00",
          "unit_price": "9,35",
          "total_price": "46,75",
          "vat": "10%",
          "gross_worth": "51,42"
        },
        {
          "description": "The Complete Idiots Guide to Trouble-Free Home Re",
          "quantity": "4,00",
          "unit_price": "4,49",
          "total_price": "17,96",
          "vat": "10%",
          "gross_worth": "19,76"
        },
        {
          "description": "Rebecca to the Rescue (American Girl (Quality))",
          "quantity": "2,00",
          "unit_price": "4,89",
          "total_price": "9,78",
          "vat": "10%",
          "gross_worth": "10,76"
        },
        {
          "description": "Tales from the Buffalo Bills",
          "quantity": "1,00",
          "unit_price": "5,50",
          "total_price": "5,50",
          "vat": "10%",
          "gross_worth": "6,05"
        },
        {
          "description": "Vietnam, The Decisive Battles",
          "quantity": "2,00",
          "unit_price": "7,68",
          "total_price": "15,36",
          "vat": "10%",
          "gross_worth": "16,90"
        }
      ],
      "seller_tax_id": "964-99-8203",
      "client_tax_id": "976-94-5245",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-b85544/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-b85544/image"
  },
  {
    "id": "inv-7b2092",
    "filename": "KatanaML_Invoice_0048.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 10,
    "relationships_count": 9,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #49106170 issued by Jackson-johnson 9104 Alexis Mount Lawrencebury, AL 77392 to Huerta, Graham and Campbell 00065 Perry Path Suite 069 Lake Virginiaside, VA 24504 for gross total $8905,77 on 04/30/2013.",
    "text_content": "========================================================================\nINVOICE #49106170\nIssuance Date: 04/30/2013\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Jackson-johnson 9104 Alexis Mount Lawrencebury, AL 77392\nTax Identifier: 953-98-3229\nSettlement IBAN: GB69VHQ531668424046807\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Huerta, Graham and Campbell 00065 Perry Path Suite 069 Lake Virginiaside, VA 24504\nTax Identifier: 961-85-5553\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. HP Z420 Workstation Desktop Computer PC Intel Xeon 2.8GHZ 8GB 1TB Win10 Pro\n   Quantity: 5,00 | Unit Price: 199,95 | Net Worth: 999,75 | VAT: 10% | Gross Total: 1099,73\n2. CLEARANCE! Fast Dell Desktop Computer PC DUAL CORE WINDOWS 10 4/8/16GB RAM\n   Quantity: 3,00 | Unit Price: 209,00 | Net Worth: 627,00 | VAT: 10% | Gross Total: 689,70\n3. W5 Pro Mini Pocket PC Windows 10 Computer Stick Intel Z8350 Quad Core\n   Quantity: 3,00 | Unit Price: 119,00 | Net Worth: 357,00 | VAT: 10% | Gross Total: 392,70\n4. gaming pc desktop computer intel i5\n   Quantity: 4,00 | Unit Price: 850,00 | Net Worth: 3400,00 | VAT: 10% | Gross Total: 3 740,00\n5. Dell Desktop Computer PC Core i5 3.1GHz 8GB RAM 500GB HD Wifi DVD Windows 10\n   Quantity: 1,00 | Unit Price: 124,95 | Net Worth: 124,95 | VAT: 10% | Gross Total: 137,45\n6. computer\n   Quantity: 5,00 | Unit Price: 299,99 | Net Worth: 1499,95 | VAT: 10% | Gross Total: 1649,95\n7. Custom Built Gaming Computer\n   Quantity: 5,00 | Unit Price: 217,50 | Net Worth: 1087,50 | VAT: 10% | Gross Total: 1196,25\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $8096,15\nTax / VAT: $ 809,62\nGross Total Due: $8905,77\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #49106170 Document & OCR",
        "text": "========================================================================\nINVOICE #49106170\nIssuance Date: 04/30/2013\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Jackson-johnson 9104 Alexis Mount Lawrencebury, AL 77392\nTax Identifier: 953-98-3229\nSettlement IBAN: GB69VHQ531668424046807\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Huerta, Graham and Campbell 00065 Perry Path Suite 069 Lake Virginiaside, VA 24504\nTax Identifier: 961-85-5553\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. HP Z420 Workstation Desktop Computer PC Intel Xeon 2.8GHZ 8GB 1TB Win10 Pro\n   Quantity: 5,00 | Unit Price: 199,95 | Net Worth: 999,75 | VAT: 10% | Gross Total: 1099,73\n2. CLEARANCE! Fast Dell Desktop Computer PC DUAL CORE WINDOWS 10 4/8/16GB RAM\n   Quantity: 3,00 | Unit Price: 209,00 | Net Worth: 627,00 | VAT: 10% | Gross Total: 689,70\n3. W5 Pro Mini Pocket PC Windows 10 Computer Stick Intel Z8350 Quad Core\n   Quantity: 3,00 | Unit Price: 119,00 | Net Worth: 357,00 | VAT: 10% | Gross Total: 392,70\n4. gaming pc desktop computer intel i5\n   Quantity: 4,00 | Unit Price: 850,00 | Net Worth: 3400,00 | VAT: 10% | Gross Total: 3 740,00\n5. Dell Desktop Computer PC Core i5 3.1GHz 8GB RAM 500GB HD Wifi DVD Windows 10\n   Quantity: 1,00 | Unit Price: 124,95 | Net Worth: 124,95 | VAT: 10% | Gross Total: 137,45\n6. computer\n   Quantity: 5,00 | Unit Price: 299,99 | Net Worth: 1499,95 | VAT: 10% | Gross Total: 1649,95\n7. Custom Built Gaming Computer\n   Quantity: 5,00 | Unit Price: 217,50 | Net Worth: 1087,50 | VAT: 10% | Gross Total: 1196,25\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $8096,15\nTax / VAT: $ 809,62\nGross Total Due: $8905,77\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "49106170",
      "date": "04/30/2013",
      "total_amount": "$8905,77",
      "subtotal": "$8096,15",
      "tax_amount": "$ 809,62",
      "seller": "Jackson-johnson 9104 Alexis Mount Lawrencebury, AL 77392",
      "client": "Huerta, Graham and Campbell 00065 Perry Path Suite 069 Lake Virginiaside, VA 24504",
      "iban": "GB69VHQ531668424046807",
      "items": [
        {
          "description": "HP Z420 Workstation Desktop Computer PC Intel Xeon 2.8GHZ 8GB 1TB Win10 Pro",
          "quantity": "5,00",
          "unit_price": "199,95",
          "total_price": "999,75",
          "vat": "10%",
          "gross_worth": "1099,73"
        },
        {
          "description": "CLEARANCE! Fast Dell Desktop Computer PC DUAL CORE WINDOWS 10 4/8/16GB RAM",
          "quantity": "3,00",
          "unit_price": "209,00",
          "total_price": "627,00",
          "vat": "10%",
          "gross_worth": "689,70"
        },
        {
          "description": "W5 Pro Mini Pocket PC Windows 10 Computer Stick Intel Z8350 Quad Core",
          "quantity": "3,00",
          "unit_price": "119,00",
          "total_price": "357,00",
          "vat": "10%",
          "gross_worth": "392,70"
        },
        {
          "description": "gaming pc desktop computer intel i5",
          "quantity": "4,00",
          "unit_price": "850,00",
          "total_price": "3400,00",
          "vat": "10%",
          "gross_worth": "3 740,00"
        },
        {
          "description": "Dell Desktop Computer PC Core i5 3.1GHz 8GB RAM 500GB HD Wifi DVD Windows 10",
          "quantity": "1,00",
          "unit_price": "124,95",
          "total_price": "124,95",
          "vat": "10%",
          "gross_worth": "137,45"
        },
        {
          "description": "computer",
          "quantity": "5,00",
          "unit_price": "299,99",
          "total_price": "1499,95",
          "vat": "10%",
          "gross_worth": "1649,95"
        },
        {
          "description": "Custom Built Gaming Computer",
          "quantity": "5,00",
          "unit_price": "217,50",
          "total_price": "1087,50",
          "vat": "10%",
          "gross_worth": "1196,25"
        }
      ],
      "seller_tax_id": "953-98-3229",
      "client_tax_id": "961-85-5553",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-7b2092/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-7b2092/image"
  },
  {
    "id": "inv-f87077",
    "filename": "KatanaML_Invoice_0049.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 8,
    "relationships_count": 7,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #32131502 issued by Campbell, Mathis and Johnson 5501 Blankenship Brook Suite 458 Dennismouth, AL 87925 to Jimenez, Smith and Lee 5429 Stevenson Ways Suite 661 Port Rogerland, AZ 76661 for gross total $6640,07 on 02/26/2019.",
    "text_content": "========================================================================\nINVOICE #32131502\nIssuance Date: 02/26/2019\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Campbell, Mathis and Johnson 5501 Blankenship Brook Suite 458 Dennismouth, AL 87925\nTax Identifier: 909-79-0983\nSettlement IBAN: GB10SIZT52690986751126\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Jimenez, Smith and Lee 5429 Stevenson Ways Suite 661 Port Rogerland, AZ 76661\nTax Identifier: 958-90-4314\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. FAST Dell Optiplex Windows 10 Desktop Computer Tower C2D 4GB DVD WiFi 17\" LCD\n   Quantity: 1,00 | Unit Price: 124,95 | Net Worth: 124,95 | VAT: 10% | Gross Total: 137,45\n2. Gaming PC Computer RX 580 8GB Ryzen 5 2x8GB Ram\n   Quantity: 2,00 | Unit Price: 400,00 | Net Worth: 800,00 | VAT: 10% | Gross Total: 880,00\n3. AMD Quad Core Custom Built Gaming PC Computer Desktop 16GB 2TB Blue LED\n   Quantity: 4,00 | Unit Price: 509,99 | Net Worth: 2039,96 | VAT: 10% | Gross Total: 2243,96\n4. Gaming PC Desktop Computer i5 8GB 120GB SSD+1TB Win10 WIFI +H Keyboard\n   Quantity: 4,00 | Unit Price: 168,88 | Net Worth: 675,52 | VAT: 10% | Gross Total: 743,07\n5. HP ProDesk 600 G5 Mini Desktop Computer i5-9500T 8GB 256GB SSD W10 (new)\n   Quantity: 4,00 | Unit Price: 599,00 | Net Worth: 2396,00 | VAT: 10% | Gross Total: 2635,60\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $6036,43\nTax / VAT: $ 603,64\nGross Total Due: $6640,07\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #32131502 Document & OCR",
        "text": "========================================================================\nINVOICE #32131502\nIssuance Date: 02/26/2019\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Campbell, Mathis and Johnson 5501 Blankenship Brook Suite 458 Dennismouth, AL 87925\nTax Identifier: 909-79-0983\nSettlement IBAN: GB10SIZT52690986751126\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Jimenez, Smith and Lee 5429 Stevenson Ways Suite 661 Port Rogerland, AZ 76661\nTax Identifier: 958-90-4314\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. FAST Dell Optiplex Windows 10 Desktop Computer Tower C2D 4GB DVD WiFi 17\" LCD\n   Quantity: 1,00 | Unit Price: 124,95 | Net Worth: 124,95 | VAT: 10% | Gross Total: 137,45\n2. Gaming PC Computer RX 580 8GB Ryzen 5 2x8GB Ram\n   Quantity: 2,00 | Unit Price: 400,00 | Net Worth: 800,00 | VAT: 10% | Gross Total: 880,00\n3. AMD Quad Core Custom Built Gaming PC Computer Desktop 16GB 2TB Blue LED\n   Quantity: 4,00 | Unit Price: 509,99 | Net Worth: 2039,96 | VAT: 10% | Gross Total: 2243,96\n4. Gaming PC Desktop Computer i5 8GB 120GB SSD+1TB Win10 WIFI +H Keyboard\n   Quantity: 4,00 | Unit Price: 168,88 | Net Worth: 675,52 | VAT: 10% | Gross Total: 743,07\n5. HP ProDesk 600 G5 Mini Desktop Computer i5-9500T 8GB 256GB SSD W10 (new)\n   Quantity: 4,00 | Unit Price: 599,00 | Net Worth: 2396,00 | VAT: 10% | Gross Total: 2635,60\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $6036,43\nTax / VAT: $ 603,64\nGross Total Due: $6640,07\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "32131502",
      "date": "02/26/2019",
      "total_amount": "$6640,07",
      "subtotal": "$6036,43",
      "tax_amount": "$ 603,64",
      "seller": "Campbell, Mathis and Johnson 5501 Blankenship Brook Suite 458 Dennismouth, AL 87925",
      "client": "Jimenez, Smith and Lee 5429 Stevenson Ways Suite 661 Port Rogerland, AZ 76661",
      "iban": "GB10SIZT52690986751126",
      "items": [
        {
          "description": "FAST Dell Optiplex Windows 10 Desktop Computer Tower C2D 4GB DVD WiFi 17\" LCD",
          "quantity": "1,00",
          "unit_price": "124,95",
          "total_price": "124,95",
          "vat": "10%",
          "gross_worth": "137,45"
        },
        {
          "description": "Gaming PC Computer RX 580 8GB Ryzen 5 2x8GB Ram",
          "quantity": "2,00",
          "unit_price": "400,00",
          "total_price": "800,00",
          "vat": "10%",
          "gross_worth": "880,00"
        },
        {
          "description": "AMD Quad Core Custom Built Gaming PC Computer Desktop 16GB 2TB Blue LED",
          "quantity": "4,00",
          "unit_price": "509,99",
          "total_price": "2039,96",
          "vat": "10%",
          "gross_worth": "2243,96"
        },
        {
          "description": "Gaming PC Desktop Computer i5 8GB 120GB SSD+1TB Win10 WIFI +H Keyboard",
          "quantity": "4,00",
          "unit_price": "168,88",
          "total_price": "675,52",
          "vat": "10%",
          "gross_worth": "743,07"
        },
        {
          "description": "HP ProDesk 600 G5 Mini Desktop Computer i5-9500T 8GB 256GB SSD W10 (new)",
          "quantity": "4,00",
          "unit_price": "599,00",
          "total_price": "2396,00",
          "vat": "10%",
          "gross_worth": "2635,60"
        }
      ],
      "seller_tax_id": "909-79-0983",
      "client_tax_id": "958-90-4314",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-f87077/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-f87077/image"
  },
  {
    "id": "inv-9643a6",
    "filename": "KatanaML_Invoice_0050.png",
    "file_type": "PNG",
    "file_size": "240 KB",
    "uploaded_at": "Persisted in Neo4j",
    "status": "Completed",
    "pages_count": 1,
    "chunks_count": 1,
    "entities_count": 5,
    "relationships_count": 4,
    "facts_count": 3,
    "confidence_score": 0.99,
    "needs_review_count": 0,
    "summary": "Invoice #34528548 issued by Garcia, Stewart and Payne USCGC Frank FPO AE 30049 to Huerta Ltd 74501 Andrea Streets Suite 854 Kaitlyntown, AL 90639 for gross total $ 802,73 on 11/02/2015.",
    "text_content": "========================================================================\nINVOICE #34528548\nIssuance Date: 11/02/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Garcia, Stewart and Payne USCGC Frank FPO AE 30049\nTax Identifier: 949-78-5411\nSettlement IBAN: GB60LA0W81233191361598\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Huerta Ltd 74501 Andrea Streets Suite 854 Kaitlyntown, AL 90639\nTax Identifier: 972-74-2815\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Dell Desktop Computers 0 Core i5 16GB 2TB HD 512GB SSD 0 Windows 10 PC 22\"LCD\n   Quantity: 2,00 | Unit Price: 139,95 | Net Worth: 279,90 | VAT: 10% | Gross Total: 307,89\n2. Dell Optiplex Desktop Computer with Dual 19\" LCD Monitors Windows 10 Pro\n   Quantity: 3,00 | Unit Price: 149,95 | Net Worth: 449,85 | VAT: 10% | Gross Total: 494,83\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $729,75\nTax / VAT: $72,98\nGross Total Due: $ 802,73\n========================================================================",
    "pages": [
      {
        "page_number": 1,
        "title": "Invoice #34528548 Document & OCR",
        "text": "========================================================================\nINVOICE #34528548\nIssuance Date: 11/02/2015\n========================================================================\n\nISSUING VENDOR / SELLER:\nOrganization: Garcia, Stewart and Payne USCGC Frank FPO AE 30049\nTax Identifier: 949-78-5411\nSettlement IBAN: GB60LA0W81233191361598\n\nBILLED RECIPIENT / CLIENT:\nOrganization: Huerta Ltd 74501 Andrea Streets Suite 854 Kaitlyntown, AL 90639\nTax Identifier: 972-74-2815\n\n------------------------------------------------------------------------\nBILLABLE LINE ITEMS:\n------------------------------------------------------------------------\n1. Dell Desktop Computers 0 Core i5 16GB 2TB HD 512GB SSD 0 Windows 10 PC 22\"LCD\n   Quantity: 2,00 | Unit Price: 139,95 | Net Worth: 279,90 | VAT: 10% | Gross Total: 307,89\n2. Dell Optiplex Desktop Computer with Dual 19\" LCD Monitors Windows 10 Pro\n   Quantity: 3,00 | Unit Price: 149,95 | Net Worth: 449,85 | VAT: 10% | Gross Total: 494,83\n\n------------------------------------------------------------------------\nFINANCIAL SUMMARY:\n------------------------------------------------------------------------\nNet Subtotal: $729,75\nTax / VAT: $72,98\nGross Total Due: $ 802,73\n========================================================================"
      }
    ],
    "invoice_meta": {
      "invoice_no": "34528548",
      "date": "11/02/2015",
      "total_amount": "$ 802,73",
      "subtotal": "$729,75",
      "tax_amount": "$72,98",
      "seller": "Garcia, Stewart and Payne USCGC Frank FPO AE 30049",
      "client": "Huerta Ltd 74501 Andrea Streets Suite 854 Kaitlyntown, AL 90639",
      "iban": "GB60LA0W81233191361598",
      "items": [
        {
          "description": "Dell Desktop Computers 0 Core i5 16GB 2TB HD 512GB SSD 0 Windows 10 PC 22\"LCD",
          "quantity": "2,00",
          "unit_price": "139,95",
          "total_price": "279,90",
          "vat": "10%",
          "gross_worth": "307,89"
        },
        {
          "description": "Dell Optiplex Desktop Computer with Dual 19\" LCD Monitors Windows 10 Pro",
          "quantity": "3,00",
          "unit_price": "149,95",
          "total_price": "449,85",
          "vat": "10%",
          "gross_worth": "494,83"
        }
      ],
      "seller_tax_id": "949-78-5411",
      "client_tax_id": "972-74-2815",
      "has_scanned_image": true,
      "image_url": "/api/documents/inv-9643a6/image"
    },
    "has_image": true,
    "image_url": "/api/documents/inv-9643a6/image"
  }
];

export const INITIAL_ENTITIES = [
  {
    "id": "ent-inv-inva140fb",
    "name": "Invoice #97159829",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-97159829",
    "linked_entity_name": "Invoice #97159829",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-a140fb",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Invoice #97159829",
    "properties": {
      "InvoiceNo": "97159829",
      "Total": "N/A",
      "Date": "09/18/2015"
    }
  },
  {
    "id": "ent-org-4574175",
    "name": "Client:",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-4175",
    "linked_entity_name": "Client:",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-a140fb",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Seller: Client:",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Seller"
    }
  },
  {
    "id": "ent-org-9287822",
    "name": "Bradley-Andrade",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-7822",
    "linked_entity_name": "Bradley-Andrade",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-a140fb",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Client: Bradley-Andrade",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-prod-9287822",
    "name": "Bradley-Andrade",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-7822",
    "linked_entity_name": "Bradley-Andrade",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-a140fb",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Item: Bradley-Andrade",
    "properties": {
      "LineItem": "Bradley-Andrade"
    }
  },
  {
    "id": "ent-prod-1633531",
    "name": "Castro PLC",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-3531",
    "linked_entity_name": "Castro PLC",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-a140fb",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Item: Castro PLC",
    "properties": {
      "LineItem": "Castro PLC"
    }
  },
  {
    "id": "ent-prod-9705099",
    "name": "9879ElizabethCommon",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-5099",
    "linked_entity_name": "9879ElizabethCommon",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-a140fb",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Item: 9879ElizabethCommon",
    "properties": {
      "LineItem": "9879ElizabethCommon"
    }
  },
  {
    "id": "ent-prod-7335532",
    "name": "Unit9678Box9664",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-5532",
    "linked_entity_name": "Unit9678Box9664",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-a140fb",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Item: Unit9678Box9664",
    "properties": {
      "LineItem": "Unit9678Box9664"
    }
  },
  {
    "id": "ent-inv-inve42ddc",
    "name": "Invoice #13194726",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-13194726",
    "linked_entity_name": "Invoice #13194726",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-e42ddc",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "evidence_text": "Invoice #13194726",
    "properties": {
      "InvoiceNo": "13194726",
      "Total": "N/A",
      "Date": "05/29/2021"
    }
  },
  {
    "id": "ent-org-3119633",
    "name": "Hopkins and Sons",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-9633",
    "linked_entity_name": "Hopkins and Sons",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-e42ddc",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "evidence_text": "Client: Hopkins and Sons",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-prod-3119633",
    "name": "Hopkins and Sons",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-9633",
    "linked_entity_name": "Hopkins and Sons",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-e42ddc",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "evidence_text": "Item: Hopkins and Sons",
    "properties": {
      "LineItem": "Hopkins and Sons"
    }
  },
  {
    "id": "ent-prod-631311",
    "name": "Sims PLC",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-1311",
    "linked_entity_name": "Sims PLC",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-e42ddc",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "evidence_text": "Item: Sims PLC",
    "properties": {
      "LineItem": "Sims PLC"
    }
  },
  {
    "id": "ent-prod-2040656",
    "name": "62283FloresTunnel",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-656",
    "linked_entity_name": "62283FloresTunnel",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-e42ddc",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "evidence_text": "Item: 62283FloresTunnel",
    "properties": {
      "LineItem": "62283FloresTunnel"
    }
  },
  {
    "id": "ent-prod-3163003",
    "name": "USS Kramer",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-3003",
    "linked_entity_name": "USS Kramer",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-e42ddc",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "evidence_text": "Item: USS Kramer",
    "properties": {
      "LineItem": "USS Kramer"
    }
  },
  {
    "id": "ent-inv-inv01e4d9",
    "name": "Invoice #62517865",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-62517865",
    "linked_entity_name": "Invoice #62517865",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-01e4d9",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "evidence_text": "Invoice #62517865",
    "properties": {
      "InvoiceNo": "62517865",
      "Total": "N/A",
      "Date": "06/02/2015"
    }
  },
  {
    "id": "ent-org-7172870",
    "name": "Trujillo-Hunt",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-2870",
    "linked_entity_name": "Trujillo-Hunt",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-01e4d9",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "evidence_text": "Client: Trujillo-Hunt",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-prod-7172870",
    "name": "Trujillo-Hunt",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-2870",
    "linked_entity_name": "Trujillo-Hunt",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-01e4d9",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "evidence_text": "Item: Trujillo-Hunt",
    "properties": {
      "LineItem": "Trujillo-Hunt"
    }
  },
  {
    "id": "ent-prod-3242361",
    "name": "Lee and Sons",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-2361",
    "linked_entity_name": "Lee and Sons",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-01e4d9",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "evidence_text": "Item: Lee and Sons",
    "properties": {
      "LineItem": "Lee and Sons"
    }
  },
  {
    "id": "ent-prod-1966280",
    "name": "430MarkFerrySuite495",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-6280",
    "linked_entity_name": "430MarkFerrySuite495",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-01e4d9",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "evidence_text": "Item: 430MarkFerrySuite495",
    "properties": {
      "LineItem": "430MarkFerrySuite495"
    }
  },
  {
    "id": "ent-prod-7086188",
    "name": "8552KarenIslands",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-6188",
    "linked_entity_name": "8552KarenIslands",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-01e4d9",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "evidence_text": "Item: 8552KarenIslands",
    "properties": {
      "LineItem": "8552KarenIslands"
    }
  },
  {
    "id": "ent-inv-invaff77b",
    "name": "Invoice #56014042",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-56014042",
    "linked_entity_name": "Invoice #56014042",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-aff77b",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "evidence_text": "Invoice #56014042",
    "properties": {
      "InvoiceNo": "56014042",
      "Total": "N/A",
      "Date": "10/01/2014"
    }
  },
  {
    "id": "ent-org-2620506",
    "name": "Nichols-Barajas",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-506",
    "linked_entity_name": "Nichols-Barajas",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-aff77b",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "evidence_text": "Client: Nichols-Barajas",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-prod-2620506",
    "name": "Nichols-Barajas",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-506",
    "linked_entity_name": "Nichols-Barajas",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-aff77b",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "evidence_text": "Item: Nichols-Barajas",
    "properties": {
      "LineItem": "Nichols-Barajas"
    }
  },
  {
    "id": "ent-prod-3630372",
    "name": "Mckay PLC",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-372",
    "linked_entity_name": "Mckay PLC",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-aff77b",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "evidence_text": "Item: Mckay PLC",
    "properties": {
      "LineItem": "Mckay PLC"
    }
  },
  {
    "id": "ent-prod-769002",
    "name": "3882StacyVilleApt.488",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-9002",
    "linked_entity_name": "3882StacyVilleApt.488",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-aff77b",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "evidence_text": "Item: 3882StacyVilleApt.488",
    "properties": {
      "LineItem": "3882StacyVilleApt.488"
    }
  },
  {
    "id": "ent-prod-8548138",
    "name": "5542DanielleDriveSuite381",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-8138",
    "linked_entity_name": "5542DanielleDriveSuite381",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-aff77b",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "evidence_text": "Item: 5542DanielleDriveSuite381",
    "properties": {
      "LineItem": "5542DanielleDriveSuite381"
    }
  },
  {
    "id": "ent-inv-inv000827",
    "name": "Invoice #16662010",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-16662010",
    "linked_entity_name": "Invoice #16662010",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-000827",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "evidence_text": "Invoice #16662010",
    "properties": {
      "InvoiceNo": "16662010",
      "Total": "N/A",
      "Date": "08/28/2016"
    }
  },
  {
    "id": "ent-org-6112694",
    "name": "Smith-Cook",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-2694",
    "linked_entity_name": "Smith-Cook",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-000827",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "evidence_text": "Client: Smith-Cook",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-prod-6112694",
    "name": "Smith-Cook",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-2694",
    "linked_entity_name": "Smith-Cook",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-000827",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "evidence_text": "Item: Smith-Cook",
    "properties": {
      "LineItem": "Smith-Cook"
    }
  },
  {
    "id": "ent-prod-8757529",
    "name": "Snyder-Johnson",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-7529",
    "linked_entity_name": "Snyder-Johnson",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-000827",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "evidence_text": "Item: Snyder-Johnson",
    "properties": {
      "LineItem": "Snyder-Johnson"
    }
  },
  {
    "id": "ent-prod-6066884",
    "name": "174JustinCauseway",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-6884",
    "linked_entity_name": "174JustinCauseway",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-000827",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "evidence_text": "Item: 174JustinCauseway",
    "properties": {
      "LineItem": "174JustinCauseway"
    }
  },
  {
    "id": "ent-prod-809745",
    "name": "05173HeatherMill",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-9745",
    "linked_entity_name": "05173HeatherMill",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-000827",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "evidence_text": "Item: 05173HeatherMill",
    "properties": {
      "LineItem": "05173HeatherMill"
    }
  },
  {
    "id": "ent-inv-inv4dad72",
    "name": "Invoice #27543706",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-27543706",
    "linked_entity_name": "Invoice #27543706",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-4dad72",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "evidence_text": "Invoice #27543706",
    "properties": {
      "InvoiceNo": "27543706",
      "Total": "N/A",
      "Date": "07/20/2020"
    }
  },
  {
    "id": "ent-org-8884538",
    "name": "Kaiser,Hays and Cook",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-4538",
    "linked_entity_name": "Kaiser,Hays and Cook",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-4dad72",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "evidence_text": "Client: Kaiser,Hays and Cook",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-prod-8884538",
    "name": "Kaiser,Hays and Cook",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-4538",
    "linked_entity_name": "Kaiser,Hays and Cook",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-4dad72",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "evidence_text": "Item: Kaiser,Hays and Cook",
    "properties": {
      "LineItem": "Kaiser,Hays and Cook"
    }
  },
  {
    "id": "ent-prod-6424242",
    "name": "Holland PLC",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-4242",
    "linked_entity_name": "Holland PLC",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-4dad72",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "evidence_text": "Item: Holland PLC",
    "properties": {
      "LineItem": "Holland PLC"
    }
  },
  {
    "id": "ent-prod-2176862",
    "name": "460RichardForge",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-6862",
    "linked_entity_name": "460RichardForge",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-4dad72",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "evidence_text": "Item: 460RichardForge",
    "properties": {
      "LineItem": "460RichardForge"
    }
  },
  {
    "id": "ent-prod-5308930",
    "name": "10833HillCourtsSuite606",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-8930",
    "linked_entity_name": "10833HillCourtsSuite606",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-4dad72",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "evidence_text": "Item: 10833HillCourtsSuite606",
    "properties": {
      "LineItem": "10833HillCourtsSuite606"
    }
  },
  {
    "id": "ent-inv-inve509b2",
    "name": "Invoice #26343874",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-26343874",
    "linked_entity_name": "Invoice #26343874",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-e509b2",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "evidence_text": "Invoice #26343874",
    "properties": {
      "InvoiceNo": "26343874",
      "Total": "N/A",
      "Date": "07/17/2013"
    }
  },
  {
    "id": "ent-org-9476813",
    "name": "Smith Ltd",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-6813",
    "linked_entity_name": "Smith Ltd",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-e509b2",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "evidence_text": "Client: Smith Ltd",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-prod-9476813",
    "name": "Smith Ltd",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-6813",
    "linked_entity_name": "Smith Ltd",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-e509b2",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "evidence_text": "Item: Smith Ltd",
    "properties": {
      "LineItem": "Smith Ltd"
    }
  },
  {
    "id": "ent-prod-832239",
    "name": "Herring-Floyd",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-2239",
    "linked_entity_name": "Herring-Floyd",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-e509b2",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "evidence_text": "Item: Herring-Floyd",
    "properties": {
      "LineItem": "Herring-Floyd"
    }
  },
  {
    "id": "ent-prod-2335575",
    "name": "290Jodi Gardens",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-5575",
    "linked_entity_name": "290Jodi Gardens",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-e509b2",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "evidence_text": "Item: 290Jodi Gardens",
    "properties": {
      "LineItem": "290Jodi Gardens"
    }
  },
  {
    "id": "ent-prod-7959133",
    "name": "8113Hansen Cliff Apt.826",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-9133",
    "linked_entity_name": "8113Hansen Cliff Apt.826",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-e509b2",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "evidence_text": "Item: 8113Hansen Cliff Apt.826",
    "properties": {
      "LineItem": "8113Hansen Cliff Apt.826"
    }
  },
  {
    "id": "ent-inv-invcd310a",
    "name": "Invoice #12222347",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-12222347",
    "linked_entity_name": "Invoice #12222347",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-cd310a",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "evidence_text": "Invoice #12222347",
    "properties": {
      "InvoiceNo": "12222347",
      "Total": "N/A",
      "Date": "03/18/2017"
    }
  },
  {
    "id": "ent-org-5012561",
    "name": "Gregory,Patterson and Fischer",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-2561",
    "linked_entity_name": "Gregory,Patterson and Fischer",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-cd310a",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "evidence_text": "Client: Gregory,Patterson and Fischer",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-prod-5012561",
    "name": "Gregory,Patterson and Fischer",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-2561",
    "linked_entity_name": "Gregory,Patterson and Fischer",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-cd310a",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "evidence_text": "Item: Gregory,Patterson and Fischer",
    "properties": {
      "LineItem": "Gregory,Patterson and Fischer"
    }
  },
  {
    "id": "ent-prod-4346539",
    "name": "Wilson PLC",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-6539",
    "linked_entity_name": "Wilson PLC",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-cd310a",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "evidence_text": "Item: Wilson PLC",
    "properties": {
      "LineItem": "Wilson PLC"
    }
  },
  {
    "id": "ent-prod-5756888",
    "name": "439Hunter Land",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-6888",
    "linked_entity_name": "439Hunter Land",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-cd310a",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "evidence_text": "Item: 439Hunter Land",
    "properties": {
      "LineItem": "439Hunter Land"
    }
  },
  {
    "id": "ent-prod-3677839",
    "name": "667 Wu Ports",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-7839",
    "linked_entity_name": "667 Wu Ports",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-cd310a",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "evidence_text": "Item: 667 Wu Ports",
    "properties": {
      "LineItem": "667 Wu Ports"
    }
  },
  {
    "id": "ent-inv-inv79ebc8",
    "name": "Invoice #25698672",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-25698672",
    "linked_entity_name": "Invoice #25698672",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-79ebc8",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "evidence_text": "Invoice #25698672",
    "properties": {
      "InvoiceNo": "25698672",
      "Total": "N/A",
      "Date": "08/01/2015"
    }
  },
  {
    "id": "ent-org-9070621",
    "name": "Gordon, Alvarado and Jones",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-621",
    "linked_entity_name": "Gordon, Alvarado and Jones",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-79ebc8",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "evidence_text": "Client: Gordon, Alvarado and Jones",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-prod-9070621",
    "name": "Gordon, Alvarado and Jones",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-621",
    "linked_entity_name": "Gordon, Alvarado and Jones",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-79ebc8",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "evidence_text": "Item: Gordon, Alvarado and Jones",
    "properties": {
      "LineItem": "Gordon, Alvarado and Jones"
    }
  },
  {
    "id": "ent-prod-7403433",
    "name": "Manning-Ho",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-3433",
    "linked_entity_name": "Manning-Ho",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-79ebc8",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "evidence_text": "Item: Manning-Ho",
    "properties": {
      "LineItem": "Manning-Ho"
    }
  },
  {
    "id": "ent-prod-6977573",
    "name": "943SeanParkSuite284",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-7573",
    "linked_entity_name": "943SeanParkSuite284",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-79ebc8",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "evidence_text": "Item: 943SeanParkSuite284",
    "properties": {
      "LineItem": "943SeanParkSuite284"
    }
  },
  {
    "id": "ent-prod-1315053",
    "name": "92026MichaelTerraceApt.138",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-5053",
    "linked_entity_name": "92026MichaelTerraceApt.138",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-79ebc8",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "evidence_text": "Item: 92026MichaelTerraceApt.138",
    "properties": {
      "LineItem": "92026MichaelTerraceApt.138"
    }
  },
  {
    "id": "ent-inv-inv9dfe5a",
    "name": "Invoice #24048799",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-24048799",
    "linked_entity_name": "Invoice #24048799",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-9dfe5a",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "evidence_text": "Invoice #24048799",
    "properties": {
      "InvoiceNo": "24048799",
      "Total": "N/A",
      "Date": "05/21/2014"
    }
  },
  {
    "id": "ent-org-1288709",
    "name": "Rodriguez-Jackson",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-8709",
    "linked_entity_name": "Rodriguez-Jackson",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-9dfe5a",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "evidence_text": "Client: Rodriguez-Jackson",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-prod-1288709",
    "name": "Rodriguez-Jackson",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-8709",
    "linked_entity_name": "Rodriguez-Jackson",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-9dfe5a",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "evidence_text": "Item: Rodriguez-Jackson",
    "properties": {
      "LineItem": "Rodriguez-Jackson"
    }
  },
  {
    "id": "ent-prod-6317976",
    "name": "Williams,FletcherandTaylor",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-7976",
    "linked_entity_name": "Williams,FletcherandTaylor",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-9dfe5a",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "evidence_text": "Item: Williams,FletcherandTaylor",
    "properties": {
      "LineItem": "Williams,FletcherandTaylor"
    }
  },
  {
    "id": "ent-prod-9109457",
    "name": "4804RileyRowSuite059",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-9457",
    "linked_entity_name": "4804RileyRowSuite059",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-9dfe5a",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "evidence_text": "Item: 4804RileyRowSuite059",
    "properties": {
      "LineItem": "4804RileyRowSuite059"
    }
  },
  {
    "id": "ent-prod-5861370",
    "name": "9371HarveyPortSuite901",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-1370",
    "linked_entity_name": "9371HarveyPortSuite901",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-9dfe5a",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "evidence_text": "Item: 9371HarveyPortSuite901",
    "properties": {
      "LineItem": "9371HarveyPortSuite901"
    }
  },
  {
    "id": "ent-inv-inv44deef",
    "name": "Invoice #72455228",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-72455228",
    "linked_entity_name": "Invoice #72455228",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-44deef",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "evidence_text": "Invoice #72455228",
    "properties": {
      "InvoiceNo": "72455228",
      "Total": "N/A",
      "Date": "05/11/2021"
    }
  },
  {
    "id": "ent-org-5570437",
    "name": "Potts,Reed and Miller",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-437",
    "linked_entity_name": "Potts,Reed and Miller",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-44deef",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "evidence_text": "Client: Potts,Reed and Miller",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-prod-5570437",
    "name": "Potts,Reed and Miller",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-437",
    "linked_entity_name": "Potts,Reed and Miller",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-44deef",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "evidence_text": "Item: Potts,Reed and Miller",
    "properties": {
      "LineItem": "Potts,Reed and Miller"
    }
  },
  {
    "id": "ent-prod-1975036",
    "name": "Brady LLC",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-5036",
    "linked_entity_name": "Brady LLC",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-44deef",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "evidence_text": "Item: Brady LLC",
    "properties": {
      "LineItem": "Brady LLC"
    }
  },
  {
    "id": "ent-prod-5099047",
    "name": "USCGCWeeks",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-9047",
    "linked_entity_name": "USCGCWeeks",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-44deef",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "evidence_text": "Item: USCGCWeeks",
    "properties": {
      "LineItem": "USCGCWeeks"
    }
  },
  {
    "id": "ent-prod-7094123",
    "name": "26039AnitaStravenue",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-4123",
    "linked_entity_name": "26039AnitaStravenue",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-44deef",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "evidence_text": "Item: 26039AnitaStravenue",
    "properties": {
      "LineItem": "26039AnitaStravenue"
    }
  },
  {
    "id": "ent-inv-inv0fe9bc",
    "name": "Invoice #58478169",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-58478169",
    "linked_entity_name": "Invoice #58478169",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-0fe9bc",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "evidence_text": "Invoice #58478169",
    "properties": {
      "InvoiceNo": "58478169",
      "Total": "N/A",
      "Date": "07/04/2016"
    }
  },
  {
    "id": "ent-org-3853518",
    "name": "Conley Ltd",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-3518",
    "linked_entity_name": "Conley Ltd",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-0fe9bc",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "evidence_text": "Client: Conley Ltd",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-prod-3853518",
    "name": "Conley Ltd",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-3518",
    "linked_entity_name": "Conley Ltd",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-0fe9bc",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "evidence_text": "Item: Conley Ltd",
    "properties": {
      "LineItem": "Conley Ltd"
    }
  },
  {
    "id": "ent-prod-1429149",
    "name": "Wells-Avery",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-9149",
    "linked_entity_name": "Wells-Avery",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-0fe9bc",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "evidence_text": "Item: Wells-Avery",
    "properties": {
      "LineItem": "Wells-Avery"
    }
  },
  {
    "id": "ent-prod-8242039",
    "name": "262 Jeffrey Underpass",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-2039",
    "linked_entity_name": "262 Jeffrey Underpass",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-0fe9bc",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "evidence_text": "Item: 262 Jeffrey Underpass",
    "properties": {
      "LineItem": "262 Jeffrey Underpass"
    }
  },
  {
    "id": "ent-prod-6760114",
    "name": "7065AlejandroForks",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-114",
    "linked_entity_name": "7065AlejandroForks",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-0fe9bc",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "evidence_text": "Item: 7065AlejandroForks",
    "properties": {
      "LineItem": "7065AlejandroForks"
    }
  },
  {
    "id": "ent-inv-inv0d91cc",
    "name": "Invoice #90508672",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-90508672",
    "linked_entity_name": "Invoice #90508672",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-0d91cc",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "evidence_text": "Invoice #90508672",
    "properties": {
      "InvoiceNo": "90508672",
      "Total": "N/A",
      "Date": "04/16/2020"
    }
  },
  {
    "id": "ent-org-5809705",
    "name": "Stone-Waller",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-9705",
    "linked_entity_name": "Stone-Waller",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-0d91cc",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "evidence_text": "Client: Stone-Waller",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-prod-5809705",
    "name": "Stone-Waller",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-9705",
    "linked_entity_name": "Stone-Waller",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-0d91cc",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "evidence_text": "Item: Stone-Waller",
    "properties": {
      "LineItem": "Stone-Waller"
    }
  },
  {
    "id": "ent-prod-1623272",
    "name": "Shaw Group",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-3272",
    "linked_entity_name": "Shaw Group",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-0d91cc",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "evidence_text": "Item: Shaw Group",
    "properties": {
      "LineItem": "Shaw Group"
    }
  },
  {
    "id": "ent-prod-9676504",
    "name": "53428PeterDaleApt.293",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-6504",
    "linked_entity_name": "53428PeterDaleApt.293",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-0d91cc",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "evidence_text": "Item: 53428PeterDaleApt.293",
    "properties": {
      "LineItem": "53428PeterDaleApt.293"
    }
  },
  {
    "id": "ent-prod-7457625",
    "name": "58420JohnTurnpikeSuite767",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-7625",
    "linked_entity_name": "58420JohnTurnpikeSuite767",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-0d91cc",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "evidence_text": "Item: 58420JohnTurnpikeSuite767",
    "properties": {
      "LineItem": "58420JohnTurnpikeSuite767"
    }
  },
  {
    "id": "ent-inv-inva0b568",
    "name": "Invoice #96051364",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-96051364",
    "linked_entity_name": "Invoice #96051364",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-a0b568",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "evidence_text": "Invoice #96051364",
    "properties": {
      "InvoiceNo": "96051364",
      "Total": "N/A",
      "Date": "04/28/2020"
    }
  },
  {
    "id": "ent-org-9658063",
    "name": "Jackson Ltd",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-8063",
    "linked_entity_name": "Jackson Ltd",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-a0b568",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "evidence_text": "Client: Jackson Ltd",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-prod-9658063",
    "name": "Jackson Ltd",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-8063",
    "linked_entity_name": "Jackson Ltd",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-a0b568",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "evidence_text": "Item: Jackson Ltd",
    "properties": {
      "LineItem": "Jackson Ltd"
    }
  },
  {
    "id": "ent-prod-9933537",
    "name": "Williams,Fowler andPhillips",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-3537",
    "linked_entity_name": "Williams,Fowler andPhillips",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-a0b568",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "evidence_text": "Item: Williams,Fowler andPhillips",
    "properties": {
      "LineItem": "Williams,Fowler andPhillips"
    }
  },
  {
    "id": "ent-prod-9521095",
    "name": "134CatherineValleyApt.756",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-1095",
    "linked_entity_name": "134CatherineValleyApt.756",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-a0b568",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "evidence_text": "Item: 134CatherineValleyApt.756",
    "properties": {
      "LineItem": "134CatherineValleyApt.756"
    }
  },
  {
    "id": "ent-prod-3240756",
    "name": "115 MccormickKnolls",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-756",
    "linked_entity_name": "115 MccormickKnolls",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-a0b568",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "evidence_text": "Item: 115 MccormickKnolls",
    "properties": {
      "LineItem": "115 MccormickKnolls"
    }
  },
  {
    "id": "ent-inv-inv01ba2b",
    "name": "Invoice #67856369",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-67856369",
    "linked_entity_name": "Invoice #67856369",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-01ba2b",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "evidence_text": "Invoice #67856369",
    "properties": {
      "InvoiceNo": "67856369",
      "Total": "N/A",
      "Date": "05/27/2020"
    }
  },
  {
    "id": "ent-org-7307934",
    "name": "Pierce PLC",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-7934",
    "linked_entity_name": "Pierce PLC",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-01ba2b",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "evidence_text": "Client: Pierce PLC",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-prod-7307934",
    "name": "Pierce PLC",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-7934",
    "linked_entity_name": "Pierce PLC",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-01ba2b",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "evidence_text": "Item: Pierce PLC",
    "properties": {
      "LineItem": "Pierce PLC"
    }
  },
  {
    "id": "ent-prod-7242341",
    "name": "Cochran-Alvarez",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-2341",
    "linked_entity_name": "Cochran-Alvarez",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-01ba2b",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "evidence_text": "Item: Cochran-Alvarez",
    "properties": {
      "LineItem": "Cochran-Alvarez"
    }
  },
  {
    "id": "ent-prod-435475",
    "name": "3454McbrideRampApt.312",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-5475",
    "linked_entity_name": "3454McbrideRampApt.312",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-01ba2b",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "evidence_text": "Item: 3454McbrideRampApt.312",
    "properties": {
      "LineItem": "3454McbrideRampApt.312"
    }
  },
  {
    "id": "ent-prod-5681314",
    "name": "488KennethMission",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-1314",
    "linked_entity_name": "488KennethMission",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-01ba2b",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "evidence_text": "Item: 488KennethMission",
    "properties": {
      "LineItem": "488KennethMission"
    }
  },
  {
    "id": "ent-inv-inv4ce5ae",
    "name": "Invoice #97159829",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-97159829",
    "linked_entity_name": "Invoice #97159829",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-4ce5ae",
    "source_doc_name": "KatanaML_Invoice_0001.png",
    "source_page": 1,
    "evidence_text": "Invoice #97159829",
    "properties": {
      "InvoiceNo": "97159829",
      "Total": "$ 978,12",
      "Date": "09/18/2015"
    }
  },
  {
    "id": "ent-org-1633531",
    "name": "Castro PLC",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-3531",
    "linked_entity_name": "Castro PLC",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-4ce5ae",
    "source_doc_name": "KatanaML_Invoice_0001.png",
    "source_page": 1,
    "evidence_text": "Client: Castro PLC",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-mon-5761390",
    "name": "$ 978,12",
    "type": "Money",
    "mentions_count": 1,
    "linked_entity_id": "MON-1390",
    "linked_entity_name": "$ 978,12",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-4ce5ae",
    "source_doc_name": "KatanaML_Invoice_0001.png",
    "source_page": 1,
    "evidence_text": "Total: $ 978,12",
    "properties": {
      "GrossTotal": "$ 978,12"
    }
  },
  {
    "id": "ent-prod-8358573",
    "name": "12\" Marble Lapis Inlay Chess Table Top With 2\" Pieces & 15\" Wooden Stand W537",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-8573",
    "linked_entity_name": "12\" Marble Lapis Inlay Chess Table Top With 2\" Pieces & 15\" Wooden Stand W537",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-4ce5ae",
    "source_doc_name": "KatanaML_Invoice_0001.png",
    "source_page": 1,
    "evidence_text": "Item: 12\" Marble Lapis Inlay Chess Table Top With 2\" Pieces & 15\" Wooden Stand W537",
    "properties": {
      "LineItem": "12\" Marble Lapis Inlay Chess Table Top With 2\" Pieces & 15\" Wooden Stand W537"
    }
  },
  {
    "id": "ent-inv-inv71287d",
    "name": "Invoice #13194726",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-13194726",
    "linked_entity_name": "Invoice #13194726",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-71287d",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Invoice #13194726",
    "properties": {
      "InvoiceNo": "13194726",
      "Total": "$ 640,12",
      "Date": "05/29/2021"
    }
  },
  {
    "id": "ent-org-8079702",
    "name": "Sims PLC USS Kramer FPO AA",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-9702",
    "linked_entity_name": "Sims PLC USS Kramer FPO AA",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-71287d",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Client: Sims PLC USS Kramer FPO AA",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-mon-4408487",
    "name": "$ 640,12",
    "type": "Money",
    "mentions_count": 1,
    "linked_entity_id": "MON-8487",
    "linked_entity_name": "$ 640,12",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-71287d",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Total: $ 640,12",
    "properties": {
      "GrossTotal": "$ 640,12"
    }
  },
  {
    "id": "ent-prod-3418021",
    "name": "Beach Lunch Lounge Striped Shirt Dress Large Navy Blue White Long Sleeve Causal",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-8021",
    "linked_entity_name": "Beach Lunch Lounge Striped Shirt Dress Large Navy Blue White Long Sleeve Causal",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-71287d",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Item: Beach Lunch Lounge Striped Shirt Dress Large Navy Blue White Long Sleeve Causal",
    "properties": {
      "LineItem": "Beach Lunch Lounge Striped Shirt Dress Large Navy Blue White Long Sleeve Causal"
    }
  },
  {
    "id": "ent-prod-7381999",
    "name": "Jams World Hawaiian 0 Dress Rayon SZ.L",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-1999",
    "linked_entity_name": "Jams World Hawaiian 0 Dress Rayon SZ.L",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-71287d",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Item: Jams World Hawaiian 0 Dress Rayon SZ.L",
    "properties": {
      "LineItem": "Jams World Hawaiian 0 Dress Rayon SZ.L"
    }
  },
  {
    "id": "ent-prod-8704832",
    "name": "LuLaRoe Nicole Dress Size Large 26",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-4832",
    "linked_entity_name": "LuLaRoe Nicole Dress Size Large 26",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-71287d",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Item: LuLaRoe Nicole Dress Size Large 26",
    "properties": {
      "LineItem": "LuLaRoe Nicole Dress Size Large 26"
    }
  },
  {
    "id": "ent-prod-1903024",
    "name": "Johnny Was Medium Linen Wrap Dress Dessert Rose Embroiderd Bohemian",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-3024",
    "linked_entity_name": "Johnny Was Medium Linen Wrap Dress Dessert Rose Embroiderd Bohemian",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-71287d",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Item: Johnny Was Medium Linen Wrap Dress Dessert Rose Embroiderd Bohemian",
    "properties": {
      "LineItem": "Johnny Was Medium Linen Wrap Dress Dessert Rose Embroiderd Bohemian"
    }
  },
  {
    "id": "ent-inv-inv7a51be",
    "name": "Invoice #62517865",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-62517865",
    "linked_entity_name": "Invoice #62517865",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-7a51be",
    "source_doc_name": "KatanaML_Invoice_0003.png",
    "source_page": 1,
    "evidence_text": "Invoice #62517865",
    "properties": {
      "InvoiceNo": "62517865",
      "Total": "$9,35",
      "Date": "06/02/2015"
    }
  },
  {
    "id": "ent-org-3242361",
    "name": "Lee and Sons",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-2361",
    "linked_entity_name": "Lee and Sons",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-7a51be",
    "source_doc_name": "KatanaML_Invoice_0003.png",
    "source_page": 1,
    "evidence_text": "Client: Lee and Sons",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-mon-1668282",
    "name": "$9,35",
    "type": "Money",
    "mentions_count": 1,
    "linked_entity_id": "MON-8282",
    "linked_entity_name": "$9,35",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-7a51be",
    "source_doc_name": "KatanaML_Invoice_0003.png",
    "source_page": 1,
    "evidence_text": "Total: $9,35",
    "properties": {
      "GrossTotal": "$9,35"
    }
  },
  {
    "id": "ent-prod-4925968",
    "name": "Care & Repair of Furniture",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-5968",
    "linked_entity_name": "Care & Repair of Furniture",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-7a51be",
    "source_doc_name": "KatanaML_Invoice_0003.png",
    "source_page": 1,
    "evidence_text": "Item: Care & Repair of Furniture",
    "properties": {
      "LineItem": "Care & Repair of Furniture"
    }
  },
  {
    "id": "ent-inv-inv2cdf87",
    "name": "Invoice #56014042",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-56014042",
    "linked_entity_name": "Invoice #56014042",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-2cdf87",
    "source_doc_name": "KatanaML_Invoice_0004.png",
    "source_page": 1,
    "evidence_text": "Invoice #56014042",
    "properties": {
      "InvoiceNo": "56014042",
      "Total": "$65,45",
      "Date": "10/01/2014"
    }
  },
  {
    "id": "ent-org-3630372",
    "name": "Mckay PLC",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-372",
    "linked_entity_name": "Mckay PLC",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-2cdf87",
    "source_doc_name": "KatanaML_Invoice_0004.png",
    "source_page": 1,
    "evidence_text": "Client: Mckay PLC",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-mon-1913196",
    "name": "$65,45",
    "type": "Money",
    "mentions_count": 1,
    "linked_entity_id": "MON-3196",
    "linked_entity_name": "$65,45",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-2cdf87",
    "source_doc_name": "KatanaML_Invoice_0004.png",
    "source_page": 1,
    "evidence_text": "Total: $65,45",
    "properties": {
      "GrossTotal": "$65,45"
    }
  },
  {
    "id": "ent-prod-4116462",
    "name": "Jordan Hydro 2 (TD)-Child Size",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-6462",
    "linked_entity_name": "Jordan Hydro 2 (TD)-Child Size",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-2cdf87",
    "source_doc_name": "KatanaML_Invoice_0004.png",
    "source_page": 1,
    "evidence_text": "Item: Jordan Hydro 2 (TD)-Child Size",
    "properties": {
      "LineItem": "Jordan Hydro 2 (TD)-Child Size"
    }
  },
  {
    "id": "ent-prod-5933783",
    "name": "Sketchers Energy Lights Boys Black Canvas Size 4 With Charging Cable",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-3783",
    "linked_entity_name": "Sketchers Energy Lights Boys Black Canvas Size 4 With Charging Cable",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-2cdf87",
    "source_doc_name": "KatanaML_Invoice_0004.png",
    "source_page": 1,
    "evidence_text": "Item: Sketchers Energy Lights Boys Black Canvas Size 4 With Charging Cable",
    "properties": {
      "LineItem": "Sketchers Energy Lights Boys Black Canvas Size 4 With Charging Cable"
    }
  },
  {
    "id": "ent-inv-inv370e7d",
    "name": "Invoice #16662010",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-16662010",
    "linked_entity_name": "Invoice #16662010",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-370e7d",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Invoice #16662010",
    "properties": {
      "InvoiceNo": "16662010",
      "Total": "$2259,10",
      "Date": "08/28/2016"
    }
  },
  {
    "id": "ent-org-8757529",
    "name": "Snyder-Johnson",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-7529",
    "linked_entity_name": "Snyder-Johnson",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-370e7d",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Client: Snyder-Johnson",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-mon-6887007",
    "name": "$2259,10",
    "type": "Money",
    "mentions_count": 1,
    "linked_entity_id": "MON-7007",
    "linked_entity_name": "$2259,10",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-370e7d",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Total: $2259,10",
    "properties": {
      "GrossTotal": "$2259,10"
    }
  },
  {
    "id": "ent-prod-2828610",
    "name": "Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working 59",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-8610",
    "linked_entity_name": "Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working 59",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-370e7d",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Item: Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working 59",
    "properties": {
      "LineItem": "Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working 59"
    }
  },
  {
    "id": "ent-prod-5524807",
    "name": "New Sony Playstation 4 Slim 1TB 3 Game Bundle Console. Sealed!!!",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-4807",
    "linked_entity_name": "New Sony Playstation 4 Slim 1TB 3 Game Bundle Console. Sealed!!!",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-370e7d",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Item: New Sony Playstation 4 Slim 1TB 3 Game Bundle Console. Sealed!!!",
    "properties": {
      "LineItem": "New Sony Playstation 4 Slim 1TB 3 Game Bundle Console. Sealed!!!"
    }
  },
  {
    "id": "ent-prod-5908638",
    "name": "Atari Flashback 4 Classic Game Console 75 built in games Space Invaders Asteroid",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-8638",
    "linked_entity_name": "Atari Flashback 4 Classic Game Console 75 built in games Space Invaders Asteroid",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-370e7d",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Item: Atari Flashback 4 Classic Game Console 75 built in games Space Invaders Asteroid",
    "properties": {
      "LineItem": "Atari Flashback 4 Classic Game Console 75 built in games Space Invaders Asteroid"
    }
  },
  {
    "id": "ent-prod-7214192",
    "name": "Sony PlayStation 1 PS1 Console model scph-7501",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-4192",
    "linked_entity_name": "Sony PlayStation 1 PS1 Console model scph-7501",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-370e7d",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Item: Sony PlayStation 1 PS1 Console model scph-7501",
    "properties": {
      "LineItem": "Sony PlayStation 1 PS1 Console model scph-7501"
    }
  },
  {
    "id": "ent-inv-invbe7fea",
    "name": "Invoice #27543706",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-27543706",
    "linked_entity_name": "Invoice #27543706",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-be7fea",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Invoice #27543706",
    "properties": {
      "InvoiceNo": "27543706",
      "Total": "48 801,10",
      "Date": "07/20/2020"
    }
  },
  {
    "id": "ent-org-7160771",
    "name": "Kaiser, Hays and Cook",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-771",
    "linked_entity_name": "Kaiser, Hays and Cook",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-be7fea",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Seller: Kaiser, Hays and Cook",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Seller"
    }
  },
  {
    "id": "ent-org-6424242",
    "name": "Holland PLC",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-4242",
    "linked_entity_name": "Holland PLC",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-be7fea",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Client: Holland PLC",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-mon-5592039",
    "name": "48 801,10",
    "type": "Money",
    "mentions_count": 1,
    "linked_entity_id": "MON-2039",
    "linked_entity_name": "48 801,10",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-be7fea",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Total: 48 801,10",
    "properties": {
      "GrossTotal": "48 801,10"
    }
  },
  {
    "id": "ent-prod-6829545",
    "name": "Marble Beautiful White Coffee Table Top Malachite Inlay Art Home Decor H5372",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-9545",
    "linked_entity_name": "Marble Beautiful White Coffee Table Top Malachite Inlay Art Home Decor H5372",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-be7fea",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Item: Marble Beautiful White Coffee Table Top Malachite Inlay Art Home Decor H5372",
    "properties": {
      "LineItem": "Marble Beautiful White Coffee Table Top Malachite Inlay Art Home Decor H5372"
    }
  },
  {
    "id": "ent-prod-5400370",
    "name": "15\"x15\" White Decorative Coffee Table Top Lapis Lazuli Marquetery Patio D\u00e9cor",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-370",
    "linked_entity_name": "15\"x15\" White Decorative Coffee Table Top Lapis Lazuli Marquetery Patio D\u00e9cor",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-be7fea",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Item: 15\"x15\" White Decorative Coffee Table Top Lapis Lazuli Marquetery Patio D\u00e9cor",
    "properties": {
      "LineItem": "15\"x15\" White Decorative Coffee Table Top Lapis Lazuli Marquetery Patio D\u00e9cor"
    }
  },
  {
    "id": "ent-prod-8639923",
    "name": "16 Inches Marble Coffee Table Top Inlay with Multi Stone at Border Game Table",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-9923",
    "linked_entity_name": "16 Inches Marble Coffee Table Top Inlay with Multi Stone at Border Game Table",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-be7fea",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Item: 16 Inches Marble Coffee Table Top Inlay with Multi Stone at Border Game Table",
    "properties": {
      "LineItem": "16 Inches Marble Coffee Table Top Inlay with Multi Stone at Border Game Table"
    }
  },
  {
    "id": "ent-prod-1706580",
    "name": "18\" Black Marble Coffee Table Top Mother of Pearl Inlay Furniture Decors H1883B",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-6580",
    "linked_entity_name": "18\" Black Marble Coffee Table Top Mother of Pearl Inlay Furniture Decors H1883B",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-be7fea",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Item: 18\" Black Marble Coffee Table Top Mother of Pearl Inlay Furniture Decors H1883B",
    "properties": {
      "LineItem": "18\" Black Marble Coffee Table Top Mother of Pearl Inlay Furniture Decors H1883B"
    }
  },
  {
    "id": "ent-inv-invec5089",
    "name": "Invoice #26343874",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-26343874",
    "linked_entity_name": "Invoice #26343874",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-ec5089",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Invoice #26343874",
    "properties": {
      "InvoiceNo": "26343874",
      "Total": "$3490,29",
      "Date": "07/17/2013"
    }
  },
  {
    "id": "ent-org-832239",
    "name": "Herring-Floyd",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-2239",
    "linked_entity_name": "Herring-Floyd",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-ec5089",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Client: Herring-Floyd",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-mon-8863453",
    "name": "$3490,29",
    "type": "Money",
    "mentions_count": 1,
    "linked_entity_id": "MON-3453",
    "linked_entity_name": "$3490,29",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-ec5089",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Total: $3490,29",
    "properties": {
      "GrossTotal": "$3490,29"
    }
  },
  {
    "id": "ent-prod-1445810",
    "name": "Microsoft Xbox One X 1TB 4k Ultra HD Console black controller works great 1787",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-5810",
    "linked_entity_name": "Microsoft Xbox One X 1TB 4k Ultra HD Console black controller works great 1787",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-ec5089",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Item: Microsoft Xbox One X 1TB 4k Ultra HD Console black controller works great 1787",
    "properties": {
      "LineItem": "Microsoft Xbox One X 1TB 4k Ultra HD Console black controller works great 1787"
    }
  },
  {
    "id": "ent-prod-9222368",
    "name": "Cables 500gb,Sony PlayStation 4 PS4 CUH 1215A Jet Black Console w/ Controller",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-2368",
    "linked_entity_name": "Cables 500gb,Sony PlayStation 4 PS4 CUH 1215A Jet Black Console w/ Controller",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-ec5089",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Item: Cables 500gb,Sony PlayStation 4 PS4 CUH 1215A Jet Black Console w/ Controller",
    "properties": {
      "LineItem": "Cables 500gb,Sony PlayStation 4 PS4 CUH 1215A Jet Black Console w/ Controller"
    }
  },
  {
    "id": "ent-prod-5796105",
    "name": "PS2 Slim Console System SCPH-77000 PINK Playstation 2 Tested",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-6105",
    "linked_entity_name": "PS2 Slim Console System SCPH-77000 PINK Playstation 2 Tested",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-ec5089",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Item: PS2 Slim Console System SCPH-77000 PINK Playstation 2 Tested",
    "properties": {
      "LineItem": "PS2 Slim Console System SCPH-77000 PINK Playstation 2 Tested"
    }
  },
  {
    "id": "ent-prod-8845561",
    "name": "Nintendo Game Boy Micro Console - Black (OXYSFBB)",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-5561",
    "linked_entity_name": "Nintendo Game Boy Micro Console - Black (OXYSFBB)",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-ec5089",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Item: Nintendo Game Boy Micro Console - Black (OXYSFBB)",
    "properties": {
      "LineItem": "Nintendo Game Boy Micro Console - Black (OXYSFBB)"
    }
  },
  {
    "id": "ent-inv-inv478f13",
    "name": "Invoice #12222347",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-12222347",
    "linked_entity_name": "Invoice #12222347",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-478f13",
    "source_doc_name": "KatanaML_Invoice_0008.png",
    "source_page": 1,
    "evidence_text": "Invoice #12222347",
    "properties": {
      "InvoiceNo": "12222347",
      "Total": "$ 136,13",
      "Date": "03/18/2017"
    }
  },
  {
    "id": "ent-org-204004",
    "name": "Gregory, Patterson and Fischer",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-4004",
    "linked_entity_name": "Gregory, Patterson and Fischer",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-478f13",
    "source_doc_name": "KatanaML_Invoice_0008.png",
    "source_page": 1,
    "evidence_text": "Seller: Gregory, Patterson and Fischer",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Seller"
    }
  },
  {
    "id": "ent-org-4346539",
    "name": "Wilson PLC",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-6539",
    "linked_entity_name": "Wilson PLC",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-478f13",
    "source_doc_name": "KatanaML_Invoice_0008.png",
    "source_page": 1,
    "evidence_text": "Client: Wilson PLC",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-mon-2311014",
    "name": "$ 136,13",
    "type": "Money",
    "mentions_count": 1,
    "linked_entity_id": "MON-1014",
    "linked_entity_name": "$ 136,13",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-478f13",
    "source_doc_name": "KatanaML_Invoice_0008.png",
    "source_page": 1,
    "evidence_text": "Total: $ 136,13",
    "properties": {
      "GrossTotal": "$ 136,13"
    }
  },
  {
    "id": "ent-prod-1171993",
    "name": "Zara Yellow Shift Dress XS",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-1993",
    "linked_entity_name": "Zara Yellow Shift Dress XS",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-478f13",
    "source_doc_name": "KatanaML_Invoice_0008.png",
    "source_page": 1,
    "evidence_text": "Item: Zara Yellow Shift Dress XS",
    "properties": {
      "LineItem": "Zara Yellow Shift Dress XS"
    }
  },
  {
    "id": "ent-inv-inv02e72c",
    "name": "Invoice #25698672",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-25698672",
    "linked_entity_name": "Invoice #25698672",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-02e72c",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Invoice #25698672",
    "properties": {
      "InvoiceNo": "25698672",
      "Total": "$ 127,00",
      "Date": "08/01/2015"
    }
  },
  {
    "id": "ent-org-7403433",
    "name": "Manning-Ho",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-3433",
    "linked_entity_name": "Manning-Ho",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-02e72c",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Client: Manning-Ho",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-mon-756377",
    "name": "$ 127,00",
    "type": "Money",
    "mentions_count": 1,
    "linked_entity_id": "MON-6377",
    "linked_entity_name": "$ 127,00",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-02e72c",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Total: $ 127,00",
    "properties": {
      "GrossTotal": "$ 127,00"
    }
  },
  {
    "id": "ent-prod-2629589",
    "name": "CCNA 200-301 50 GB AUG 2020 Cisco Video/Official Books/Exam Dumps/Licences",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-9589",
    "linked_entity_name": "CCNA 200-301 50 GB AUG 2020 Cisco Video/Official Books/Exam Dumps/Licences",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-02e72c",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Item: CCNA 200-301 50 GB AUG 2020 Cisco Video/Official Books/Exam Dumps/Licences",
    "properties": {
      "LineItem": "CCNA 200-301 50 GB AUG 2020 Cisco Video/Official Books/Exam Dumps/Licences"
    }
  },
  {
    "id": "ent-prod-8098267",
    "name": "Tales from the Buffalo Bills",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-8267",
    "linked_entity_name": "Tales from the Buffalo Bills",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-02e72c",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Item: Tales from the Buffalo Bills",
    "properties": {
      "LineItem": "Tales from the Buffalo Bills"
    }
  },
  {
    "id": "ent-prod-5447822",
    "name": "A boy who grew up eating nightmare It's Okay to Not Be Okay Picturebook 00000000",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-7822",
    "linked_entity_name": "A boy who grew up eating nightmare It's Okay to Not Be Okay Picturebook 00000000",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-02e72c",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Item: A boy who grew up eating nightmare It's Okay to Not Be Okay Picturebook 00000000",
    "properties": {
      "LineItem": "A boy who grew up eating nightmare It's Okay to Not Be Okay Picturebook 00000000"
    }
  },
  {
    "id": "ent-inv-inv30b66e",
    "name": "Invoice #24048799",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-24048799",
    "linked_entity_name": "Invoice #24048799",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-30b66e",
    "source_doc_name": "KatanaML_Invoice_0010.png",
    "source_page": 1,
    "evidence_text": "Invoice #24048799",
    "properties": {
      "InvoiceNo": "24048799",
      "Total": "$5,45",
      "Date": "05/21/2014"
    }
  },
  {
    "id": "ent-org-7388746",
    "name": "Rodriguez-jackson",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-8746",
    "linked_entity_name": "Rodriguez-jackson",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-30b66e",
    "source_doc_name": "KatanaML_Invoice_0010.png",
    "source_page": 1,
    "evidence_text": "Seller: Rodriguez-jackson",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Seller"
    }
  },
  {
    "id": "ent-org-380159",
    "name": "Williams, Fletcher and Taylor",
    "type": "Organization",
    "mentions_count": 1,
    "linked_entity_id": "ORG-159",
    "linked_entity_name": "Williams, Fletcher and Taylor",
    "confidence": 0.98,
    "status": "Verified",
    "source_doc_id": "inv-30b66e",
    "source_doc_name": "KatanaML_Invoice_0010.png",
    "source_page": 1,
    "evidence_text": "Client: Williams, Fletcher and Taylor",
    "properties": {
      "Category": "Corporate Entity",
      "Role": "Client"
    }
  },
  {
    "id": "ent-mon-1747374",
    "name": "$5,45",
    "type": "Money",
    "mentions_count": 1,
    "linked_entity_id": "MON-7374",
    "linked_entity_name": "$5,45",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-30b66e",
    "source_doc_name": "KatanaML_Invoice_0010.png",
    "source_page": 1,
    "evidence_text": "Total: $5,45",
    "properties": {
      "GrossTotal": "$5,45"
    }
  },
  {
    "id": "ent-prod-4364684",
    "name": "Large Blue Long Sleeve Fit & Flare Dress Elastic Waist Crochet Detail Bohemian",
    "type": "Product",
    "mentions_count": 1,
    "linked_entity_id": "PROD-4684",
    "linked_entity_name": "Large Blue Long Sleeve Fit & Flare Dress Elastic Waist Crochet Detail Bohemian",
    "confidence": 0.97,
    "status": "Verified",
    "source_doc_id": "inv-30b66e",
    "source_doc_name": "KatanaML_Invoice_0010.png",
    "source_page": 1,
    "evidence_text": "Item: Large Blue Long Sleeve Fit & Flare Dress Elastic Waist Crochet Detail Bohemian",
    "properties": {
      "LineItem": "Large Blue Long Sleeve Fit & Flare Dress Elastic Waist Crochet Detail Bohemian"
    }
  },
  {
    "id": "ent-inv-invb828e8",
    "name": "Invoice #72455228",
    "type": "Invoice",
    "mentions_count": 1,
    "linked_entity_id": "INV-72455228",
    "linked_entity_name": "Invoice #72455228",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-b828e8",
    "source_doc_name": "KatanaML_Invoice_0011.png",
    "source_page": 1,
    "evidence_text": "Invoice #72455228",
    "properties": {
      "InvoiceNo": "72455228",
      "Total": "$2155,98",
      "Date": "05/11/2021"
    }
  }
];

export const INITIAL_RELATIONSHIPS = [
  {
    "id": "rel-iss-inv-a140fb",
    "source_entity_name": "Client:",
    "source_entity_id": "ent-org-4574175",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #97159829",
    "target_entity_id": "ent-inv-inva140fb",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Client: issued Invoice #97159829"
  },
  {
    "id": "rel-bill-inv-a140fb",
    "source_entity_name": "Invoice #97159829",
    "source_entity_id": "ent-inv-inva140fb",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Bradley-Andrade",
    "target_entity_id": "ent-org-9287822",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Invoice #97159829 billed to Bradley-Andrade"
  },
  {
    "id": "rel-item-inv-a140fb-0",
    "source_entity_name": "Invoice #97159829",
    "source_entity_id": "ent-inv-inva140fb",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Bradley-Andrade",
    "target_entity_id": "ent-prod-9287822",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Invoice #97159829 contains line item: Bradley-Andrade"
  },
  {
    "id": "rel-item-inv-a140fb-1",
    "source_entity_name": "Invoice #97159829",
    "source_entity_id": "ent-inv-inva140fb",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Castro PLC",
    "target_entity_id": "ent-prod-1633531",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Invoice #97159829 contains line item: Castro PLC"
  },
  {
    "id": "rel-item-inv-a140fb-2",
    "source_entity_name": "Invoice #97159829",
    "source_entity_id": "ent-inv-inva140fb",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "9879ElizabethCommon",
    "target_entity_id": "ent-prod-9705099",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Invoice #97159829 contains line item: 9879ElizabethCommon"
  },
  {
    "id": "rel-item-inv-a140fb-3",
    "source_entity_name": "Invoice #97159829",
    "source_entity_id": "ent-inv-inva140fb",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Unit9678Box9664",
    "target_entity_id": "ent-prod-7335532",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Invoice #97159829 contains line item: Unit9678Box9664"
  },
  {
    "id": "rel-iss-inv-e42ddc",
    "source_entity_name": "Client:",
    "source_entity_id": "ent-org-4574175",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #13194726",
    "target_entity_id": "ent-inv-inve42ddc",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "evidence_text": "Client: issued Invoice #13194726"
  },
  {
    "id": "rel-bill-inv-e42ddc",
    "source_entity_name": "Invoice #13194726",
    "source_entity_id": "ent-inv-inve42ddc",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Hopkins and Sons",
    "target_entity_id": "ent-org-3119633",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "evidence_text": "Invoice #13194726 billed to Hopkins and Sons"
  },
  {
    "id": "rel-item-inv-e42ddc-0",
    "source_entity_name": "Invoice #13194726",
    "source_entity_id": "ent-inv-inve42ddc",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Hopkins and Sons",
    "target_entity_id": "ent-prod-3119633",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "evidence_text": "Invoice #13194726 contains line item: Hopkins and Sons"
  },
  {
    "id": "rel-item-inv-e42ddc-1",
    "source_entity_name": "Invoice #13194726",
    "source_entity_id": "ent-inv-inve42ddc",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Sims PLC",
    "target_entity_id": "ent-prod-631311",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "evidence_text": "Invoice #13194726 contains line item: Sims PLC"
  },
  {
    "id": "rel-item-inv-e42ddc-2",
    "source_entity_name": "Invoice #13194726",
    "source_entity_id": "ent-inv-inve42ddc",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "62283FloresTunnel",
    "target_entity_id": "ent-prod-2040656",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "evidence_text": "Invoice #13194726 contains line item: 62283FloresTunnel"
  },
  {
    "id": "rel-item-inv-e42ddc-3",
    "source_entity_name": "Invoice #13194726",
    "source_entity_id": "ent-inv-inve42ddc",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "USS Kramer",
    "target_entity_id": "ent-prod-3163003",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "evidence_text": "Invoice #13194726 contains line item: USS Kramer"
  },
  {
    "id": "rel-iss-inv-01e4d9",
    "source_entity_name": "Client:",
    "source_entity_id": "ent-org-4574175",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #62517865",
    "target_entity_id": "ent-inv-inv01e4d9",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "evidence_text": "Client: issued Invoice #62517865"
  },
  {
    "id": "rel-bill-inv-01e4d9",
    "source_entity_name": "Invoice #62517865",
    "source_entity_id": "ent-inv-inv01e4d9",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Trujillo-Hunt",
    "target_entity_id": "ent-org-7172870",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "evidence_text": "Invoice #62517865 billed to Trujillo-Hunt"
  },
  {
    "id": "rel-item-inv-01e4d9-0",
    "source_entity_name": "Invoice #62517865",
    "source_entity_id": "ent-inv-inv01e4d9",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Trujillo-Hunt",
    "target_entity_id": "ent-prod-7172870",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "evidence_text": "Invoice #62517865 contains line item: Trujillo-Hunt"
  },
  {
    "id": "rel-item-inv-01e4d9-1",
    "source_entity_name": "Invoice #62517865",
    "source_entity_id": "ent-inv-inv01e4d9",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Lee and Sons",
    "target_entity_id": "ent-prod-3242361",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "evidence_text": "Invoice #62517865 contains line item: Lee and Sons"
  },
  {
    "id": "rel-item-inv-01e4d9-2",
    "source_entity_name": "Invoice #62517865",
    "source_entity_id": "ent-inv-inv01e4d9",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "430MarkFerrySuite495",
    "target_entity_id": "ent-prod-1966280",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "evidence_text": "Invoice #62517865 contains line item: 430MarkFerrySuite495"
  },
  {
    "id": "rel-item-inv-01e4d9-3",
    "source_entity_name": "Invoice #62517865",
    "source_entity_id": "ent-inv-inv01e4d9",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "8552KarenIslands",
    "target_entity_id": "ent-prod-7086188",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "evidence_text": "Invoice #62517865 contains line item: 8552KarenIslands"
  },
  {
    "id": "rel-iss-inv-aff77b",
    "source_entity_name": "Client:",
    "source_entity_id": "ent-org-4574175",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #56014042",
    "target_entity_id": "ent-inv-invaff77b",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "evidence_text": "Client: issued Invoice #56014042"
  },
  {
    "id": "rel-bill-inv-aff77b",
    "source_entity_name": "Invoice #56014042",
    "source_entity_id": "ent-inv-invaff77b",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Nichols-Barajas",
    "target_entity_id": "ent-org-2620506",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "evidence_text": "Invoice #56014042 billed to Nichols-Barajas"
  },
  {
    "id": "rel-item-inv-aff77b-0",
    "source_entity_name": "Invoice #56014042",
    "source_entity_id": "ent-inv-invaff77b",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Nichols-Barajas",
    "target_entity_id": "ent-prod-2620506",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "evidence_text": "Invoice #56014042 contains line item: Nichols-Barajas"
  },
  {
    "id": "rel-item-inv-aff77b-1",
    "source_entity_name": "Invoice #56014042",
    "source_entity_id": "ent-inv-invaff77b",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Mckay PLC",
    "target_entity_id": "ent-prod-3630372",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "evidence_text": "Invoice #56014042 contains line item: Mckay PLC"
  },
  {
    "id": "rel-item-inv-aff77b-2",
    "source_entity_name": "Invoice #56014042",
    "source_entity_id": "ent-inv-invaff77b",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "3882StacyVilleApt.488",
    "target_entity_id": "ent-prod-769002",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "evidence_text": "Invoice #56014042 contains line item: 3882StacyVilleApt.488"
  },
  {
    "id": "rel-item-inv-aff77b-3",
    "source_entity_name": "Invoice #56014042",
    "source_entity_id": "ent-inv-invaff77b",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "5542DanielleDriveSuite381",
    "target_entity_id": "ent-prod-8548138",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "evidence_text": "Invoice #56014042 contains line item: 5542DanielleDriveSuite381"
  },
  {
    "id": "rel-iss-inv-000827",
    "source_entity_name": "Client:",
    "source_entity_id": "ent-org-4574175",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #16662010",
    "target_entity_id": "ent-inv-inv000827",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "evidence_text": "Client: issued Invoice #16662010"
  },
  {
    "id": "rel-bill-inv-000827",
    "source_entity_name": "Invoice #16662010",
    "source_entity_id": "ent-inv-inv000827",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Smith-Cook",
    "target_entity_id": "ent-org-6112694",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "evidence_text": "Invoice #16662010 billed to Smith-Cook"
  },
  {
    "id": "rel-item-inv-000827-0",
    "source_entity_name": "Invoice #16662010",
    "source_entity_id": "ent-inv-inv000827",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Smith-Cook",
    "target_entity_id": "ent-prod-6112694",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "evidence_text": "Invoice #16662010 contains line item: Smith-Cook"
  },
  {
    "id": "rel-item-inv-000827-1",
    "source_entity_name": "Invoice #16662010",
    "source_entity_id": "ent-inv-inv000827",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Snyder-Johnson",
    "target_entity_id": "ent-prod-8757529",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "evidence_text": "Invoice #16662010 contains line item: Snyder-Johnson"
  },
  {
    "id": "rel-item-inv-000827-2",
    "source_entity_name": "Invoice #16662010",
    "source_entity_id": "ent-inv-inv000827",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "174JustinCauseway",
    "target_entity_id": "ent-prod-6066884",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "evidence_text": "Invoice #16662010 contains line item: 174JustinCauseway"
  },
  {
    "id": "rel-item-inv-000827-3",
    "source_entity_name": "Invoice #16662010",
    "source_entity_id": "ent-inv-inv000827",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "05173HeatherMill",
    "target_entity_id": "ent-prod-809745",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "evidence_text": "Invoice #16662010 contains line item: 05173HeatherMill"
  },
  {
    "id": "rel-iss-inv-4dad72",
    "source_entity_name": "Client:",
    "source_entity_id": "ent-org-4574175",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #27543706",
    "target_entity_id": "ent-inv-inv4dad72",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "evidence_text": "Client: issued Invoice #27543706"
  },
  {
    "id": "rel-bill-inv-4dad72",
    "source_entity_name": "Invoice #27543706",
    "source_entity_id": "ent-inv-inv4dad72",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Kaiser,Hays and Cook",
    "target_entity_id": "ent-org-8884538",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "evidence_text": "Invoice #27543706 billed to Kaiser,Hays and Cook"
  },
  {
    "id": "rel-item-inv-4dad72-0",
    "source_entity_name": "Invoice #27543706",
    "source_entity_id": "ent-inv-inv4dad72",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Kaiser,Hays and Cook",
    "target_entity_id": "ent-prod-8884538",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "evidence_text": "Invoice #27543706 contains line item: Kaiser,Hays and Cook"
  },
  {
    "id": "rel-item-inv-4dad72-1",
    "source_entity_name": "Invoice #27543706",
    "source_entity_id": "ent-inv-inv4dad72",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Holland PLC",
    "target_entity_id": "ent-prod-6424242",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "evidence_text": "Invoice #27543706 contains line item: Holland PLC"
  },
  {
    "id": "rel-item-inv-4dad72-2",
    "source_entity_name": "Invoice #27543706",
    "source_entity_id": "ent-inv-inv4dad72",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "460RichardForge",
    "target_entity_id": "ent-prod-2176862",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "evidence_text": "Invoice #27543706 contains line item: 460RichardForge"
  },
  {
    "id": "rel-item-inv-4dad72-3",
    "source_entity_name": "Invoice #27543706",
    "source_entity_id": "ent-inv-inv4dad72",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "10833HillCourtsSuite606",
    "target_entity_id": "ent-prod-5308930",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "evidence_text": "Invoice #27543706 contains line item: 10833HillCourtsSuite606"
  },
  {
    "id": "rel-iss-inv-e509b2",
    "source_entity_name": "Client:",
    "source_entity_id": "ent-org-4574175",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #26343874",
    "target_entity_id": "ent-inv-inve509b2",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "evidence_text": "Client: issued Invoice #26343874"
  },
  {
    "id": "rel-bill-inv-e509b2",
    "source_entity_name": "Invoice #26343874",
    "source_entity_id": "ent-inv-inve509b2",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Smith Ltd",
    "target_entity_id": "ent-org-9476813",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "evidence_text": "Invoice #26343874 billed to Smith Ltd"
  },
  {
    "id": "rel-item-inv-e509b2-0",
    "source_entity_name": "Invoice #26343874",
    "source_entity_id": "ent-inv-inve509b2",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Smith Ltd",
    "target_entity_id": "ent-prod-9476813",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "evidence_text": "Invoice #26343874 contains line item: Smith Ltd"
  },
  {
    "id": "rel-item-inv-e509b2-1",
    "source_entity_name": "Invoice #26343874",
    "source_entity_id": "ent-inv-inve509b2",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Herring-Floyd",
    "target_entity_id": "ent-prod-832239",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "evidence_text": "Invoice #26343874 contains line item: Herring-Floyd"
  },
  {
    "id": "rel-item-inv-e509b2-2",
    "source_entity_name": "Invoice #26343874",
    "source_entity_id": "ent-inv-inve509b2",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "290Jodi Gardens",
    "target_entity_id": "ent-prod-2335575",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "evidence_text": "Invoice #26343874 contains line item: 290Jodi Gardens"
  },
  {
    "id": "rel-item-inv-e509b2-3",
    "source_entity_name": "Invoice #26343874",
    "source_entity_id": "ent-inv-inve509b2",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "8113Hansen Cliff Apt.826",
    "target_entity_id": "ent-prod-7959133",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "evidence_text": "Invoice #26343874 contains line item: 8113Hansen Cliff Apt.826"
  },
  {
    "id": "rel-iss-inv-cd310a",
    "source_entity_name": "Client:",
    "source_entity_id": "ent-org-4574175",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #12222347",
    "target_entity_id": "ent-inv-invcd310a",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "evidence_text": "Client: issued Invoice #12222347"
  },
  {
    "id": "rel-bill-inv-cd310a",
    "source_entity_name": "Invoice #12222347",
    "source_entity_id": "ent-inv-invcd310a",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Gregory,Patterson and Fischer",
    "target_entity_id": "ent-org-5012561",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "evidence_text": "Invoice #12222347 billed to Gregory,Patterson and Fischer"
  },
  {
    "id": "rel-item-inv-cd310a-0",
    "source_entity_name": "Invoice #12222347",
    "source_entity_id": "ent-inv-invcd310a",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Gregory,Patterson and Fischer",
    "target_entity_id": "ent-prod-5012561",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "evidence_text": "Invoice #12222347 contains line item: Gregory,Patterson and Fischer"
  },
  {
    "id": "rel-item-inv-cd310a-1",
    "source_entity_name": "Invoice #12222347",
    "source_entity_id": "ent-inv-invcd310a",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Wilson PLC",
    "target_entity_id": "ent-prod-4346539",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "evidence_text": "Invoice #12222347 contains line item: Wilson PLC"
  },
  {
    "id": "rel-item-inv-cd310a-2",
    "source_entity_name": "Invoice #12222347",
    "source_entity_id": "ent-inv-invcd310a",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "439Hunter Land",
    "target_entity_id": "ent-prod-5756888",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "evidence_text": "Invoice #12222347 contains line item: 439Hunter Land"
  },
  {
    "id": "rel-item-inv-cd310a-3",
    "source_entity_name": "Invoice #12222347",
    "source_entity_id": "ent-inv-invcd310a",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "667 Wu Ports",
    "target_entity_id": "ent-prod-3677839",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "evidence_text": "Invoice #12222347 contains line item: 667 Wu Ports"
  },
  {
    "id": "rel-iss-inv-79ebc8",
    "source_entity_name": "Client:",
    "source_entity_id": "ent-org-4574175",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #25698672",
    "target_entity_id": "ent-inv-inv79ebc8",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "evidence_text": "Client: issued Invoice #25698672"
  },
  {
    "id": "rel-bill-inv-79ebc8",
    "source_entity_name": "Invoice #25698672",
    "source_entity_id": "ent-inv-inv79ebc8",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Gordon, Alvarado and Jones",
    "target_entity_id": "ent-org-9070621",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "evidence_text": "Invoice #25698672 billed to Gordon, Alvarado and Jones"
  },
  {
    "id": "rel-item-inv-79ebc8-0",
    "source_entity_name": "Invoice #25698672",
    "source_entity_id": "ent-inv-inv79ebc8",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Gordon, Alvarado and Jones",
    "target_entity_id": "ent-prod-9070621",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "evidence_text": "Invoice #25698672 contains line item: Gordon, Alvarado and Jones"
  },
  {
    "id": "rel-item-inv-79ebc8-1",
    "source_entity_name": "Invoice #25698672",
    "source_entity_id": "ent-inv-inv79ebc8",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Manning-Ho",
    "target_entity_id": "ent-prod-7403433",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "evidence_text": "Invoice #25698672 contains line item: Manning-Ho"
  },
  {
    "id": "rel-item-inv-79ebc8-2",
    "source_entity_name": "Invoice #25698672",
    "source_entity_id": "ent-inv-inv79ebc8",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "943SeanParkSuite284",
    "target_entity_id": "ent-prod-6977573",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "evidence_text": "Invoice #25698672 contains line item: 943SeanParkSuite284"
  },
  {
    "id": "rel-item-inv-79ebc8-3",
    "source_entity_name": "Invoice #25698672",
    "source_entity_id": "ent-inv-inv79ebc8",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "92026MichaelTerraceApt.138",
    "target_entity_id": "ent-prod-1315053",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "evidence_text": "Invoice #25698672 contains line item: 92026MichaelTerraceApt.138"
  },
  {
    "id": "rel-iss-inv-9dfe5a",
    "source_entity_name": "Client:",
    "source_entity_id": "ent-org-4574175",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #24048799",
    "target_entity_id": "ent-inv-inv9dfe5a",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "evidence_text": "Client: issued Invoice #24048799"
  },
  {
    "id": "rel-bill-inv-9dfe5a",
    "source_entity_name": "Invoice #24048799",
    "source_entity_id": "ent-inv-inv9dfe5a",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Rodriguez-Jackson",
    "target_entity_id": "ent-org-1288709",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "evidence_text": "Invoice #24048799 billed to Rodriguez-Jackson"
  },
  {
    "id": "rel-item-inv-9dfe5a-0",
    "source_entity_name": "Invoice #24048799",
    "source_entity_id": "ent-inv-inv9dfe5a",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Rodriguez-Jackson",
    "target_entity_id": "ent-prod-1288709",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "evidence_text": "Invoice #24048799 contains line item: Rodriguez-Jackson"
  },
  {
    "id": "rel-item-inv-9dfe5a-1",
    "source_entity_name": "Invoice #24048799",
    "source_entity_id": "ent-inv-inv9dfe5a",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Williams,FletcherandTaylor",
    "target_entity_id": "ent-prod-6317976",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "evidence_text": "Invoice #24048799 contains line item: Williams,FletcherandTaylor"
  },
  {
    "id": "rel-item-inv-9dfe5a-2",
    "source_entity_name": "Invoice #24048799",
    "source_entity_id": "ent-inv-inv9dfe5a",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "4804RileyRowSuite059",
    "target_entity_id": "ent-prod-9109457",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "evidence_text": "Invoice #24048799 contains line item: 4804RileyRowSuite059"
  },
  {
    "id": "rel-item-inv-9dfe5a-3",
    "source_entity_name": "Invoice #24048799",
    "source_entity_id": "ent-inv-inv9dfe5a",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "9371HarveyPortSuite901",
    "target_entity_id": "ent-prod-5861370",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "evidence_text": "Invoice #24048799 contains line item: 9371HarveyPortSuite901"
  },
  {
    "id": "rel-iss-inv-44deef",
    "source_entity_name": "Client:",
    "source_entity_id": "ent-org-4574175",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #72455228",
    "target_entity_id": "ent-inv-inv44deef",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "evidence_text": "Client: issued Invoice #72455228"
  },
  {
    "id": "rel-bill-inv-44deef",
    "source_entity_name": "Invoice #72455228",
    "source_entity_id": "ent-inv-inv44deef",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Potts,Reed and Miller",
    "target_entity_id": "ent-org-5570437",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "evidence_text": "Invoice #72455228 billed to Potts,Reed and Miller"
  },
  {
    "id": "rel-item-inv-44deef-0",
    "source_entity_name": "Invoice #72455228",
    "source_entity_id": "ent-inv-inv44deef",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Potts,Reed and Miller",
    "target_entity_id": "ent-prod-5570437",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "evidence_text": "Invoice #72455228 contains line item: Potts,Reed and Miller"
  },
  {
    "id": "rel-item-inv-44deef-1",
    "source_entity_name": "Invoice #72455228",
    "source_entity_id": "ent-inv-inv44deef",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Brady LLC",
    "target_entity_id": "ent-prod-1975036",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "evidence_text": "Invoice #72455228 contains line item: Brady LLC"
  },
  {
    "id": "rel-item-inv-44deef-2",
    "source_entity_name": "Invoice #72455228",
    "source_entity_id": "ent-inv-inv44deef",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "USCGCWeeks",
    "target_entity_id": "ent-prod-5099047",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "evidence_text": "Invoice #72455228 contains line item: USCGCWeeks"
  },
  {
    "id": "rel-item-inv-44deef-3",
    "source_entity_name": "Invoice #72455228",
    "source_entity_id": "ent-inv-inv44deef",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "26039AnitaStravenue",
    "target_entity_id": "ent-prod-7094123",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "evidence_text": "Invoice #72455228 contains line item: 26039AnitaStravenue"
  },
  {
    "id": "rel-iss-inv-0fe9bc",
    "source_entity_name": "Client:",
    "source_entity_id": "ent-org-4574175",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #58478169",
    "target_entity_id": "ent-inv-inv0fe9bc",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "evidence_text": "Client: issued Invoice #58478169"
  },
  {
    "id": "rel-bill-inv-0fe9bc",
    "source_entity_name": "Invoice #58478169",
    "source_entity_id": "ent-inv-inv0fe9bc",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Conley Ltd",
    "target_entity_id": "ent-org-3853518",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "evidence_text": "Invoice #58478169 billed to Conley Ltd"
  },
  {
    "id": "rel-item-inv-0fe9bc-0",
    "source_entity_name": "Invoice #58478169",
    "source_entity_id": "ent-inv-inv0fe9bc",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Conley Ltd",
    "target_entity_id": "ent-prod-3853518",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "evidence_text": "Invoice #58478169 contains line item: Conley Ltd"
  },
  {
    "id": "rel-item-inv-0fe9bc-1",
    "source_entity_name": "Invoice #58478169",
    "source_entity_id": "ent-inv-inv0fe9bc",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Wells-Avery",
    "target_entity_id": "ent-prod-1429149",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "evidence_text": "Invoice #58478169 contains line item: Wells-Avery"
  },
  {
    "id": "rel-item-inv-0fe9bc-2",
    "source_entity_name": "Invoice #58478169",
    "source_entity_id": "ent-inv-inv0fe9bc",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "262 Jeffrey Underpass",
    "target_entity_id": "ent-prod-8242039",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "evidence_text": "Invoice #58478169 contains line item: 262 Jeffrey Underpass"
  },
  {
    "id": "rel-item-inv-0fe9bc-3",
    "source_entity_name": "Invoice #58478169",
    "source_entity_id": "ent-inv-inv0fe9bc",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "7065AlejandroForks",
    "target_entity_id": "ent-prod-6760114",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "evidence_text": "Invoice #58478169 contains line item: 7065AlejandroForks"
  },
  {
    "id": "rel-iss-inv-0d91cc",
    "source_entity_name": "Client:",
    "source_entity_id": "ent-org-4574175",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #90508672",
    "target_entity_id": "ent-inv-inv0d91cc",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "evidence_text": "Client: issued Invoice #90508672"
  },
  {
    "id": "rel-bill-inv-0d91cc",
    "source_entity_name": "Invoice #90508672",
    "source_entity_id": "ent-inv-inv0d91cc",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Stone-Waller",
    "target_entity_id": "ent-org-5809705",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "evidence_text": "Invoice #90508672 billed to Stone-Waller"
  },
  {
    "id": "rel-item-inv-0d91cc-0",
    "source_entity_name": "Invoice #90508672",
    "source_entity_id": "ent-inv-inv0d91cc",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Stone-Waller",
    "target_entity_id": "ent-prod-5809705",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "evidence_text": "Invoice #90508672 contains line item: Stone-Waller"
  },
  {
    "id": "rel-item-inv-0d91cc-1",
    "source_entity_name": "Invoice #90508672",
    "source_entity_id": "ent-inv-inv0d91cc",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Shaw Group",
    "target_entity_id": "ent-prod-1623272",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "evidence_text": "Invoice #90508672 contains line item: Shaw Group"
  },
  {
    "id": "rel-item-inv-0d91cc-2",
    "source_entity_name": "Invoice #90508672",
    "source_entity_id": "ent-inv-inv0d91cc",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "53428PeterDaleApt.293",
    "target_entity_id": "ent-prod-9676504",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "evidence_text": "Invoice #90508672 contains line item: 53428PeterDaleApt.293"
  },
  {
    "id": "rel-item-inv-0d91cc-3",
    "source_entity_name": "Invoice #90508672",
    "source_entity_id": "ent-inv-inv0d91cc",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "58420JohnTurnpikeSuite767",
    "target_entity_id": "ent-prod-7457625",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "evidence_text": "Invoice #90508672 contains line item: 58420JohnTurnpikeSuite767"
  },
  {
    "id": "rel-iss-inv-a0b568",
    "source_entity_name": "Client:",
    "source_entity_id": "ent-org-4574175",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #96051364",
    "target_entity_id": "ent-inv-inva0b568",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "evidence_text": "Client: issued Invoice #96051364"
  },
  {
    "id": "rel-bill-inv-a0b568",
    "source_entity_name": "Invoice #96051364",
    "source_entity_id": "ent-inv-inva0b568",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Jackson Ltd",
    "target_entity_id": "ent-org-9658063",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "evidence_text": "Invoice #96051364 billed to Jackson Ltd"
  },
  {
    "id": "rel-item-inv-a0b568-0",
    "source_entity_name": "Invoice #96051364",
    "source_entity_id": "ent-inv-inva0b568",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Jackson Ltd",
    "target_entity_id": "ent-prod-9658063",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "evidence_text": "Invoice #96051364 contains line item: Jackson Ltd"
  },
  {
    "id": "rel-item-inv-a0b568-1",
    "source_entity_name": "Invoice #96051364",
    "source_entity_id": "ent-inv-inva0b568",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Williams,Fowler andPhillips",
    "target_entity_id": "ent-prod-9933537",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "evidence_text": "Invoice #96051364 contains line item: Williams,Fowler andPhillips"
  },
  {
    "id": "rel-item-inv-a0b568-2",
    "source_entity_name": "Invoice #96051364",
    "source_entity_id": "ent-inv-inva0b568",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "134CatherineValleyApt.756",
    "target_entity_id": "ent-prod-9521095",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "evidence_text": "Invoice #96051364 contains line item: 134CatherineValleyApt.756"
  },
  {
    "id": "rel-item-inv-a0b568-3",
    "source_entity_name": "Invoice #96051364",
    "source_entity_id": "ent-inv-inva0b568",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "115 MccormickKnolls",
    "target_entity_id": "ent-prod-3240756",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "evidence_text": "Invoice #96051364 contains line item: 115 MccormickKnolls"
  },
  {
    "id": "rel-iss-inv-01ba2b",
    "source_entity_name": "Client:",
    "source_entity_id": "ent-org-4574175",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #67856369",
    "target_entity_id": "ent-inv-inv01ba2b",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "evidence_text": "Client: issued Invoice #67856369"
  },
  {
    "id": "rel-bill-inv-01ba2b",
    "source_entity_name": "Invoice #67856369",
    "source_entity_id": "ent-inv-inv01ba2b",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Pierce PLC",
    "target_entity_id": "ent-org-7307934",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "evidence_text": "Invoice #67856369 billed to Pierce PLC"
  },
  {
    "id": "rel-item-inv-01ba2b-0",
    "source_entity_name": "Invoice #67856369",
    "source_entity_id": "ent-inv-inv01ba2b",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Pierce PLC",
    "target_entity_id": "ent-prod-7307934",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "evidence_text": "Invoice #67856369 contains line item: Pierce PLC"
  },
  {
    "id": "rel-item-inv-01ba2b-1",
    "source_entity_name": "Invoice #67856369",
    "source_entity_id": "ent-inv-inv01ba2b",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Cochran-Alvarez",
    "target_entity_id": "ent-prod-7242341",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "evidence_text": "Invoice #67856369 contains line item: Cochran-Alvarez"
  },
  {
    "id": "rel-item-inv-01ba2b-2",
    "source_entity_name": "Invoice #67856369",
    "source_entity_id": "ent-inv-inv01ba2b",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "3454McbrideRampApt.312",
    "target_entity_id": "ent-prod-435475",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "evidence_text": "Invoice #67856369 contains line item: 3454McbrideRampApt.312"
  },
  {
    "id": "rel-item-inv-01ba2b-3",
    "source_entity_name": "Invoice #67856369",
    "source_entity_id": "ent-inv-inv01ba2b",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "488KennethMission",
    "target_entity_id": "ent-prod-5681314",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "evidence_text": "Invoice #67856369 contains line item: 488KennethMission"
  },
  {
    "id": "rel-iss-inv-4ce5ae",
    "source_entity_name": "Bradley-Andrade",
    "source_entity_id": "ent-org-9287822",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #97159829",
    "target_entity_id": "ent-inv-inv4ce5ae",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0001.png",
    "source_page": 1,
    "evidence_text": "Bradley-Andrade issued Invoice #97159829"
  },
  {
    "id": "rel-bill-inv-4ce5ae",
    "source_entity_name": "Invoice #97159829",
    "source_entity_id": "ent-inv-inv4ce5ae",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Castro PLC",
    "target_entity_id": "ent-org-1633531",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0001.png",
    "source_page": 1,
    "evidence_text": "Invoice #97159829 billed to Castro PLC"
  },
  {
    "id": "rel-tot-inv-4ce5ae",
    "source_entity_name": "Invoice #97159829",
    "source_entity_id": "ent-inv-inv4ce5ae",
    "relation_type": "HAS_TOTAL",
    "target_entity_name": "$ 978,12",
    "target_entity_id": "ent-mon-5761390",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0001.png",
    "source_page": 1,
    "evidence_text": "Gross total amount is $ 978,12"
  },
  {
    "id": "rel-item-inv-4ce5ae-0",
    "source_entity_name": "Invoice #97159829",
    "source_entity_id": "ent-inv-inv4ce5ae",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "12\" Marble Lapis Inlay Chess Table Top With 2\" Pieces & 15\" Wooden Stand W537",
    "target_entity_id": "ent-prod-8358573",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0001.png",
    "source_page": 1,
    "evidence_text": "Invoice #97159829 contains line item: 12\" Marble Lapis Inlay Chess Table Top With 2\" Pieces & 15\" Wooden Stand W537"
  },
  {
    "id": "rel-iss-inv-71287d",
    "source_entity_name": "Hopkins and Sons",
    "source_entity_id": "ent-org-3119633",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #13194726",
    "target_entity_id": "ent-inv-inv71287d",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Hopkins and Sons issued Invoice #13194726"
  },
  {
    "id": "rel-bill-inv-71287d",
    "source_entity_name": "Invoice #13194726",
    "source_entity_id": "ent-inv-inv71287d",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Sims PLC USS Kramer FPO AA",
    "target_entity_id": "ent-org-8079702",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Invoice #13194726 billed to Sims PLC USS Kramer FPO AA"
  },
  {
    "id": "rel-tot-inv-71287d",
    "source_entity_name": "Invoice #13194726",
    "source_entity_id": "ent-inv-inv71287d",
    "relation_type": "HAS_TOTAL",
    "target_entity_name": "$ 640,12",
    "target_entity_id": "ent-mon-4408487",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Gross total amount is $ 640,12"
  },
  {
    "id": "rel-item-inv-71287d-0",
    "source_entity_name": "Invoice #13194726",
    "source_entity_id": "ent-inv-inv71287d",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Beach Lunch Lounge Striped Shirt Dress Large Navy Blue White Long Sleeve Causal",
    "target_entity_id": "ent-prod-3418021",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Invoice #13194726 contains line item: Beach Lunch Lounge Striped Shirt Dress Large Navy Blue White Long Sleeve Causal"
  },
  {
    "id": "rel-item-inv-71287d-1",
    "source_entity_name": "Invoice #13194726",
    "source_entity_id": "ent-inv-inv71287d",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Jams World Hawaiian 0 Dress Rayon SZ.L",
    "target_entity_id": "ent-prod-7381999",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Invoice #13194726 contains line item: Jams World Hawaiian 0 Dress Rayon SZ.L"
  },
  {
    "id": "rel-item-inv-71287d-2",
    "source_entity_name": "Invoice #13194726",
    "source_entity_id": "ent-inv-inv71287d",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "LuLaRoe Nicole Dress Size Large 26",
    "target_entity_id": "ent-prod-8704832",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Invoice #13194726 contains line item: LuLaRoe Nicole Dress Size Large 26"
  },
  {
    "id": "rel-item-inv-71287d-3",
    "source_entity_name": "Invoice #13194726",
    "source_entity_id": "ent-inv-inv71287d",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Johnny Was Medium Linen Wrap Dress Dessert Rose Embroiderd Bohemian",
    "target_entity_id": "ent-prod-1903024",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Invoice #13194726 contains line item: Johnny Was Medium Linen Wrap Dress Dessert Rose Embroiderd Bohemian"
  },
  {
    "id": "rel-iss-inv-7a51be",
    "source_entity_name": "Trujillo-Hunt",
    "source_entity_id": "ent-org-7172870",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #62517865",
    "target_entity_id": "ent-inv-inv7a51be",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0003.png",
    "source_page": 1,
    "evidence_text": "Trujillo-Hunt issued Invoice #62517865"
  },
  {
    "id": "rel-bill-inv-7a51be",
    "source_entity_name": "Invoice #62517865",
    "source_entity_id": "ent-inv-inv7a51be",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Lee and Sons",
    "target_entity_id": "ent-org-3242361",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0003.png",
    "source_page": 1,
    "evidence_text": "Invoice #62517865 billed to Lee and Sons"
  },
  {
    "id": "rel-tot-inv-7a51be",
    "source_entity_name": "Invoice #62517865",
    "source_entity_id": "ent-inv-inv7a51be",
    "relation_type": "HAS_TOTAL",
    "target_entity_name": "$9,35",
    "target_entity_id": "ent-mon-1668282",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0003.png",
    "source_page": 1,
    "evidence_text": "Gross total amount is $9,35"
  },
  {
    "id": "rel-item-inv-7a51be-0",
    "source_entity_name": "Invoice #62517865",
    "source_entity_id": "ent-inv-inv7a51be",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Care & Repair of Furniture",
    "target_entity_id": "ent-prod-4925968",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0003.png",
    "source_page": 1,
    "evidence_text": "Invoice #62517865 contains line item: Care & Repair of Furniture"
  },
  {
    "id": "rel-iss-inv-2cdf87",
    "source_entity_name": "Nichols-Barajas",
    "source_entity_id": "ent-org-2620506",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #56014042",
    "target_entity_id": "ent-inv-inv2cdf87",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0004.png",
    "source_page": 1,
    "evidence_text": "Nichols-Barajas issued Invoice #56014042"
  },
  {
    "id": "rel-bill-inv-2cdf87",
    "source_entity_name": "Invoice #56014042",
    "source_entity_id": "ent-inv-inv2cdf87",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Mckay PLC",
    "target_entity_id": "ent-org-3630372",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0004.png",
    "source_page": 1,
    "evidence_text": "Invoice #56014042 billed to Mckay PLC"
  },
  {
    "id": "rel-tot-inv-2cdf87",
    "source_entity_name": "Invoice #56014042",
    "source_entity_id": "ent-inv-inv2cdf87",
    "relation_type": "HAS_TOTAL",
    "target_entity_name": "$65,45",
    "target_entity_id": "ent-mon-1913196",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0004.png",
    "source_page": 1,
    "evidence_text": "Gross total amount is $65,45"
  },
  {
    "id": "rel-item-inv-2cdf87-0",
    "source_entity_name": "Invoice #56014042",
    "source_entity_id": "ent-inv-inv2cdf87",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Jordan Hydro 2 (TD)-Child Size",
    "target_entity_id": "ent-prod-4116462",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0004.png",
    "source_page": 1,
    "evidence_text": "Invoice #56014042 contains line item: Jordan Hydro 2 (TD)-Child Size"
  },
  {
    "id": "rel-item-inv-2cdf87-1",
    "source_entity_name": "Invoice #56014042",
    "source_entity_id": "ent-inv-inv2cdf87",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Sketchers Energy Lights Boys Black Canvas Size 4 With Charging Cable",
    "target_entity_id": "ent-prod-5933783",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0004.png",
    "source_page": 1,
    "evidence_text": "Invoice #56014042 contains line item: Sketchers Energy Lights Boys Black Canvas Size 4 With Charging Cable"
  },
  {
    "id": "rel-iss-inv-370e7d",
    "source_entity_name": "Smith-Cook",
    "source_entity_id": "ent-org-6112694",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #16662010",
    "target_entity_id": "ent-inv-inv370e7d",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Smith-Cook issued Invoice #16662010"
  },
  {
    "id": "rel-bill-inv-370e7d",
    "source_entity_name": "Invoice #16662010",
    "source_entity_id": "ent-inv-inv370e7d",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Snyder-Johnson",
    "target_entity_id": "ent-org-8757529",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Invoice #16662010 billed to Snyder-Johnson"
  },
  {
    "id": "rel-tot-inv-370e7d",
    "source_entity_name": "Invoice #16662010",
    "source_entity_id": "ent-inv-inv370e7d",
    "relation_type": "HAS_TOTAL",
    "target_entity_name": "$2259,10",
    "target_entity_id": "ent-mon-6887007",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Gross total amount is $2259,10"
  },
  {
    "id": "rel-item-inv-370e7d-0",
    "source_entity_name": "Invoice #16662010",
    "source_entity_id": "ent-inv-inv370e7d",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working 59",
    "target_entity_id": "ent-prod-2828610",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Invoice #16662010 contains line item: Nintendo Gameboy Pocket Console Green with Box MGB-001 Japan Tested Working 59"
  },
  {
    "id": "rel-item-inv-370e7d-1",
    "source_entity_name": "Invoice #16662010",
    "source_entity_id": "ent-inv-inv370e7d",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "New Sony Playstation 4 Slim 1TB 3 Game Bundle Console. Sealed!!!",
    "target_entity_id": "ent-prod-5524807",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Invoice #16662010 contains line item: New Sony Playstation 4 Slim 1TB 3 Game Bundle Console. Sealed!!!"
  },
  {
    "id": "rel-item-inv-370e7d-2",
    "source_entity_name": "Invoice #16662010",
    "source_entity_id": "ent-inv-inv370e7d",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Atari Flashback 4 Classic Game Console 75 built in games Space Invaders Asteroid",
    "target_entity_id": "ent-prod-5908638",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Invoice #16662010 contains line item: Atari Flashback 4 Classic Game Console 75 built in games Space Invaders Asteroid"
  },
  {
    "id": "rel-item-inv-370e7d-3",
    "source_entity_name": "Invoice #16662010",
    "source_entity_id": "ent-inv-inv370e7d",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Sony PlayStation 1 PS1 Console model scph-7501",
    "target_entity_id": "ent-prod-7214192",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Invoice #16662010 contains line item: Sony PlayStation 1 PS1 Console model scph-7501"
  },
  {
    "id": "rel-iss-inv-be7fea",
    "source_entity_name": "Kaiser, Hays and Cook",
    "source_entity_id": "ent-org-7160771",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #27543706",
    "target_entity_id": "ent-inv-invbe7fea",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Kaiser, Hays and Cook issued Invoice #27543706"
  },
  {
    "id": "rel-bill-inv-be7fea",
    "source_entity_name": "Invoice #27543706",
    "source_entity_id": "ent-inv-invbe7fea",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Holland PLC",
    "target_entity_id": "ent-org-6424242",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Invoice #27543706 billed to Holland PLC"
  },
  {
    "id": "rel-tot-inv-be7fea",
    "source_entity_name": "Invoice #27543706",
    "source_entity_id": "ent-inv-invbe7fea",
    "relation_type": "HAS_TOTAL",
    "target_entity_name": "48 801,10",
    "target_entity_id": "ent-mon-5592039",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Gross total amount is 48 801,10"
  },
  {
    "id": "rel-item-inv-be7fea-0",
    "source_entity_name": "Invoice #27543706",
    "source_entity_id": "ent-inv-invbe7fea",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Marble Beautiful White Coffee Table Top Malachite Inlay Art Home Decor H5372",
    "target_entity_id": "ent-prod-6829545",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Invoice #27543706 contains line item: Marble Beautiful White Coffee Table Top Malachite Inlay Art Home Decor H5372"
  },
  {
    "id": "rel-item-inv-be7fea-1",
    "source_entity_name": "Invoice #27543706",
    "source_entity_id": "ent-inv-invbe7fea",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "15\"x15\" White Decorative Coffee Table Top Lapis Lazuli Marquetery Patio D\u00e9cor",
    "target_entity_id": "ent-prod-5400370",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Invoice #27543706 contains line item: 15\"x15\" White Decorative Coffee Table Top Lapis Lazuli Marquetery Patio D\u00e9cor"
  },
  {
    "id": "rel-item-inv-be7fea-2",
    "source_entity_name": "Invoice #27543706",
    "source_entity_id": "ent-inv-invbe7fea",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "16 Inches Marble Coffee Table Top Inlay with Multi Stone at Border Game Table",
    "target_entity_id": "ent-prod-8639923",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Invoice #27543706 contains line item: 16 Inches Marble Coffee Table Top Inlay with Multi Stone at Border Game Table"
  },
  {
    "id": "rel-item-inv-be7fea-3",
    "source_entity_name": "Invoice #27543706",
    "source_entity_id": "ent-inv-invbe7fea",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "18\" Black Marble Coffee Table Top Mother of Pearl Inlay Furniture Decors H1883B",
    "target_entity_id": "ent-prod-1706580",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Invoice #27543706 contains line item: 18\" Black Marble Coffee Table Top Mother of Pearl Inlay Furniture Decors H1883B"
  },
  {
    "id": "rel-iss-inv-ec5089",
    "source_entity_name": "Smith Ltd",
    "source_entity_id": "ent-org-9476813",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #26343874",
    "target_entity_id": "ent-inv-invec5089",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Smith Ltd issued Invoice #26343874"
  },
  {
    "id": "rel-bill-inv-ec5089",
    "source_entity_name": "Invoice #26343874",
    "source_entity_id": "ent-inv-invec5089",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Herring-Floyd",
    "target_entity_id": "ent-org-832239",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Invoice #26343874 billed to Herring-Floyd"
  },
  {
    "id": "rel-tot-inv-ec5089",
    "source_entity_name": "Invoice #26343874",
    "source_entity_id": "ent-inv-invec5089",
    "relation_type": "HAS_TOTAL",
    "target_entity_name": "$3490,29",
    "target_entity_id": "ent-mon-8863453",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Gross total amount is $3490,29"
  },
  {
    "id": "rel-item-inv-ec5089-0",
    "source_entity_name": "Invoice #26343874",
    "source_entity_id": "ent-inv-invec5089",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Microsoft Xbox One X 1TB 4k Ultra HD Console black controller works great 1787",
    "target_entity_id": "ent-prod-1445810",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Invoice #26343874 contains line item: Microsoft Xbox One X 1TB 4k Ultra HD Console black controller works great 1787"
  },
  {
    "id": "rel-item-inv-ec5089-1",
    "source_entity_name": "Invoice #26343874",
    "source_entity_id": "ent-inv-invec5089",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Cables 500gb,Sony PlayStation 4 PS4 CUH 1215A Jet Black Console w/ Controller",
    "target_entity_id": "ent-prod-9222368",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Invoice #26343874 contains line item: Cables 500gb,Sony PlayStation 4 PS4 CUH 1215A Jet Black Console w/ Controller"
  },
  {
    "id": "rel-item-inv-ec5089-2",
    "source_entity_name": "Invoice #26343874",
    "source_entity_id": "ent-inv-invec5089",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "PS2 Slim Console System SCPH-77000 PINK Playstation 2 Tested",
    "target_entity_id": "ent-prod-5796105",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Invoice #26343874 contains line item: PS2 Slim Console System SCPH-77000 PINK Playstation 2 Tested"
  },
  {
    "id": "rel-item-inv-ec5089-3",
    "source_entity_name": "Invoice #26343874",
    "source_entity_id": "ent-inv-invec5089",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Nintendo Game Boy Micro Console - Black (OXYSFBB)",
    "target_entity_id": "ent-prod-8845561",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Invoice #26343874 contains line item: Nintendo Game Boy Micro Console - Black (OXYSFBB)"
  },
  {
    "id": "rel-iss-inv-478f13",
    "source_entity_name": "Gregory, Patterson and Fischer",
    "source_entity_id": "ent-org-204004",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #12222347",
    "target_entity_id": "ent-inv-inv478f13",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0008.png",
    "source_page": 1,
    "evidence_text": "Gregory, Patterson and Fischer issued Invoice #12222347"
  },
  {
    "id": "rel-bill-inv-478f13",
    "source_entity_name": "Invoice #12222347",
    "source_entity_id": "ent-inv-inv478f13",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Wilson PLC",
    "target_entity_id": "ent-org-4346539",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0008.png",
    "source_page": 1,
    "evidence_text": "Invoice #12222347 billed to Wilson PLC"
  },
  {
    "id": "rel-tot-inv-478f13",
    "source_entity_name": "Invoice #12222347",
    "source_entity_id": "ent-inv-inv478f13",
    "relation_type": "HAS_TOTAL",
    "target_entity_name": "$ 136,13",
    "target_entity_id": "ent-mon-2311014",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0008.png",
    "source_page": 1,
    "evidence_text": "Gross total amount is $ 136,13"
  },
  {
    "id": "rel-item-inv-478f13-0",
    "source_entity_name": "Invoice #12222347",
    "source_entity_id": "ent-inv-inv478f13",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Zara Yellow Shift Dress XS",
    "target_entity_id": "ent-prod-1171993",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0008.png",
    "source_page": 1,
    "evidence_text": "Invoice #12222347 contains line item: Zara Yellow Shift Dress XS"
  },
  {
    "id": "rel-iss-inv-02e72c",
    "source_entity_name": "Gordon, Alvarado and Jones",
    "source_entity_id": "ent-org-9070621",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #25698672",
    "target_entity_id": "ent-inv-inv02e72c",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Gordon, Alvarado and Jones issued Invoice #25698672"
  },
  {
    "id": "rel-bill-inv-02e72c",
    "source_entity_name": "Invoice #25698672",
    "source_entity_id": "ent-inv-inv02e72c",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Manning-Ho",
    "target_entity_id": "ent-org-7403433",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Invoice #25698672 billed to Manning-Ho"
  },
  {
    "id": "rel-tot-inv-02e72c",
    "source_entity_name": "Invoice #25698672",
    "source_entity_id": "ent-inv-inv02e72c",
    "relation_type": "HAS_TOTAL",
    "target_entity_name": "$ 127,00",
    "target_entity_id": "ent-mon-756377",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Gross total amount is $ 127,00"
  },
  {
    "id": "rel-item-inv-02e72c-0",
    "source_entity_name": "Invoice #25698672",
    "source_entity_id": "ent-inv-inv02e72c",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "CCNA 200-301 50 GB AUG 2020 Cisco Video/Official Books/Exam Dumps/Licences",
    "target_entity_id": "ent-prod-2629589",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Invoice #25698672 contains line item: CCNA 200-301 50 GB AUG 2020 Cisco Video/Official Books/Exam Dumps/Licences"
  },
  {
    "id": "rel-item-inv-02e72c-1",
    "source_entity_name": "Invoice #25698672",
    "source_entity_id": "ent-inv-inv02e72c",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Tales from the Buffalo Bills",
    "target_entity_id": "ent-prod-8098267",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Invoice #25698672 contains line item: Tales from the Buffalo Bills"
  },
  {
    "id": "rel-item-inv-02e72c-2",
    "source_entity_name": "Invoice #25698672",
    "source_entity_id": "ent-inv-inv02e72c",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "A boy who grew up eating nightmare It's Okay to Not Be Okay Picturebook 00000000",
    "target_entity_id": "ent-prod-5447822",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Invoice #25698672 contains line item: A boy who grew up eating nightmare It's Okay to Not Be Okay Picturebook 00000000"
  },
  {
    "id": "rel-iss-inv-30b66e",
    "source_entity_name": "Rodriguez-jackson",
    "source_entity_id": "ent-org-7388746",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #24048799",
    "target_entity_id": "ent-inv-inv30b66e",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0010.png",
    "source_page": 1,
    "evidence_text": "Rodriguez-jackson issued Invoice #24048799"
  },
  {
    "id": "rel-bill-inv-30b66e",
    "source_entity_name": "Invoice #24048799",
    "source_entity_id": "ent-inv-inv30b66e",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Williams, Fletcher and Taylor",
    "target_entity_id": "ent-org-380159",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0010.png",
    "source_page": 1,
    "evidence_text": "Invoice #24048799 billed to Williams, Fletcher and Taylor"
  },
  {
    "id": "rel-tot-inv-30b66e",
    "source_entity_name": "Invoice #24048799",
    "source_entity_id": "ent-inv-inv30b66e",
    "relation_type": "HAS_TOTAL",
    "target_entity_name": "$5,45",
    "target_entity_id": "ent-mon-1747374",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0010.png",
    "source_page": 1,
    "evidence_text": "Gross total amount is $5,45"
  },
  {
    "id": "rel-item-inv-30b66e-0",
    "source_entity_name": "Invoice #24048799",
    "source_entity_id": "ent-inv-inv30b66e",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Large Blue Long Sleeve Fit & Flare Dress Elastic Waist Crochet Detail Bohemian",
    "target_entity_id": "ent-prod-4364684",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0010.png",
    "source_page": 1,
    "evidence_text": "Invoice #24048799 contains line item: Large Blue Long Sleeve Fit & Flare Dress Elastic Waist Crochet Detail Bohemian"
  },
  {
    "id": "rel-iss-inv-b828e8",
    "source_entity_name": "Potts, Reed and Miller USCGC Weeks FPO AA",
    "source_entity_id": "ent-org-1844176",
    "relation_type": "ISSUED",
    "target_entity_name": "Invoice #72455228",
    "target_entity_id": "ent-inv-invb828e8",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0011.png",
    "source_page": 1,
    "evidence_text": "Potts, Reed and Miller USCGC Weeks FPO AA issued Invoice #72455228"
  },
  {
    "id": "rel-bill-inv-b828e8",
    "source_entity_name": "Invoice #72455228",
    "source_entity_id": "ent-inv-invb828e8",
    "relation_type": "BILLED_TO",
    "target_entity_name": "Brady LLC",
    "target_entity_id": "ent-org-1975036",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0011.png",
    "source_page": 1,
    "evidence_text": "Invoice #72455228 billed to Brady LLC"
  },
  {
    "id": "rel-tot-inv-b828e8",
    "source_entity_name": "Invoice #72455228",
    "source_entity_id": "ent-inv-invb828e8",
    "relation_type": "HAS_TOTAL",
    "target_entity_name": "$2155,98",
    "target_entity_id": "ent-mon-8626708",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0011.png",
    "source_page": 1,
    "evidence_text": "Gross total amount is $2155,98"
  },
  {
    "id": "rel-item-inv-b828e8-0",
    "source_entity_name": "Invoice #72455228",
    "source_entity_id": "ent-inv-invb828e8",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "PlayStation 5 Console Disc Version PREORDER\"00OO",
    "target_entity_id": "ent-prod-723582",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0011.png",
    "source_page": 1,
    "evidence_text": "Invoice #72455228 contains line item: PlayStation 5 Console Disc Version PREORDER\"00OO"
  },
  {
    "id": "rel-item-inv-b828e8-1",
    "source_entity_name": "Invoice #72455228",
    "source_entity_id": "ent-inv-invb828e8",
    "relation_type": "CONTAINS_ITEM",
    "target_entity_name": "Sony PlayStation 4 Slim 1TB (Upgraded to SSD) Black Game Console",
    "target_entity_id": "ent-prod-770027",
    "confidence": 0.97,
    "status": "Supported",
    "source_doc_name": "KatanaML_Invoice_0011.png",
    "source_page": 1,
    "evidence_text": "Invoice #72455228 contains line item: Sony PlayStation 4 Slim 1TB (Upgraded to SSD) Black Game Console"
  }
];

export const INITIAL_FACTS = [
  {
    "id": "fact-sel-inv-a140fb",
    "subject_name": "Invoice #97159829",
    "predicate": "Issuing Seller",
    "value": "Client:",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-a140fb",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Client:."
  },
  {
    "id": "fact-cli-inv-a140fb",
    "subject_name": "Invoice #97159829",
    "predicate": "Billed Client",
    "value": "Bradley-Andrade",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-a140fb",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Billed client is Bradley-Andrade."
  },
  {
    "id": "fact-date-inv-a140fb",
    "subject_name": "Invoice #97159829",
    "predicate": "Issue Date",
    "value": "09/18/2015",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-a140fb",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "evidence_text": "Issue date is 09/18/2015."
  },
  {
    "id": "fact-sel-inv-e42ddc",
    "subject_name": "Invoice #13194726",
    "predicate": "Issuing Seller",
    "value": "Client:",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-e42ddc",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Client:."
  },
  {
    "id": "fact-cli-inv-e42ddc",
    "subject_name": "Invoice #13194726",
    "predicate": "Billed Client",
    "value": "Hopkins and Sons",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-e42ddc",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "evidence_text": "Billed client is Hopkins and Sons."
  },
  {
    "id": "fact-date-inv-e42ddc",
    "subject_name": "Invoice #13194726",
    "predicate": "Issue Date",
    "value": "05/29/2021",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-e42ddc",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "evidence_text": "Issue date is 05/29/2021."
  },
  {
    "id": "fact-sel-inv-01e4d9",
    "subject_name": "Invoice #62517865",
    "predicate": "Issuing Seller",
    "value": "Client:",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-01e4d9",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Client:."
  },
  {
    "id": "fact-cli-inv-01e4d9",
    "subject_name": "Invoice #62517865",
    "predicate": "Billed Client",
    "value": "Trujillo-Hunt",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-01e4d9",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "evidence_text": "Billed client is Trujillo-Hunt."
  },
  {
    "id": "fact-date-inv-01e4d9",
    "subject_name": "Invoice #62517865",
    "predicate": "Issue Date",
    "value": "06/02/2015",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-01e4d9",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "evidence_text": "Issue date is 06/02/2015."
  },
  {
    "id": "fact-sel-inv-aff77b",
    "subject_name": "Invoice #56014042",
    "predicate": "Issuing Seller",
    "value": "Client:",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-aff77b",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Client:."
  },
  {
    "id": "fact-cli-inv-aff77b",
    "subject_name": "Invoice #56014042",
    "predicate": "Billed Client",
    "value": "Nichols-Barajas",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-aff77b",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "evidence_text": "Billed client is Nichols-Barajas."
  },
  {
    "id": "fact-date-inv-aff77b",
    "subject_name": "Invoice #56014042",
    "predicate": "Issue Date",
    "value": "10/01/2014",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-aff77b",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "evidence_text": "Issue date is 10/01/2014."
  },
  {
    "id": "fact-sel-inv-000827",
    "subject_name": "Invoice #16662010",
    "predicate": "Issuing Seller",
    "value": "Client:",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-000827",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Client:."
  },
  {
    "id": "fact-cli-inv-000827",
    "subject_name": "Invoice #16662010",
    "predicate": "Billed Client",
    "value": "Smith-Cook",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-000827",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "evidence_text": "Billed client is Smith-Cook."
  },
  {
    "id": "fact-date-inv-000827",
    "subject_name": "Invoice #16662010",
    "predicate": "Issue Date",
    "value": "08/28/2016",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-000827",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "evidence_text": "Issue date is 08/28/2016."
  },
  {
    "id": "fact-sel-inv-4dad72",
    "subject_name": "Invoice #27543706",
    "predicate": "Issuing Seller",
    "value": "Client:",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-4dad72",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Client:."
  },
  {
    "id": "fact-cli-inv-4dad72",
    "subject_name": "Invoice #27543706",
    "predicate": "Billed Client",
    "value": "Kaiser,Hays and Cook",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-4dad72",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "evidence_text": "Billed client is Kaiser,Hays and Cook."
  },
  {
    "id": "fact-date-inv-4dad72",
    "subject_name": "Invoice #27543706",
    "predicate": "Issue Date",
    "value": "07/20/2020",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-4dad72",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "evidence_text": "Issue date is 07/20/2020."
  },
  {
    "id": "fact-sel-inv-e509b2",
    "subject_name": "Invoice #26343874",
    "predicate": "Issuing Seller",
    "value": "Client:",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-e509b2",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Client:."
  },
  {
    "id": "fact-cli-inv-e509b2",
    "subject_name": "Invoice #26343874",
    "predicate": "Billed Client",
    "value": "Smith Ltd",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-e509b2",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "evidence_text": "Billed client is Smith Ltd."
  },
  {
    "id": "fact-date-inv-e509b2",
    "subject_name": "Invoice #26343874",
    "predicate": "Issue Date",
    "value": "07/17/2013",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-e509b2",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "evidence_text": "Issue date is 07/17/2013."
  },
  {
    "id": "fact-sel-inv-cd310a",
    "subject_name": "Invoice #12222347",
    "predicate": "Issuing Seller",
    "value": "Client:",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-cd310a",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Client:."
  },
  {
    "id": "fact-cli-inv-cd310a",
    "subject_name": "Invoice #12222347",
    "predicate": "Billed Client",
    "value": "Gregory,Patterson and Fischer",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-cd310a",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "evidence_text": "Billed client is Gregory,Patterson and Fischer."
  },
  {
    "id": "fact-date-inv-cd310a",
    "subject_name": "Invoice #12222347",
    "predicate": "Issue Date",
    "value": "03/18/2017",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-cd310a",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "evidence_text": "Issue date is 03/18/2017."
  },
  {
    "id": "fact-sel-inv-79ebc8",
    "subject_name": "Invoice #25698672",
    "predicate": "Issuing Seller",
    "value": "Client:",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-79ebc8",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Client:."
  },
  {
    "id": "fact-cli-inv-79ebc8",
    "subject_name": "Invoice #25698672",
    "predicate": "Billed Client",
    "value": "Gordon, Alvarado and Jones",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-79ebc8",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "evidence_text": "Billed client is Gordon, Alvarado and Jones."
  },
  {
    "id": "fact-date-inv-79ebc8",
    "subject_name": "Invoice #25698672",
    "predicate": "Issue Date",
    "value": "08/01/2015",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-79ebc8",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "evidence_text": "Issue date is 08/01/2015."
  },
  {
    "id": "fact-sel-inv-9dfe5a",
    "subject_name": "Invoice #24048799",
    "predicate": "Issuing Seller",
    "value": "Client:",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-9dfe5a",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Client:."
  },
  {
    "id": "fact-cli-inv-9dfe5a",
    "subject_name": "Invoice #24048799",
    "predicate": "Billed Client",
    "value": "Rodriguez-Jackson",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-9dfe5a",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "evidence_text": "Billed client is Rodriguez-Jackson."
  },
  {
    "id": "fact-date-inv-9dfe5a",
    "subject_name": "Invoice #24048799",
    "predicate": "Issue Date",
    "value": "05/21/2014",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-9dfe5a",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "evidence_text": "Issue date is 05/21/2014."
  },
  {
    "id": "fact-sel-inv-44deef",
    "subject_name": "Invoice #72455228",
    "predicate": "Issuing Seller",
    "value": "Client:",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-44deef",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Client:."
  },
  {
    "id": "fact-cli-inv-44deef",
    "subject_name": "Invoice #72455228",
    "predicate": "Billed Client",
    "value": "Potts,Reed and Miller",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-44deef",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "evidence_text": "Billed client is Potts,Reed and Miller."
  },
  {
    "id": "fact-date-inv-44deef",
    "subject_name": "Invoice #72455228",
    "predicate": "Issue Date",
    "value": "05/11/2021",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-44deef",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "evidence_text": "Issue date is 05/11/2021."
  },
  {
    "id": "fact-sel-inv-0fe9bc",
    "subject_name": "Invoice #58478169",
    "predicate": "Issuing Seller",
    "value": "Client:",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-0fe9bc",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Client:."
  },
  {
    "id": "fact-cli-inv-0fe9bc",
    "subject_name": "Invoice #58478169",
    "predicate": "Billed Client",
    "value": "Conley Ltd",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-0fe9bc",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "evidence_text": "Billed client is Conley Ltd."
  },
  {
    "id": "fact-date-inv-0fe9bc",
    "subject_name": "Invoice #58478169",
    "predicate": "Issue Date",
    "value": "07/04/2016",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-0fe9bc",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "evidence_text": "Issue date is 07/04/2016."
  },
  {
    "id": "fact-sel-inv-0d91cc",
    "subject_name": "Invoice #90508672",
    "predicate": "Issuing Seller",
    "value": "Client:",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-0d91cc",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Client:."
  },
  {
    "id": "fact-cli-inv-0d91cc",
    "subject_name": "Invoice #90508672",
    "predicate": "Billed Client",
    "value": "Stone-Waller",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-0d91cc",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "evidence_text": "Billed client is Stone-Waller."
  },
  {
    "id": "fact-date-inv-0d91cc",
    "subject_name": "Invoice #90508672",
    "predicate": "Issue Date",
    "value": "04/16/2020",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-0d91cc",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "evidence_text": "Issue date is 04/16/2020."
  },
  {
    "id": "fact-sel-inv-a0b568",
    "subject_name": "Invoice #96051364",
    "predicate": "Issuing Seller",
    "value": "Client:",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-a0b568",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Client:."
  },
  {
    "id": "fact-cli-inv-a0b568",
    "subject_name": "Invoice #96051364",
    "predicate": "Billed Client",
    "value": "Jackson Ltd",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-a0b568",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "evidence_text": "Billed client is Jackson Ltd."
  },
  {
    "id": "fact-date-inv-a0b568",
    "subject_name": "Invoice #96051364",
    "predicate": "Issue Date",
    "value": "04/28/2020",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-a0b568",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "evidence_text": "Issue date is 04/28/2020."
  },
  {
    "id": "fact-sel-inv-01ba2b",
    "subject_name": "Invoice #67856369",
    "predicate": "Issuing Seller",
    "value": "Client:",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-01ba2b",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Client:."
  },
  {
    "id": "fact-cli-inv-01ba2b",
    "subject_name": "Invoice #67856369",
    "predicate": "Billed Client",
    "value": "Pierce PLC",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-01ba2b",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "evidence_text": "Billed client is Pierce PLC."
  },
  {
    "id": "fact-date-inv-01ba2b",
    "subject_name": "Invoice #67856369",
    "predicate": "Issue Date",
    "value": "05/27/2020",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-01ba2b",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "evidence_text": "Issue date is 05/27/2020."
  },
  {
    "id": "fact-tot-inv-4ce5ae",
    "subject_name": "Invoice #97159829",
    "predicate": "Gross Total Payable",
    "value": "$ 978,12",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-4ce5ae",
    "source_doc_name": "KatanaML_Invoice_0001.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $ 978,12."
  },
  {
    "id": "fact-sel-inv-4ce5ae",
    "subject_name": "Invoice #97159829",
    "predicate": "Issuing Seller",
    "value": "Bradley-Andrade",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-4ce5ae",
    "source_doc_name": "KatanaML_Invoice_0001.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Bradley-Andrade."
  },
  {
    "id": "fact-cli-inv-4ce5ae",
    "subject_name": "Invoice #97159829",
    "predicate": "Billed Client",
    "value": "Castro PLC",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-4ce5ae",
    "source_doc_name": "KatanaML_Invoice_0001.png",
    "source_page": 1,
    "evidence_text": "Billed client is Castro PLC."
  },
  {
    "id": "fact-date-inv-4ce5ae",
    "subject_name": "Invoice #97159829",
    "predicate": "Issue Date",
    "value": "09/18/2015",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-4ce5ae",
    "source_doc_name": "KatanaML_Invoice_0001.png",
    "source_page": 1,
    "evidence_text": "Issue date is 09/18/2015."
  },
  {
    "id": "fact-tot-inv-71287d",
    "subject_name": "Invoice #13194726",
    "predicate": "Gross Total Payable",
    "value": "$ 640,12",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-71287d",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $ 640,12."
  },
  {
    "id": "fact-sel-inv-71287d",
    "subject_name": "Invoice #13194726",
    "predicate": "Issuing Seller",
    "value": "Hopkins and Sons",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-71287d",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Hopkins and Sons."
  },
  {
    "id": "fact-cli-inv-71287d",
    "subject_name": "Invoice #13194726",
    "predicate": "Billed Client",
    "value": "Sims PLC USS Kramer FPO AA",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-71287d",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Billed client is Sims PLC USS Kramer FPO AA."
  },
  {
    "id": "fact-date-inv-71287d",
    "subject_name": "Invoice #13194726",
    "predicate": "Issue Date",
    "value": "05/29/2021",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-71287d",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "evidence_text": "Issue date is 05/29/2021."
  },
  {
    "id": "fact-tot-inv-7a51be",
    "subject_name": "Invoice #62517865",
    "predicate": "Gross Total Payable",
    "value": "$9,35",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-7a51be",
    "source_doc_name": "KatanaML_Invoice_0003.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $9,35."
  },
  {
    "id": "fact-sel-inv-7a51be",
    "subject_name": "Invoice #62517865",
    "predicate": "Issuing Seller",
    "value": "Trujillo-Hunt",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-7a51be",
    "source_doc_name": "KatanaML_Invoice_0003.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Trujillo-Hunt."
  },
  {
    "id": "fact-cli-inv-7a51be",
    "subject_name": "Invoice #62517865",
    "predicate": "Billed Client",
    "value": "Lee and Sons",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-7a51be",
    "source_doc_name": "KatanaML_Invoice_0003.png",
    "source_page": 1,
    "evidence_text": "Billed client is Lee and Sons."
  },
  {
    "id": "fact-date-inv-7a51be",
    "subject_name": "Invoice #62517865",
    "predicate": "Issue Date",
    "value": "06/02/2015",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-7a51be",
    "source_doc_name": "KatanaML_Invoice_0003.png",
    "source_page": 1,
    "evidence_text": "Issue date is 06/02/2015."
  },
  {
    "id": "fact-tot-inv-2cdf87",
    "subject_name": "Invoice #56014042",
    "predicate": "Gross Total Payable",
    "value": "$65,45",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-2cdf87",
    "source_doc_name": "KatanaML_Invoice_0004.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $65,45."
  },
  {
    "id": "fact-sel-inv-2cdf87",
    "subject_name": "Invoice #56014042",
    "predicate": "Issuing Seller",
    "value": "Nichols-Barajas",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-2cdf87",
    "source_doc_name": "KatanaML_Invoice_0004.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Nichols-Barajas."
  },
  {
    "id": "fact-cli-inv-2cdf87",
    "subject_name": "Invoice #56014042",
    "predicate": "Billed Client",
    "value": "Mckay PLC",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-2cdf87",
    "source_doc_name": "KatanaML_Invoice_0004.png",
    "source_page": 1,
    "evidence_text": "Billed client is Mckay PLC."
  },
  {
    "id": "fact-date-inv-2cdf87",
    "subject_name": "Invoice #56014042",
    "predicate": "Issue Date",
    "value": "10/01/2014",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-2cdf87",
    "source_doc_name": "KatanaML_Invoice_0004.png",
    "source_page": 1,
    "evidence_text": "Issue date is 10/01/2014."
  },
  {
    "id": "fact-tot-inv-370e7d",
    "subject_name": "Invoice #16662010",
    "predicate": "Gross Total Payable",
    "value": "$2259,10",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-370e7d",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $2259,10."
  },
  {
    "id": "fact-sel-inv-370e7d",
    "subject_name": "Invoice #16662010",
    "predicate": "Issuing Seller",
    "value": "Smith-Cook",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-370e7d",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Smith-Cook."
  },
  {
    "id": "fact-cli-inv-370e7d",
    "subject_name": "Invoice #16662010",
    "predicate": "Billed Client",
    "value": "Snyder-Johnson",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-370e7d",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Billed client is Snyder-Johnson."
  },
  {
    "id": "fact-date-inv-370e7d",
    "subject_name": "Invoice #16662010",
    "predicate": "Issue Date",
    "value": "08/28/2016",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-370e7d",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "evidence_text": "Issue date is 08/28/2016."
  },
  {
    "id": "fact-tot-inv-be7fea",
    "subject_name": "Invoice #27543706",
    "predicate": "Gross Total Payable",
    "value": "48 801,10",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-be7fea",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is 48 801,10."
  },
  {
    "id": "fact-sel-inv-be7fea",
    "subject_name": "Invoice #27543706",
    "predicate": "Issuing Seller",
    "value": "Kaiser, Hays and Cook",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-be7fea",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Kaiser, Hays and Cook."
  },
  {
    "id": "fact-cli-inv-be7fea",
    "subject_name": "Invoice #27543706",
    "predicate": "Billed Client",
    "value": "Holland PLC",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-be7fea",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Billed client is Holland PLC."
  },
  {
    "id": "fact-date-inv-be7fea",
    "subject_name": "Invoice #27543706",
    "predicate": "Issue Date",
    "value": "07/20/2020",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-be7fea",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "evidence_text": "Issue date is 07/20/2020."
  },
  {
    "id": "fact-tot-inv-ec5089",
    "subject_name": "Invoice #26343874",
    "predicate": "Gross Total Payable",
    "value": "$3490,29",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-ec5089",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $3490,29."
  },
  {
    "id": "fact-sel-inv-ec5089",
    "subject_name": "Invoice #26343874",
    "predicate": "Issuing Seller",
    "value": "Smith Ltd",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-ec5089",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Smith Ltd."
  },
  {
    "id": "fact-cli-inv-ec5089",
    "subject_name": "Invoice #26343874",
    "predicate": "Billed Client",
    "value": "Herring-Floyd",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-ec5089",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Billed client is Herring-Floyd."
  },
  {
    "id": "fact-date-inv-ec5089",
    "subject_name": "Invoice #26343874",
    "predicate": "Issue Date",
    "value": "07/17/2013",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-ec5089",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "evidence_text": "Issue date is 07/17/2013."
  },
  {
    "id": "fact-tot-inv-478f13",
    "subject_name": "Invoice #12222347",
    "predicate": "Gross Total Payable",
    "value": "$ 136,13",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-478f13",
    "source_doc_name": "KatanaML_Invoice_0008.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $ 136,13."
  },
  {
    "id": "fact-sel-inv-478f13",
    "subject_name": "Invoice #12222347",
    "predicate": "Issuing Seller",
    "value": "Gregory, Patterson and Fischer",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-478f13",
    "source_doc_name": "KatanaML_Invoice_0008.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Gregory, Patterson and Fischer."
  },
  {
    "id": "fact-cli-inv-478f13",
    "subject_name": "Invoice #12222347",
    "predicate": "Billed Client",
    "value": "Wilson PLC",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-478f13",
    "source_doc_name": "KatanaML_Invoice_0008.png",
    "source_page": 1,
    "evidence_text": "Billed client is Wilson PLC."
  },
  {
    "id": "fact-date-inv-478f13",
    "subject_name": "Invoice #12222347",
    "predicate": "Issue Date",
    "value": "03/18/2017",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-478f13",
    "source_doc_name": "KatanaML_Invoice_0008.png",
    "source_page": 1,
    "evidence_text": "Issue date is 03/18/2017."
  },
  {
    "id": "fact-tot-inv-02e72c",
    "subject_name": "Invoice #25698672",
    "predicate": "Gross Total Payable",
    "value": "$ 127,00",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-02e72c",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $ 127,00."
  },
  {
    "id": "fact-sel-inv-02e72c",
    "subject_name": "Invoice #25698672",
    "predicate": "Issuing Seller",
    "value": "Gordon, Alvarado and Jones",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-02e72c",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Gordon, Alvarado and Jones."
  },
  {
    "id": "fact-cli-inv-02e72c",
    "subject_name": "Invoice #25698672",
    "predicate": "Billed Client",
    "value": "Manning-Ho",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-02e72c",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Billed client is Manning-Ho."
  },
  {
    "id": "fact-date-inv-02e72c",
    "subject_name": "Invoice #25698672",
    "predicate": "Issue Date",
    "value": "08/01/2015",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-02e72c",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "evidence_text": "Issue date is 08/01/2015."
  },
  {
    "id": "fact-tot-inv-30b66e",
    "subject_name": "Invoice #24048799",
    "predicate": "Gross Total Payable",
    "value": "$5,45",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-30b66e",
    "source_doc_name": "KatanaML_Invoice_0010.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $5,45."
  },
  {
    "id": "fact-sel-inv-30b66e",
    "subject_name": "Invoice #24048799",
    "predicate": "Issuing Seller",
    "value": "Rodriguez-jackson",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-30b66e",
    "source_doc_name": "KatanaML_Invoice_0010.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Rodriguez-jackson."
  },
  {
    "id": "fact-cli-inv-30b66e",
    "subject_name": "Invoice #24048799",
    "predicate": "Billed Client",
    "value": "Williams, Fletcher and Taylor",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-30b66e",
    "source_doc_name": "KatanaML_Invoice_0010.png",
    "source_page": 1,
    "evidence_text": "Billed client is Williams, Fletcher and Taylor."
  },
  {
    "id": "fact-date-inv-30b66e",
    "subject_name": "Invoice #24048799",
    "predicate": "Issue Date",
    "value": "05/21/2014",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-30b66e",
    "source_doc_name": "KatanaML_Invoice_0010.png",
    "source_page": 1,
    "evidence_text": "Issue date is 05/21/2014."
  },
  {
    "id": "fact-tot-inv-b828e8",
    "subject_name": "Invoice #72455228",
    "predicate": "Gross Total Payable",
    "value": "$2155,98",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-b828e8",
    "source_doc_name": "KatanaML_Invoice_0011.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $2155,98."
  },
  {
    "id": "fact-sel-inv-b828e8",
    "subject_name": "Invoice #72455228",
    "predicate": "Issuing Seller",
    "value": "Potts, Reed and Miller USCGC Weeks FPO AA",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-b828e8",
    "source_doc_name": "KatanaML_Invoice_0011.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Potts, Reed and Miller USCGC Weeks FPO AA."
  },
  {
    "id": "fact-cli-inv-b828e8",
    "subject_name": "Invoice #72455228",
    "predicate": "Billed Client",
    "value": "Brady LLC",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-b828e8",
    "source_doc_name": "KatanaML_Invoice_0011.png",
    "source_page": 1,
    "evidence_text": "Billed client is Brady LLC."
  },
  {
    "id": "fact-date-inv-b828e8",
    "subject_name": "Invoice #72455228",
    "predicate": "Issue Date",
    "value": "05/11/2021",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-b828e8",
    "source_doc_name": "KatanaML_Invoice_0011.png",
    "source_page": 1,
    "evidence_text": "Issue date is 05/11/2021."
  },
  {
    "id": "fact-tot-inv-d973b3",
    "subject_name": "Invoice #58478169",
    "predicate": "Gross Total Payable",
    "value": "$12 261,98",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-d973b3",
    "source_doc_name": "KatanaML_Invoice_0012.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $12 261,98."
  },
  {
    "id": "fact-sel-inv-d973b3",
    "subject_name": "Invoice #58478169",
    "predicate": "Issuing Seller",
    "value": "Conley Ltd",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-d973b3",
    "source_doc_name": "KatanaML_Invoice_0012.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Conley Ltd."
  },
  {
    "id": "fact-cli-inv-d973b3",
    "subject_name": "Invoice #58478169",
    "predicate": "Billed Client",
    "value": "Wells-Avery",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-d973b3",
    "source_doc_name": "KatanaML_Invoice_0012.png",
    "source_page": 1,
    "evidence_text": "Billed client is Wells-Avery."
  },
  {
    "id": "fact-date-inv-d973b3",
    "subject_name": "Invoice #58478169",
    "predicate": "Issue Date",
    "value": "07/04/2016",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-d973b3",
    "source_doc_name": "KatanaML_Invoice_0012.png",
    "source_page": 1,
    "evidence_text": "Issue date is 07/04/2016."
  },
  {
    "id": "fact-tot-inv-cb3b9c",
    "subject_name": "Invoice #90508672",
    "predicate": "Gross Total Payable",
    "value": "$7052,49",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-cb3b9c",
    "source_doc_name": "KatanaML_Invoice_0013.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $7052,49."
  },
  {
    "id": "fact-sel-inv-cb3b9c",
    "subject_name": "Invoice #90508672",
    "predicate": "Issuing Seller",
    "value": "Stone-Waller",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-cb3b9c",
    "source_doc_name": "KatanaML_Invoice_0013.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Stone-Waller."
  },
  {
    "id": "fact-cli-inv-cb3b9c",
    "subject_name": "Invoice #90508672",
    "predicate": "Billed Client",
    "value": "Shaw Group",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-cb3b9c",
    "source_doc_name": "KatanaML_Invoice_0013.png",
    "source_page": 1,
    "evidence_text": "Billed client is Shaw Group."
  },
  {
    "id": "fact-date-inv-cb3b9c",
    "subject_name": "Invoice #90508672",
    "predicate": "Issue Date",
    "value": "04/16/2020",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-cb3b9c",
    "source_doc_name": "KatanaML_Invoice_0013.png",
    "source_page": 1,
    "evidence_text": "Issue date is 04/16/2020."
  },
  {
    "id": "fact-tot-inv-9e236e",
    "subject_name": "Invoice #96051364",
    "predicate": "Gross Total Payable",
    "value": "$ 1579 929,37",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-9e236e",
    "source_doc_name": "KatanaML_Invoice_0014.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $ 1579 929,37."
  },
  {
    "id": "fact-sel-inv-9e236e",
    "subject_name": "Invoice #96051364",
    "predicate": "Issuing Seller",
    "value": "Jackson Ltd",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-9e236e",
    "source_doc_name": "KatanaML_Invoice_0014.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Jackson Ltd."
  },
  {
    "id": "fact-cli-inv-9e236e",
    "subject_name": "Invoice #96051364",
    "predicate": "Billed Client",
    "value": "Williams, Fowler and Phillips",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-9e236e",
    "source_doc_name": "KatanaML_Invoice_0014.png",
    "source_page": 1,
    "evidence_text": "Billed client is Williams, Fowler and Phillips."
  },
  {
    "id": "fact-date-inv-9e236e",
    "subject_name": "Invoice #96051364",
    "predicate": "Issue Date",
    "value": "04/28/2020",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-9e236e",
    "source_doc_name": "KatanaML_Invoice_0014.png",
    "source_page": 1,
    "evidence_text": "Issue date is 04/28/2020."
  },
  {
    "id": "fact-tot-inv-da583d",
    "subject_name": "Invoice #67856369",
    "predicate": "Gross Total Payable",
    "value": "$4952,82",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-da583d",
    "source_doc_name": "KatanaML_Invoice_0015.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $4952,82."
  },
  {
    "id": "fact-sel-inv-da583d",
    "subject_name": "Invoice #67856369",
    "predicate": "Issuing Seller",
    "value": "Pierce PLC",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-da583d",
    "source_doc_name": "KatanaML_Invoice_0015.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Pierce PLC."
  },
  {
    "id": "fact-cli-inv-da583d",
    "subject_name": "Invoice #67856369",
    "predicate": "Billed Client",
    "value": "Cochran-Alvarez",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-da583d",
    "source_doc_name": "KatanaML_Invoice_0015.png",
    "source_page": 1,
    "evidence_text": "Billed client is Cochran-Alvarez."
  },
  {
    "id": "fact-date-inv-da583d",
    "subject_name": "Invoice #67856369",
    "predicate": "Issue Date",
    "value": "05/27/2020",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-da583d",
    "source_doc_name": "KatanaML_Invoice_0015.png",
    "source_page": 1,
    "evidence_text": "Issue date is 05/27/2020."
  },
  {
    "id": "fact-tot-inv-207214",
    "subject_name": "Invoice #69934544",
    "predicate": "Gross Total Payable",
    "value": "$ 43,96",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-207214",
    "source_doc_name": "KatanaML_Invoice_0016.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $ 43,96."
  },
  {
    "id": "fact-sel-inv-207214",
    "subject_name": "Invoice #69934544",
    "predicate": "Issuing Seller",
    "value": "Spence-Castro",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-207214",
    "source_doc_name": "KatanaML_Invoice_0016.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Spence-Castro."
  },
  {
    "id": "fact-cli-inv-207214",
    "subject_name": "Invoice #69934544",
    "predicate": "Billed Client",
    "value": "Wolfe and Sons",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-207214",
    "source_doc_name": "KatanaML_Invoice_0016.png",
    "source_page": 1,
    "evidence_text": "Billed client is Wolfe and Sons."
  },
  {
    "id": "fact-date-inv-207214",
    "subject_name": "Invoice #69934544",
    "predicate": "Issue Date",
    "value": "04/17/2014",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-207214",
    "source_doc_name": "KatanaML_Invoice_0016.png",
    "source_page": 1,
    "evidence_text": "Issue date is 04/17/2014."
  },
  {
    "id": "fact-tot-inv-0f4f39",
    "subject_name": "Invoice #23152691",
    "predicate": "Gross Total Payable",
    "value": "$4783,70",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-0f4f39",
    "source_doc_name": "KatanaML_Invoice_0017.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $4783,70."
  },
  {
    "id": "fact-sel-inv-0f4f39",
    "subject_name": "Invoice #23152691",
    "predicate": "Issuing Seller",
    "value": "Whitaker Ltd",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-0f4f39",
    "source_doc_name": "KatanaML_Invoice_0017.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Whitaker Ltd."
  },
  {
    "id": "fact-cli-inv-0f4f39",
    "subject_name": "Invoice #23152691",
    "predicate": "Billed Client",
    "value": "Stout-Miller",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-0f4f39",
    "source_doc_name": "KatanaML_Invoice_0017.png",
    "source_page": 1,
    "evidence_text": "Billed client is Stout-Miller."
  },
  {
    "id": "fact-date-inv-0f4f39",
    "subject_name": "Invoice #23152691",
    "predicate": "Issue Date",
    "value": "08/01/2015",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-0f4f39",
    "source_doc_name": "KatanaML_Invoice_0017.png",
    "source_page": 1,
    "evidence_text": "Issue date is 08/01/2015."
  },
  {
    "id": "fact-tot-inv-84f21a",
    "subject_name": "Invoice #14878236",
    "predicate": "Gross Total Payable",
    "value": "$ 568,49",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-84f21a",
    "source_doc_name": "KatanaML_Invoice_0018.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $ 568,49."
  },
  {
    "id": "fact-sel-inv-84f21a",
    "subject_name": "Invoice #14878236",
    "predicate": "Issuing Seller",
    "value": "Hernandez, Coleman and Alvarado",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-84f21a",
    "source_doc_name": "KatanaML_Invoice_0018.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Hernandez, Coleman and Alvarado."
  },
  {
    "id": "fact-cli-inv-84f21a",
    "subject_name": "Invoice #14878236",
    "predicate": "Billed Client",
    "value": "Turner-Green",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-84f21a",
    "source_doc_name": "KatanaML_Invoice_0018.png",
    "source_page": 1,
    "evidence_text": "Billed client is Turner-Green."
  },
  {
    "id": "fact-date-inv-84f21a",
    "subject_name": "Invoice #14878236",
    "predicate": "Issue Date",
    "value": "04/26/2015",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-84f21a",
    "source_doc_name": "KatanaML_Invoice_0018.png",
    "source_page": 1,
    "evidence_text": "Issue date is 04/26/2015."
  },
  {
    "id": "fact-tot-inv-cd74fe",
    "subject_name": "Invoice #84777898",
    "predicate": "Gross Total Payable",
    "value": "$ 314,62",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-cd74fe",
    "source_doc_name": "KatanaML_Invoice_0019.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $ 314,62."
  },
  {
    "id": "fact-sel-inv-cd74fe",
    "subject_name": "Invoice #84777898",
    "predicate": "Issuing Seller",
    "value": "Byrd PLC",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-cd74fe",
    "source_doc_name": "KatanaML_Invoice_0019.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Byrd PLC."
  },
  {
    "id": "fact-cli-inv-cd74fe",
    "subject_name": "Invoice #84777898",
    "predicate": "Billed Client",
    "value": "Palmer LLC",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-cd74fe",
    "source_doc_name": "KatanaML_Invoice_0019.png",
    "source_page": 1,
    "evidence_text": "Billed client is Palmer LLC."
  },
  {
    "id": "fact-date-inv-cd74fe",
    "subject_name": "Invoice #84777898",
    "predicate": "Issue Date",
    "value": "06/02/2017",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-cd74fe",
    "source_doc_name": "KatanaML_Invoice_0019.png",
    "source_page": 1,
    "evidence_text": "Issue date is 06/02/2017."
  },
  {
    "id": "fact-tot-inv-e56ac0",
    "subject_name": "Invoice #57338979",
    "predicate": "Gross Total Payable",
    "value": "$15089,59",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-e56ac0",
    "source_doc_name": "KatanaML_Invoice_0020.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $15089,59."
  },
  {
    "id": "fact-sel-inv-e56ac0",
    "subject_name": "Invoice #57338979",
    "predicate": "Issuing Seller",
    "value": "Estrada and Sons",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-e56ac0",
    "source_doc_name": "KatanaML_Invoice_0020.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Estrada and Sons."
  },
  {
    "id": "fact-cli-inv-e56ac0",
    "subject_name": "Invoice #57338979",
    "predicate": "Billed Client",
    "value": "Santana-Sherman",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-e56ac0",
    "source_doc_name": "KatanaML_Invoice_0020.png",
    "source_page": 1,
    "evidence_text": "Billed client is Santana-Sherman."
  },
  {
    "id": "fact-date-inv-e56ac0",
    "subject_name": "Invoice #57338979",
    "predicate": "Issue Date",
    "value": "05/10/2021",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-e56ac0",
    "source_doc_name": "KatanaML_Invoice_0020.png",
    "source_page": 1,
    "evidence_text": "Issue date is 05/10/2021."
  },
  {
    "id": "fact-tot-inv-2d3d97",
    "subject_name": "Invoice #56513760",
    "predicate": "Gross Total Payable",
    "value": "$7110,40",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-2d3d97",
    "source_doc_name": "KatanaML_Invoice_0036.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $7110,40."
  },
  {
    "id": "fact-sel-inv-2d3d97",
    "subject_name": "Invoice #56513760",
    "predicate": "Issuing Seller",
    "value": "Lyons-Murphy",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-2d3d97",
    "source_doc_name": "KatanaML_Invoice_0036.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Lyons-Murphy."
  },
  {
    "id": "fact-cli-inv-2d3d97",
    "subject_name": "Invoice #56513760",
    "predicate": "Billed Client",
    "value": "Lawrence LLC",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-2d3d97",
    "source_doc_name": "KatanaML_Invoice_0036.png",
    "source_page": 1,
    "evidence_text": "Billed client is Lawrence LLC."
  },
  {
    "id": "fact-date-inv-2d3d97",
    "subject_name": "Invoice #56513760",
    "predicate": "Issue Date",
    "value": "10/25/2011",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-2d3d97",
    "source_doc_name": "KatanaML_Invoice_0036.png",
    "source_page": 1,
    "evidence_text": "Issue date is 10/25/2011."
  },
  {
    "id": "fact-tot-inv-1a86e0",
    "subject_name": "Invoice #38870308",
    "predicate": "Gross Total Payable",
    "value": "$ 328,83",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-1a86e0",
    "source_doc_name": "KatanaML_Invoice_0037.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $ 328,83."
  },
  {
    "id": "fact-sel-inv-1a86e0",
    "subject_name": "Invoice #38870308",
    "predicate": "Issuing Seller",
    "value": "Dunn-Campbel. 36709 Santiago Viaduct Dianaland, MN",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-1a86e0",
    "source_doc_name": "KatanaML_Invoice_0037.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Dunn-Campbel. 36709 Santiago Viaduct Dianaland, MN."
  },
  {
    "id": "fact-cli-inv-1a86e0",
    "subject_name": "Invoice #38870308",
    "predicate": "Billed Client",
    "value": "Ramirez, Donaldson and Lane",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-1a86e0",
    "source_doc_name": "KatanaML_Invoice_0037.png",
    "source_page": 1,
    "evidence_text": "Billed client is Ramirez, Donaldson and Lane."
  },
  {
    "id": "fact-date-inv-1a86e0",
    "subject_name": "Invoice #38870308",
    "predicate": "Issue Date",
    "value": "08/01/2019",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-1a86e0",
    "source_doc_name": "KatanaML_Invoice_0037.png",
    "source_page": 1,
    "evidence_text": "Issue date is 08/01/2019."
  },
  {
    "id": "fact-tot-inv-6f9438",
    "subject_name": "Invoice #37999492",
    "predicate": "Gross Total Payable",
    "value": "$4949,18",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-6f9438",
    "source_doc_name": "KatanaML_Invoice_0038.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $4949,18."
  },
  {
    "id": "fact-sel-inv-6f9438",
    "subject_name": "Invoice #37999492",
    "predicate": "Issuing Seller",
    "value": "Smith Ltd",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-6f9438",
    "source_doc_name": "KatanaML_Invoice_0038.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Smith Ltd."
  },
  {
    "id": "fact-cli-inv-6f9438",
    "subject_name": "Invoice #37999492",
    "predicate": "Billed Client",
    "value": "Jones, Miller and Yoder",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-6f9438",
    "source_doc_name": "KatanaML_Invoice_0038.png",
    "source_page": 1,
    "evidence_text": "Billed client is Jones, Miller and Yoder."
  },
  {
    "id": "fact-date-inv-6f9438",
    "subject_name": "Invoice #37999492",
    "predicate": "Issue Date",
    "value": "10/22/2017",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-6f9438",
    "source_doc_name": "KatanaML_Invoice_0038.png",
    "source_page": 1,
    "evidence_text": "Issue date is 10/22/2017."
  },
  {
    "id": "fact-tot-inv-482266",
    "subject_name": "Invoice #75367021",
    "predicate": "Gross Total Payable",
    "value": "$36651,71",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-482266",
    "source_doc_name": "KatanaML_Invoice_0039.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $36651,71."
  },
  {
    "id": "fact-sel-inv-482266",
    "subject_name": "Invoice #75367021",
    "predicate": "Issuing Seller",
    "value": "Martinez-Ramirez",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-482266",
    "source_doc_name": "KatanaML_Invoice_0039.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Martinez-Ramirez."
  },
  {
    "id": "fact-cli-inv-482266",
    "subject_name": "Invoice #75367021",
    "predicate": "Billed Client",
    "value": "Lawrence, Stevens and Robinson",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-482266",
    "source_doc_name": "KatanaML_Invoice_0039.png",
    "source_page": 1,
    "evidence_text": "Billed client is Lawrence, Stevens and Robinson."
  },
  {
    "id": "fact-date-inv-482266",
    "subject_name": "Invoice #75367021",
    "predicate": "Issue Date",
    "value": "11/12/2018",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-482266",
    "source_doc_name": "KatanaML_Invoice_0039.png",
    "source_page": 1,
    "evidence_text": "Issue date is 11/12/2018."
  },
  {
    "id": "fact-tot-inv-4afe17",
    "subject_name": "Invoice #76903393",
    "predicate": "Gross Total Payable",
    "value": "$5230,40",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-4afe17",
    "source_doc_name": "KatanaML_Invoice_0040.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $5230,40."
  },
  {
    "id": "fact-sel-inv-4afe17",
    "subject_name": "Invoice #76903393",
    "predicate": "Issuing Seller",
    "value": "Young, Owens and Hall PSC",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-4afe17",
    "source_doc_name": "KatanaML_Invoice_0040.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Young, Owens and Hall PSC."
  },
  {
    "id": "fact-cli-inv-4afe17",
    "subject_name": "Invoice #76903393",
    "predicate": "Billed Client",
    "value": "King-Wells",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-4afe17",
    "source_doc_name": "KatanaML_Invoice_0040.png",
    "source_page": 1,
    "evidence_text": "Billed client is King-Wells."
  },
  {
    "id": "fact-date-inv-4afe17",
    "subject_name": "Invoice #76903393",
    "predicate": "Issue Date",
    "value": "07/24/2012",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-4afe17",
    "source_doc_name": "KatanaML_Invoice_0040.png",
    "source_page": 1,
    "evidence_text": "Issue date is 07/24/2012."
  },
  {
    "id": "fact-tot-inv-abf93a",
    "subject_name": "Invoice #18531177",
    "predicate": "Gross Total Payable",
    "value": "$ 245,20",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-abf93a",
    "source_doc_name": "KatanaML_Invoice_0041.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $ 245,20."
  },
  {
    "id": "fact-sel-inv-abf93a",
    "subject_name": "Invoice #18531177",
    "predicate": "Issuing Seller",
    "value": "Adkins, Campbell and Butler PSC",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-abf93a",
    "source_doc_name": "KatanaML_Invoice_0041.png",
    "source_page": 1,
    "evidence_text": "Seller organization is Adkins, Campbell and Butler PSC."
  },
  {
    "id": "fact-cli-inv-abf93a",
    "subject_name": "Invoice #18531177",
    "predicate": "Billed Client",
    "value": "Bird, Bates and Johnston",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-abf93a",
    "source_doc_name": "KatanaML_Invoice_0041.png",
    "source_page": 1,
    "evidence_text": "Billed client is Bird, Bates and Johnston."
  },
  {
    "id": "fact-date-inv-abf93a",
    "subject_name": "Invoice #18531177",
    "predicate": "Issue Date",
    "value": "04/30/2015",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-abf93a",
    "source_doc_name": "KatanaML_Invoice_0041.png",
    "source_page": 1,
    "evidence_text": "Issue date is 04/30/2015."
  },
  {
    "id": "fact-tot-inv-cd9f79",
    "subject_name": "Invoice #65095335",
    "predicate": "Gross Total Payable",
    "value": "$46910,41",
    "confidence": 0.99,
    "status": "Verified",
    "source_doc_id": "inv-cd9f79",
    "source_doc_name": "KatanaML_Invoice_0042.png",
    "source_page": 1,
    "evidence_text": "Gross Total Payable is $46910,41."
  }
];

export const INITIAL_EVIDENCE = [
  {
    "id": "ev-inv-a140fb",
    "text": "Invoice #97159829 issued by Client: to Bradley-Andrade for total N/A on 09/18/2015.",
    "quote": "Invoice #97159829 issued by Client: to Bradley-Andrade for total N/A on 09/18/2015.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-a140fb",
    "source_doc_name": "KatanaML_Invoice_001.png",
    "source_page": 1,
    "entity_name": "Invoice #97159829"
  },
  {
    "id": "ev-inv-e42ddc",
    "text": "Invoice #13194726 issued by Client: to Hopkins and Sons for total N/A on 05/29/2021.",
    "quote": "Invoice #13194726 issued by Client: to Hopkins and Sons for total N/A on 05/29/2021.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-e42ddc",
    "source_doc_name": "KatanaML_Invoice_002.png",
    "source_page": 1,
    "entity_name": "Invoice #13194726"
  },
  {
    "id": "ev-inv-01e4d9",
    "text": "Invoice #62517865 issued by Client: to Trujillo-Hunt for total N/A on 06/02/2015.",
    "quote": "Invoice #62517865 issued by Client: to Trujillo-Hunt for total N/A on 06/02/2015.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-01e4d9",
    "source_doc_name": "KatanaML_Invoice_003.png",
    "source_page": 1,
    "entity_name": "Invoice #62517865"
  },
  {
    "id": "ev-inv-aff77b",
    "text": "Invoice #56014042 issued by Client: to Nichols-Barajas for total N/A on 10/01/2014.",
    "quote": "Invoice #56014042 issued by Client: to Nichols-Barajas for total N/A on 10/01/2014.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-aff77b",
    "source_doc_name": "KatanaML_Invoice_004.png",
    "source_page": 1,
    "entity_name": "Invoice #56014042"
  },
  {
    "id": "ev-inv-000827",
    "text": "Invoice #16662010 issued by Client: to Smith-Cook for total N/A on 08/28/2016.",
    "quote": "Invoice #16662010 issued by Client: to Smith-Cook for total N/A on 08/28/2016.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-000827",
    "source_doc_name": "KatanaML_Invoice_005.png",
    "source_page": 1,
    "entity_name": "Invoice #16662010"
  },
  {
    "id": "ev-inv-4dad72",
    "text": "Invoice #27543706 issued by Client: to Kaiser,Hays and Cook for total N/A on 07/20/2020.",
    "quote": "Invoice #27543706 issued by Client: to Kaiser,Hays and Cook for total N/A on 07/20/2020.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-4dad72",
    "source_doc_name": "KatanaML_Invoice_006.png",
    "source_page": 1,
    "entity_name": "Invoice #27543706"
  },
  {
    "id": "ev-inv-e509b2",
    "text": "Invoice #26343874 issued by Client: to Smith Ltd for total N/A on 07/17/2013.",
    "quote": "Invoice #26343874 issued by Client: to Smith Ltd for total N/A on 07/17/2013.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-e509b2",
    "source_doc_name": "KatanaML_Invoice_007.png",
    "source_page": 1,
    "entity_name": "Invoice #26343874"
  },
  {
    "id": "ev-inv-cd310a",
    "text": "Invoice #12222347 issued by Client: to Gregory,Patterson and Fischer for total N/A on 03/18/2017.",
    "quote": "Invoice #12222347 issued by Client: to Gregory,Patterson and Fischer for total N/A on 03/18/2017.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-cd310a",
    "source_doc_name": "KatanaML_Invoice_008.png",
    "source_page": 1,
    "entity_name": "Invoice #12222347"
  },
  {
    "id": "ev-inv-79ebc8",
    "text": "Invoice #25698672 issued by Client: to Gordon, Alvarado and Jones for total N/A on 08/01/2015.",
    "quote": "Invoice #25698672 issued by Client: to Gordon, Alvarado and Jones for total N/A on 08/01/2015.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-79ebc8",
    "source_doc_name": "KatanaML_Invoice_009.png",
    "source_page": 1,
    "entity_name": "Invoice #25698672"
  },
  {
    "id": "ev-inv-9dfe5a",
    "text": "Invoice #24048799 issued by Client: to Rodriguez-Jackson for total N/A on 05/21/2014.",
    "quote": "Invoice #24048799 issued by Client: to Rodriguez-Jackson for total N/A on 05/21/2014.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-9dfe5a",
    "source_doc_name": "KatanaML_Invoice_010.png",
    "source_page": 1,
    "entity_name": "Invoice #24048799"
  },
  {
    "id": "ev-inv-44deef",
    "text": "Invoice #72455228 issued by Client: to Potts,Reed and Miller for total N/A on 05/11/2021.",
    "quote": "Invoice #72455228 issued by Client: to Potts,Reed and Miller for total N/A on 05/11/2021.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-44deef",
    "source_doc_name": "KatanaML_Invoice_011.png",
    "source_page": 1,
    "entity_name": "Invoice #72455228"
  },
  {
    "id": "ev-inv-0fe9bc",
    "text": "Invoice #58478169 issued by Client: to Conley Ltd for total N/A on 07/04/2016.",
    "quote": "Invoice #58478169 issued by Client: to Conley Ltd for total N/A on 07/04/2016.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-0fe9bc",
    "source_doc_name": "KatanaML_Invoice_012.png",
    "source_page": 1,
    "entity_name": "Invoice #58478169"
  },
  {
    "id": "ev-inv-0d91cc",
    "text": "Invoice #90508672 issued by Client: to Stone-Waller for total N/A on 04/16/2020.",
    "quote": "Invoice #90508672 issued by Client: to Stone-Waller for total N/A on 04/16/2020.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-0d91cc",
    "source_doc_name": "KatanaML_Invoice_013.png",
    "source_page": 1,
    "entity_name": "Invoice #90508672"
  },
  {
    "id": "ev-inv-a0b568",
    "text": "Invoice #96051364 issued by Client: to Jackson Ltd for total N/A on 04/28/2020.",
    "quote": "Invoice #96051364 issued by Client: to Jackson Ltd for total N/A on 04/28/2020.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-a0b568",
    "source_doc_name": "KatanaML_Invoice_014.png",
    "source_page": 1,
    "entity_name": "Invoice #96051364"
  },
  {
    "id": "ev-inv-01ba2b",
    "text": "Invoice #67856369 issued by Client: to Pierce PLC for total N/A on 05/27/2020.",
    "quote": "Invoice #67856369 issued by Client: to Pierce PLC for total N/A on 05/27/2020.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-01ba2b",
    "source_doc_name": "KatanaML_Invoice_015.png",
    "source_page": 1,
    "entity_name": "Invoice #67856369"
  },
  {
    "id": "ev-inv-4ce5ae",
    "text": "Invoice #97159829 issued by Bradley-Andrade to Castro PLC for total $ 978,12 on 09/18/2015.",
    "quote": "Invoice #97159829 issued by Bradley-Andrade to Castro PLC for total $ 978,12 on 09/18/2015.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-4ce5ae",
    "source_doc_name": "KatanaML_Invoice_0001.png",
    "source_page": 1,
    "entity_name": "Invoice #97159829"
  },
  {
    "id": "ev-inv-71287d",
    "text": "Invoice #13194726 issued by Hopkins and Sons to Sims PLC USS Kramer FPO AA for total $ 640,12 on 05/29/2021.",
    "quote": "Invoice #13194726 issued by Hopkins and Sons to Sims PLC USS Kramer FPO AA for total $ 640,12 on 05/29/2021.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-71287d",
    "source_doc_name": "KatanaML_Invoice_0002.png",
    "source_page": 1,
    "entity_name": "Invoice #13194726"
  },
  {
    "id": "ev-inv-7a51be",
    "text": "Invoice #62517865 issued by Trujillo-Hunt to Lee and Sons for total $9,35 on 06/02/2015.",
    "quote": "Invoice #62517865 issued by Trujillo-Hunt to Lee and Sons for total $9,35 on 06/02/2015.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-7a51be",
    "source_doc_name": "KatanaML_Invoice_0003.png",
    "source_page": 1,
    "entity_name": "Invoice #62517865"
  },
  {
    "id": "ev-inv-2cdf87",
    "text": "Invoice #56014042 issued by Nichols-Barajas to Mckay PLC for total $65,45 on 10/01/2014.",
    "quote": "Invoice #56014042 issued by Nichols-Barajas to Mckay PLC for total $65,45 on 10/01/2014.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-2cdf87",
    "source_doc_name": "KatanaML_Invoice_0004.png",
    "source_page": 1,
    "entity_name": "Invoice #56014042"
  },
  {
    "id": "ev-inv-370e7d",
    "text": "Invoice #16662010 issued by Smith-Cook to Snyder-Johnson for total $2259,10 on 08/28/2016.",
    "quote": "Invoice #16662010 issued by Smith-Cook to Snyder-Johnson for total $2259,10 on 08/28/2016.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-370e7d",
    "source_doc_name": "KatanaML_Invoice_0005.png",
    "source_page": 1,
    "entity_name": "Invoice #16662010"
  },
  {
    "id": "ev-inv-be7fea",
    "text": "Invoice #27543706 issued by Kaiser, Hays and Cook to Holland PLC for total 48 801,10 on 07/20/2020.",
    "quote": "Invoice #27543706 issued by Kaiser, Hays and Cook to Holland PLC for total 48 801,10 on 07/20/2020.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-be7fea",
    "source_doc_name": "KatanaML_Invoice_0006.png",
    "source_page": 1,
    "entity_name": "Invoice #27543706"
  },
  {
    "id": "ev-inv-ec5089",
    "text": "Invoice #26343874 issued by Smith Ltd to Herring-Floyd for total $3490,29 on 07/17/2013.",
    "quote": "Invoice #26343874 issued by Smith Ltd to Herring-Floyd for total $3490,29 on 07/17/2013.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-ec5089",
    "source_doc_name": "KatanaML_Invoice_0007.png",
    "source_page": 1,
    "entity_name": "Invoice #26343874"
  },
  {
    "id": "ev-inv-478f13",
    "text": "Invoice #12222347 issued by Gregory, Patterson and Fischer to Wilson PLC for total $ 136,13 on 03/18/2017.",
    "quote": "Invoice #12222347 issued by Gregory, Patterson and Fischer to Wilson PLC for total $ 136,13 on 03/18/2017.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-478f13",
    "source_doc_name": "KatanaML_Invoice_0008.png",
    "source_page": 1,
    "entity_name": "Invoice #12222347"
  },
  {
    "id": "ev-inv-02e72c",
    "text": "Invoice #25698672 issued by Gordon, Alvarado and Jones to Manning-Ho for total $ 127,00 on 08/01/2015.",
    "quote": "Invoice #25698672 issued by Gordon, Alvarado and Jones to Manning-Ho for total $ 127,00 on 08/01/2015.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-02e72c",
    "source_doc_name": "KatanaML_Invoice_0009.png",
    "source_page": 1,
    "entity_name": "Invoice #25698672"
  },
  {
    "id": "ev-inv-30b66e",
    "text": "Invoice #24048799 issued by Rodriguez-jackson to Williams, Fletcher and Taylor for total $5,45 on 05/21/2014.",
    "quote": "Invoice #24048799 issued by Rodriguez-jackson to Williams, Fletcher and Taylor for total $5,45 on 05/21/2014.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-30b66e",
    "source_doc_name": "KatanaML_Invoice_0010.png",
    "source_page": 1,
    "entity_name": "Invoice #24048799"
  },
  {
    "id": "ev-inv-b828e8",
    "text": "Invoice #72455228 issued by Potts, Reed and Miller USCGC Weeks FPO AA to Brady LLC for total $2155,98 on 05/11/2021.",
    "quote": "Invoice #72455228 issued by Potts, Reed and Miller USCGC Weeks FPO AA to Brady LLC for total $2155,98 on 05/11/2021.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-b828e8",
    "source_doc_name": "KatanaML_Invoice_0011.png",
    "source_page": 1,
    "entity_name": "Invoice #72455228"
  },
  {
    "id": "ev-inv-d973b3",
    "text": "Invoice #58478169 issued by Conley Ltd to Wells-Avery for total $12 261,98 on 07/04/2016.",
    "quote": "Invoice #58478169 issued by Conley Ltd to Wells-Avery for total $12 261,98 on 07/04/2016.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-d973b3",
    "source_doc_name": "KatanaML_Invoice_0012.png",
    "source_page": 1,
    "entity_name": "Invoice #58478169"
  },
  {
    "id": "ev-inv-cb3b9c",
    "text": "Invoice #90508672 issued by Stone-Waller to Shaw Group for total $7052,49 on 04/16/2020.",
    "quote": "Invoice #90508672 issued by Stone-Waller to Shaw Group for total $7052,49 on 04/16/2020.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-cb3b9c",
    "source_doc_name": "KatanaML_Invoice_0013.png",
    "source_page": 1,
    "entity_name": "Invoice #90508672"
  },
  {
    "id": "ev-inv-9e236e",
    "text": "Invoice #96051364 issued by Jackson Ltd to Williams, Fowler and Phillips for total $ 1579 929,37 on 04/28/2020.",
    "quote": "Invoice #96051364 issued by Jackson Ltd to Williams, Fowler and Phillips for total $ 1579 929,37 on 04/28/2020.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-9e236e",
    "source_doc_name": "KatanaML_Invoice_0014.png",
    "source_page": 1,
    "entity_name": "Invoice #96051364"
  },
  {
    "id": "ev-inv-da583d",
    "text": "Invoice #67856369 issued by Pierce PLC to Cochran-Alvarez for total $4952,82 on 05/27/2020.",
    "quote": "Invoice #67856369 issued by Pierce PLC to Cochran-Alvarez for total $4952,82 on 05/27/2020.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-da583d",
    "source_doc_name": "KatanaML_Invoice_0015.png",
    "source_page": 1,
    "entity_name": "Invoice #67856369"
  },
  {
    "id": "ev-inv-207214",
    "text": "Invoice #69934544 issued by Spence-Castro to Wolfe and Sons for total $ 43,96 on 04/17/2014.",
    "quote": "Invoice #69934544 issued by Spence-Castro to Wolfe and Sons for total $ 43,96 on 04/17/2014.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-207214",
    "source_doc_name": "KatanaML_Invoice_0016.png",
    "source_page": 1,
    "entity_name": "Invoice #69934544"
  },
  {
    "id": "ev-inv-0f4f39",
    "text": "Invoice #23152691 issued by Whitaker Ltd to Stout-Miller for total $4783,70 on 08/01/2015.",
    "quote": "Invoice #23152691 issued by Whitaker Ltd to Stout-Miller for total $4783,70 on 08/01/2015.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-0f4f39",
    "source_doc_name": "KatanaML_Invoice_0017.png",
    "source_page": 1,
    "entity_name": "Invoice #23152691"
  },
  {
    "id": "ev-inv-84f21a",
    "text": "Invoice #14878236 issued by Hernandez, Coleman and Alvarado to Turner-Green for total $ 568,49 on 04/26/2015.",
    "quote": "Invoice #14878236 issued by Hernandez, Coleman and Alvarado to Turner-Green for total $ 568,49 on 04/26/2015.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-84f21a",
    "source_doc_name": "KatanaML_Invoice_0018.png",
    "source_page": 1,
    "entity_name": "Invoice #14878236"
  },
  {
    "id": "ev-inv-cd74fe",
    "text": "Invoice #84777898 issued by Byrd PLC to Palmer LLC for total $ 314,62 on 06/02/2017.",
    "quote": "Invoice #84777898 issued by Byrd PLC to Palmer LLC for total $ 314,62 on 06/02/2017.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-cd74fe",
    "source_doc_name": "KatanaML_Invoice_0019.png",
    "source_page": 1,
    "entity_name": "Invoice #84777898"
  },
  {
    "id": "ev-inv-e56ac0",
    "text": "Invoice #57338979 issued by Estrada and Sons to Santana-Sherman for total $15089,59 on 05/10/2021.",
    "quote": "Invoice #57338979 issued by Estrada and Sons to Santana-Sherman for total $15089,59 on 05/10/2021.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-e56ac0",
    "source_doc_name": "KatanaML_Invoice_0020.png",
    "source_page": 1,
    "entity_name": "Invoice #57338979"
  },
  {
    "id": "ev-inv-2d3d97",
    "text": "Invoice #56513760 issued by Lyons-Murphy to Lawrence LLC for total $7110,40 on 10/25/2011.",
    "quote": "Invoice #56513760 issued by Lyons-Murphy to Lawrence LLC for total $7110,40 on 10/25/2011.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-2d3d97",
    "source_doc_name": "KatanaML_Invoice_0036.png",
    "source_page": 1,
    "entity_name": "Invoice #56513760"
  },
  {
    "id": "ev-inv-1a86e0",
    "text": "Invoice #38870308 issued by Dunn-Campbel. 36709 Santiago Viaduct Dianaland, MN to Ramirez, Donaldson and Lane for total $ 328,83 on 08/01/2019.",
    "quote": "Invoice #38870308 issued by Dunn-Campbel. 36709 Santiago Viaduct Dianaland, MN to Ramirez, Donaldson and Lane for total $ 328,83 on 08/01/2019.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-1a86e0",
    "source_doc_name": "KatanaML_Invoice_0037.png",
    "source_page": 1,
    "entity_name": "Invoice #38870308"
  },
  {
    "id": "ev-inv-6f9438",
    "text": "Invoice #37999492 issued by Smith Ltd to Jones, Miller and Yoder for total $4949,18 on 10/22/2017.",
    "quote": "Invoice #37999492 issued by Smith Ltd to Jones, Miller and Yoder for total $4949,18 on 10/22/2017.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-6f9438",
    "source_doc_name": "KatanaML_Invoice_0038.png",
    "source_page": 1,
    "entity_name": "Invoice #37999492"
  },
  {
    "id": "ev-inv-482266",
    "text": "Invoice #75367021 issued by Martinez-Ramirez to Lawrence, Stevens and Robinson for total $36651,71 on 11/12/2018.",
    "quote": "Invoice #75367021 issued by Martinez-Ramirez to Lawrence, Stevens and Robinson for total $36651,71 on 11/12/2018.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-482266",
    "source_doc_name": "KatanaML_Invoice_0039.png",
    "source_page": 1,
    "entity_name": "Invoice #75367021"
  },
  {
    "id": "ev-inv-4afe17",
    "text": "Invoice #76903393 issued by Young, Owens and Hall PSC to King-Wells for total $5230,40 on 07/24/2012.",
    "quote": "Invoice #76903393 issued by Young, Owens and Hall PSC to King-Wells for total $5230,40 on 07/24/2012.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-4afe17",
    "source_doc_name": "KatanaML_Invoice_0040.png",
    "source_page": 1,
    "entity_name": "Invoice #76903393"
  },
  {
    "id": "ev-inv-abf93a",
    "text": "Invoice #18531177 issued by Adkins, Campbell and Butler PSC to Bird, Bates and Johnston for total $ 245,20 on 04/30/2015.",
    "quote": "Invoice #18531177 issued by Adkins, Campbell and Butler PSC to Bird, Bates and Johnston for total $ 245,20 on 04/30/2015.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-abf93a",
    "source_doc_name": "KatanaML_Invoice_0041.png",
    "source_page": 1,
    "entity_name": "Invoice #18531177"
  },
  {
    "id": "ev-inv-cd9f79",
    "text": "Invoice #65095335 issued by Payne-Davis to Flores LLC for total $46910,41 on 02/15/2017.",
    "quote": "Invoice #65095335 issued by Payne-Davis to Flores LLC for total $46910,41 on 02/15/2017.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-cd9f79",
    "source_doc_name": "KatanaML_Invoice_0042.png",
    "source_page": 1,
    "entity_name": "Invoice #65095335"
  },
  {
    "id": "ev-inv-d266b7",
    "text": "Invoice #76658127 issued by Crawford-Byrd PSC to Sherman PLC for total 628,00 on 10/23/2011.",
    "quote": "Invoice #76658127 issued by Crawford-Byrd PSC to Sherman PLC for total 628,00 on 10/23/2011.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-d266b7",
    "source_doc_name": "KatanaML_Invoice_0043.png",
    "source_page": 1,
    "entity_name": "Invoice #76658127"
  },
  {
    "id": "ev-inv-2c9f5c",
    "text": "Invoice #64281058 issued by Zuniga, Short and Jensen to Wells Ltd for total $ 15 416,49 on 11/08/2019.",
    "quote": "Invoice #64281058 issued by Zuniga, Short and Jensen to Wells Ltd for total $ 15 416,49 on 11/08/2019.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-2c9f5c",
    "source_doc_name": "KatanaML_Invoice_0044.png",
    "source_page": 1,
    "entity_name": "Invoice #64281058"
  },
  {
    "id": "ev-inv-aa4e0f",
    "text": "Invoice #64125453 issued by Soto and Sons to Campos PLC for total $ 296,91 on 03/25/2013.",
    "quote": "Invoice #64125453 issued by Soto and Sons to Campos PLC for total $ 296,91 on 03/25/2013.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-aa4e0f",
    "source_doc_name": "KatanaML_Invoice_0045.png",
    "source_page": 1,
    "entity_name": "Invoice #64125453"
  },
  {
    "id": "ev-inv-9fda38",
    "text": "Invoice #84635791 issued by Jimenez, Cummings and Ross to Jones Ltd for total $ 351,96 on 04/17/2020.",
    "quote": "Invoice #84635791 issued by Jimenez, Cummings and Ross to Jones Ltd for total $ 351,96 on 04/17/2020.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-9fda38",
    "source_doc_name": "KatanaML_Invoice_0046.png",
    "source_page": 1,
    "entity_name": "Invoice #84635791"
  },
  {
    "id": "ev-inv-b85544",
    "text": "Invoice #94404257 issued by Cruz PLC USNV Harris FPO AA to Sandoval-Phillips for total $ 138,90 on 07/03/2013.",
    "quote": "Invoice #94404257 issued by Cruz PLC USNV Harris FPO AA to Sandoval-Phillips for total $ 138,90 on 07/03/2013.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-b85544",
    "source_doc_name": "KatanaML_Invoice_0047.png",
    "source_page": 1,
    "entity_name": "Invoice #94404257"
  },
  {
    "id": "ev-inv-7b2092",
    "text": "Invoice #49106170 issued by Jackson-johnson to Huerta, Graham and Campbell for total $8905,77 on 04/30/2013.",
    "quote": "Invoice #49106170 issued by Jackson-johnson to Huerta, Graham and Campbell for total $8905,77 on 04/30/2013.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-7b2092",
    "source_doc_name": "KatanaML_Invoice_0048.png",
    "source_page": 1,
    "entity_name": "Invoice #49106170"
  },
  {
    "id": "ev-inv-f87077",
    "text": "Invoice #32131502 issued by Campbell, Mathis and Johnson to Jimenez, Smith and Lee for total $6640,07 on 02/26/2019.",
    "quote": "Invoice #32131502 issued by Campbell, Mathis and Johnson to Jimenez, Smith and Lee for total $6640,07 on 02/26/2019.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-f87077",
    "source_doc_name": "KatanaML_Invoice_0049.png",
    "source_page": 1,
    "entity_name": "Invoice #32131502"
  },
  {
    "id": "ev-inv-9643a6",
    "text": "Invoice #34528548 issued by Garcia, Stewart and Payne USCGC Frank FPO AE to Huerta Ltd for total $ 802,73 on 11/02/2015.",
    "quote": "Invoice #34528548 issued by Garcia, Stewart and Payne USCGC Frank FPO AE to Huerta Ltd for total $ 802,73 on 11/02/2015.",
    "confidence": 0.99,
    "status": "Supported",
    "source_doc_id": "inv-9643a6",
    "source_doc_name": "KatanaML_Invoice_0050.png",
    "source_page": 1,
    "entity_name": "Invoice #34528548"
  }
];

export const INITIAL_REVIEW_ITEMS = [];

export const INITIAL_CONTRADICTIONS = [];

export const SEMANTIC_MODEL_DATA = [
  {
    id: "sem-org",
    name: "Organization",
    color: "#3b82f6",
    description: "Legally incorporated company, business enterprise, or institutional supplier.",
    properties: ["legal_name", "tax_identifier", "registration_country", "industry", "headquarters_city"],
    allowed_relationships: [
      { target: "Contract", relation: "signs" },
      { target: "Product", relation: "purchases" },
      { target: "Product", relation: "supplies" },
      { target: "Invoice", relation: "issues" },
      { target: "Invoice", relation: "pays" }
    ],
    examples: [],
    instances_count: 1090
  },
  {
    id: "sem-per",
    name: "Person",
    color: "#8b5cf6",
    description: "Individual human actor such as an executive, authorized signatory, or account manager.",
    properties: ["full_name", "job_title", "department", "email", "authorization_level"],
    allowed_relationships: [
      { target: "Organization", relation: "represents" },
      { target: "Contract", relation: "authorizes" },
      { target: "Contract", relation: "signs" }
    ],
    examples: [],
    instances_count: 0
  },
  {
    id: "sem-prod",
    name: "Product",
    color: "#10b981",
    description: "Goods, materials, software licenses, or billable item deliverables.",
    properties: ["product_code", "standard_name", "unit_of_measure", "category", "unit_price"],
    allowed_relationships: [
      { target: "Organization", relation: "supplied_by" },
      { target: "Invoice", relation: "billed_on" }
    ],
    examples: [],
    instances_count: 981
  },
  {
    id: "sem-inv",
    name: "Invoice",
    color: "#06b6d4",
    description: "Commercial financial request for payment detailing items, tax, and settlement terms.",
    properties: ["invoice_number", "billing_date", "due_date", "total_amount", "currency", "payment_status"],
    allowed_relationships: [
      { target: "Organization", relation: "issued_by" },
      { target: "Organization", relation: "billed_to" },
      { target: "Product", relation: "line_item" },
      { target: "Money", relation: "total_due" }
    ],
    examples: [],
    instances_count: 591
  },
  {
    id: "sem-mon",
    name: "Money",
    color: "#14b8a6",
    description: "Financial monetary figure representing line item subtotals, VAT, or gross amounts.",
    properties: ["currency_symbol", "numeric_amount", "tax_type"],
    allowed_relationships: [
      { target: "Invoice", relation: "specified_on" }
    ],
    examples: [],
    instances_count: 55
  },
  {
    id: "sem-date",
    name: "Date",
    color: "#64748b",
    description: "Temporal issuance, transaction, or due date calendar timestamp.",
    properties: ["iso_format", "year", "month", "day"],
    allowed_relationships: [
      { target: "Invoice", relation: "transaction_date" }
    ],
    examples: [],
    instances_count: 30
  },
  {
    id: "sem-loc",
    name: "Location",
    color: "#ec4899",
    description: "Geographic address, city, country, or corporate headquarters site.",
    properties: ["street_address", "city", "country", "postal_code"],
    allowed_relationships: [
      { target: "Organization", relation: "located_in" }
    ],
    examples: [],
    instances_count: 8
  }
];

export const INITIAL_ANALYTICS = {
  kpis: {
    documents_processed: 591,
    documents_processed_today: 591,
    entities_extracted: 2717,
    entities_today: 2717,
    relationships_discovered: 3072,
    relationships_today: 3072,
    facts_extracted: 1838,
    facts_today: 1838
  },
  extraction_activity_timeline: [
    { day: "Day 1", count: 0 },
    { day: "Day 2", count: 0 },
    { day: "Day 3", count: 0 },
    { day: "Day 4", count: 0 },
    { day: "Today", count: 591 }
  ],
  entities_by_type: [
  {
    "name": "Invoice",
    "count": 591,
    "color": "#06b6d4"
  },
  {
    "name": "Organization",
    "count": 1090,
    "color": "#3b82f6"
  },
  {
    "name": "Product",
    "count": 981,
    "color": "#10b981"
  },
  {
    "name": "Money",
    "count": 55,
    "color": "#14b8a6"
  }
],
  confidence_distribution: [
    { range: "95-100%", count: 2173 },
    { range: "90-94%", count: 407 },
    { range: "80-89%", count: 135 },
    { range: "< 80%", count: 0 }
  ],
  human_review_metrics: {
    pending_reviews: 0,
    resolved_reviews: 591,
    rejected_hallucinations: 0
  }
};
