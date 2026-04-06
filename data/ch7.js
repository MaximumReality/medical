const CH7_DATA = {
    num: 7,
    title: "Skeletal System",
    accentColor: "#95a5a6", // Bone Slate
    sections: [
        {
            label: "THE AXIAL SKELETON: SKULL & TRUNK",
            content: "The axial skeleton forms the central axis of the body, protecting the brain, spinal cord, and thoracic organs.",
            details: [
                "**The Skull**: 22 bones joined by **Sutures** (immovable joints). Notable landmarks include the **Foramen Magnum** and the **Sella Turcica** (houses the pituitary gland).",
                "**Vertebral Column**: 26 adult bones. Cervical (7), Thoracic (12), Lumbar (5), plus the fused Sacrum and Coccyx.",
                "**Thoracic Cage**: 12 pairs of ribs. True ribs (1-7) attach directly to the **Sternum**; False ribs (8-12) attach indirectly or not at all (Floating).",
                "**Hyoid Bone**: Located in the neck; unique because it does not articulate with any other bone."
            ]
        },
        {
            label: "APPENDICULAR: PECTORAL GIRDLE & UPPER LIMB",
            content: "The upper appendicular skeleton is specialized for a wide range of motion and manipulation.",
            details: [
                "**Pectoral Girdle**: Consists of the **Clavicle** (collarbone) and **Scapula** (shoulder blade).",
                "**Upper Limb**: Humerus (arm), Radius (lateral forearm), and Ulna (medial forearm).",
                "**The Elbow**: Formed by the **Olecranon Process** of the ulna articulating with the humerus."
            ]
        },
        {
            label: "CARPAL BONES & MNEMONIC",
            content: "The 8 carpal bones are arranged in two rows, labeled Lateral (thumb) to Medial (pinky).",
            image: "img/ch8_wrist_mnemonic.JPG", 
            details: [
                "**Proximal Row**: **S**caphoid, **L**unate, **T**riquetrum, **P**isiform.",
                "**Distal Row**: **T**rapezium, **T**rapezoid, **C**apitate, **H**amate.",
                "**Mnemonic**: 'Some Lovers Try Positions That They Can't Handle'.",
                "**Clinical Note**: The **Scaphoid** is the most frequently fractured carpal bone, often via a 'FOOSH' injury."
            ]
        },
        {
            label: "APPENDICULAR: PELVIC GIRDLE & LOWER LIMB",
            content: "The lower appendicular skeleton is engineered for weight-bearing, stability, and locomotion.",
            details: [
                "**Pelvic Girdle**: Formed by two **Coxal bones**, each composed of the fused Ilium, Ischium, and Pubis.",
                "**Lower Limb**: Femur (thigh), Tibia (weight-bearing shin), and Fibula (lateral support).",
                "**Patella**: A sesamoid bone located within the quadriceps tendon to protect the knee joint."
            ]
        },
        {
            label: "SEXUAL DIMORPHISM OF THE PELVIS",
            content: "The female pelvis exhibits structural adaptations for childbirth.",
            image: "img/ch8_pelvis.png", 
            details: [
                "**Female Pelvis**: Wider iliac bones, a broader pubic arch (>90°), and a larger pelvic inlet/outlet.",
                "**Male Pelvis**: Narrower, heavier bone structure, and a heart-shaped pelvic inlet.",
                "**Clinical Significance**: These differences are vital in forensic medicine and obstetrics to assess birth canal clearance."
            ]
        },
        {
            label: "ANKLE & FOOT STRUCTURE",
            content: "The foot utilizes 7 tarsal bones and high-tension arches to support body weight.",
            image: "img/ch8_foot.JPG", 
            details: [
                "**Tarsals**: The **Talus** articulates with the tibia; the **Calcaneus** forms the heel.",
                "**Metatarsals & Phalanges**: Numbered I-V starting at the Hallux (big toe).",
                "**Arches**: Longitudinal and transverse arches distribute weight and provide leverage for bipedal gait."
            ]
        }
    ],
    vocab: [
        {t: "Acetabulum", d: "The large socket in the coxal bone for the head of the femur."},
        {t: "Foramen Magnum", d: "The opening in the occipital bone for the spinal cord."},
        {t: "Scoliosis", d: "Abnormal lateral curvature of the vertebral column."},
        {t: "Fontanels", d: "Membranous 'soft spots' in the infant skull allowing for brain growth and birth compression."},
        {t: "Malleolus", d: "The distal 'ankle' projections of the Tibia (Medial) and Fibula (Lateral)."}
    ],
    questions: [
        {
            q: "Which bone in the forearm is located on the lateral (thumb) side?",
            opts: ["Ulna", "Radius", "Tibia", "Fibula"],
            ans: 1,
            exp: "The Radius is lateral and 'radiates' around the ulna during forearm rotation."
        },
        {
            q: "The 'Sella Turcica,' which houses the pituitary gland, is a landmark on which bone?",
            opts: ["Ethmoid", "Temporal", "Sphenoid", "Maxilla"],
            ans: 2,
            exp: "The Sphenoid bone is the keystone of the cranium and contains the sella turcica."
        }
    ]
};
