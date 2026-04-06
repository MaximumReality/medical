const CH14_DATA = {
    num: 14,
    title: "Blood",
    accentColor: "#c0392b", 
    sections: [
        {
            label: "MECHANICAL SEPARATION (CENTRIFUGATION)",
            content: "When blood is spun in a centrifuge, its components separate by density, providing a snapshot of a patient's health.",
            image: "img/ch12_blood_centerfuge.PNG", 
            details: [
                "**Plasma (Top Layer)**: Approximately 55% of the volume; contains water, electrolytes, and proteins.",
                "**Buffy Coat (Middle Layer)**: Less than 1% of the volume; consists of White Blood Cells and Platelets.",
                "**Red Blood Cells (Bottom Layer)**: Approximately 45% of the volume; also known as the Hematocrit.",
                "**Clinical Application**: Dehydration often results in a higher hematocrit percentage because the plasma volume (water) decreases."
            ]
        },
        {
            label: "BLOOD STRUCTURE & FORMED ELEMENTS",
            content: "Blood consists of cells and cell fragments known as 'formed elements' suspended in plasma.",
            image: "img/ch14_blood.PNG", 
            details: [
                "**Erythrocytes (RBCs)**: Biconcave discs specialized for carrying oxygen via Hemoglobin.",
                "**Leukocytes (WBCs)**: The body's defense system, including Neutrophils (bacteria) and Lymphocytes (viruses).",
                "**Thrombocytes (Platelets)**: Crucial fragments for the initiation of hemostasis (clotting).",
                "**Hematopoiesis**: The continuous production of these cells within the Red Bone Marrow."
            ]
        },
        {
            label: "TRANSFUSION MEDICINE: ABO & Rh",
            content: "Blood typing is based on the presence or absence of specific antigens on the erythrocyte surface.",
            image: "img/ch12_blood.PNG", 
            details: [
                "**Antigens vs. Antibodies**: You possess antigens for your blood type and antibodies against types you lack.",
                "**The Universal Rules**: Type O- is the Universal Donor; Type AB+ is the Universal Recipient.",
                "**Rh Factor**: Differentiating between 'Positive' and 'Negative' blood; critical for preventing hemolytic disease of the newborn.",
                "**Agglutination**: The life-threatening clumping reaction when incompatible blood types are mixed."
            ]
        }
    ],
    vocab: [
        {t: "Albumin", d: "The most abundant plasma protein; maintains osmotic pressure to prevent edema."},
        {t: "Fibrin", d: "The thread-like protein that forms the structural basis of a blood clot."},
        {t: "Erythropoietin (EPO)", d: "A kidney hormone that triggers the production of new Red Blood Cells."},
        {t: "Hemostasis", d: "The multi-step process of stopping bleeding (Vascular spasm, Plug, Coagulation)."}
    ],
    questions: [
        {
            q: "Which layer of a centrifuged blood sample contains the leukocytes?",
            opts: ["The Plasma", "The Buffy Coat", "The Hematocrit", "The Serum"],
            ans: 1,
            exp: "Leukocytes (WBCs) and Platelets settle in the thin 'Buffy Coat' between the plasma and RBCs."
        },
        {
            q: "A person with Type O blood has which antibodies in their plasma?",
            opts: ["Anti-A only", "Anti-B only", "Both Anti-A and Anti-B", "Neither Anti-A nor Anti-B"],
            ans: 2,
            exp: "Type O has no surface antigens, so it naturally produces antibodies against both A and B types."
        }
    ]
};
