const CH6_DATA = {
    num: 6,
    title: "Bone Tissue & Skeletal System",
    accentColor: "#e0e0e0", // Bone White
    sections: [
        {
            label: "BONE CELLS: THE CREW",
            content: "Four types of cells maintain bone homeostasis. Knowing these is essential for understanding osteoporosis.",
            image: "img/ch6_bone-remodeling-process.JPG",
            details: [
                "**Osteogenic Cells**: Stem cells that divide to produce osteoblasts.",
                "**Osteoblasts**: 'B' is for 'Builders.' They secrete the bone matrix (osteoid).",
                "**Osteocytes**: Mature bone cells that monitor and maintain the tissue.",
                "**Osteoclasts**: 'C' is for 'Chewers.' Large cells that dissolve bone matrix to release calcium into the blood."
            ]
        },
        {
            label: "COMPACT VS. SPONGY BONE",
            content: "Bones are not solid blocks; they have specific internal architectures.",
            image: "img/ch6_compact-vs-spongy.JPG",
            details: [
                "**Compact Bone**: The hard outer layer. Organized into **Osteons** (Haversian systems).",
                "**Spongy (Cancellous) Bone**: Found at the ends of long bones. Organized into **Trabeculae** (struts) that house red bone marrow.",
                "**Clinical Note**: Red bone marrow is where hematopoiesis (blood cell production) occurs."
            ]
        },
        {
            label: "OSSIFICATION (BONE GROWTH)",
            content: "How the skeleton forms from a fetus into adulthood.",
            image: "img/ch6_ossification.JPG",
            details: [
                "**Intramembranous**: Bone develops from fibrous membranes (e.g., flat bones of the skull).",
                "**Endochondral**: Bone replaces a hyaline cartilage model (e.g., long bones like the femur).",
                "**Epiphyseal Plate**: The 'growth plate.' When this turns to bone (the line), vertical growth stops."
            ]
        }
    ],
    vocab: [
        {t: "Diaphysis", d: "The shaft or body of a long bone."},
        {t: "Epiphysis", d: "The proximal and distal ends of a bone."},
        {t: "Periosteum", d: "Tough membrane covering the bone surface."},
        {t: "Calcification", d: "Deposition of calcium salts in the bone matrix."},
        {t: "Resorption", d: "The breakdown of bone extracellular matrix by osteoclasts."},
        {t: "Osteon", d: "The basic structural unit of compact bone."}
    ],
    questions: [
        {
            q: "Which cell is responsible for 'building' the bone matrix?",
            opts: ["Osteoclast", "Osteoblast", "Osteon", "Chondrocyte"],
            ans: 1,
            exp: "Osteoblasts build bone; Osteoclasts consume/break down bone."
        },
        {
            q: "Where does vertical bone growth occur in a child?",
            opts: ["Periosteum", "Diaphysis", "Epiphyseal Plate", "Medullary Cavity"],
            ans: 2,
            exp: "The epiphyseal plate (growth plate) is where cartilage is replaced by bone for length."
        }
    ]
};
