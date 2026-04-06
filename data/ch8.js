const CH8_DATA = {
    num: 8,
    title: "The Appendicular Skeleton",
    accentColor: "#3498db", // Cool Blue for the limbs
    sections: [
        {
            label: "PECTORAL GIRDLE & UPPER LIMB",
            content: "Attaches the upper limbs to the axial skeleton. Designed for maximum mobility.",
            details: [
                "**Clavicle**: The collarbone; the most frequently fractured bone in the body.",
                "**Scapula**: The shoulder blade; features the Acromion (connects to clavicle) and Glenoid Cavity (socket for humerus).",
                "**Humerus**: The arm bone; fits into the scapula.",
                "**Ulna & Radius**: The forearm. The Ulna is on the pinky side (medial), Radius is on the thumb side (lateral)."
            ]
        },
        {
            label: "PELVIC GIRDLE & LOWER LIMB",
            content: "Attaches the lower limbs to the axial skeleton. Designed for weight-bearing and stability.",
            details: [
                "**Coxal Bone**: The hip bone, composed of three fused bones: Ilium, Ischium, and Pubis.",
                "**Femur**: The thigh bone; the longest, heaviest, and strongest bone in the body.",
                "**Tibia & Fibula**: The leg. Tibia is the weight-bearing 'shin bone'; Fibula is the slender lateral bone.",
                "**Patella**: The kneecap; a sesamoid bone that protects the knee joint."
            ]
        },
               {
            label: "MALE VS. FEMALE PELVIS",
            content: "The female pelvis is adapted for pregnancy and childbirth, resulting in distinct structural differences.",
            image: "img/ch8_pelvis.png", 
            details: [
                "**Female Pelvis**: Wider, shallower, and has a larger pelvic inlet. The pubic arch is usually greater than 90°.",
                "**Male Pelvis**: Narrower, deeper, and heavier. The pubic arch is usually less than 90°.",
                "**Greater Sciatic Notch**: Significantly wider in females to accommodate a wider birth canal.",
                "**Clinical Note**: These structural differences are a primary method used in forensic anthropology to determine the biological sex of skeletal remains."
            ]
        }

    ],
    vocab: [
        {t: "Carpals", d: "The 8 bones of the wrist."},
        {t: "Tarsals", d: "The 7 bones of the ankle/foot (includes the Calcaneus/heel)."},
        {t: "Phalanges", d: "The bones of the fingers and toes."},
        {t: "Acetabulum", d: "The deep socket in the hip bone that receives the head of the femur."},
        {t: "Olecranon", d: "The 'elbow' point on the proximal end of the ulna."},
        {t: "Malleolus", d: "The 'ankle bone' bumps (Medial on Tibia, Lateral on Fibula)."}
    ],
    questions: [
        {
            q: "Which forearm bone is located on the thumb side (lateral)?",
            opts: ["Ulna", "Radius", "Tibia", "Humerus"],
            ans: 1,
            exp: "The Radius 'radiates' around the thumb. It is always lateral in anatomical position."
        },
        {
            q: "The 'heel bone' is technically called the:",
            opts: ["Talus", "Cuboid", "Calcaneus", "Navicular"],
            ans: 2,
            exp: "The Calcaneus is the largest tarsal bone and forms the heel."
        }
    ]
};
