const CH12_DATA = {
    num: 12,
    title: "Blood",
    accentColor: "#c0392b", // Deep Blood Red
    sections: [
        {
            label: "BLOOD COMPOSITION & HEMATOCRIT",
            content: "Blood is a connective tissue consisting of formed elements suspended in a liquid plasma.",
            details: [
                "**Plasma (55%)**: The liquid portion containing water, proteins (Albumin), and electrolytes.",
                "**Formed Elements (45%)**: Red Blood Cells (RBCs), White Blood Cells (WBCs), and Platelets.",
                "**Hematocrit (Hct)**: The percentage of RBCs in a blood sample; critical for diagnosing anemia or dehydration.",
                "**Buffy Coat**: The thin layer of WBCs and platelets found between the plasma and RBCs after centrifuging."
            ]
        },
        {
            label: "FORMED ELEMENTS: RBCs, WBCs, & PLATELETS",
            content: "Each cell type has a specialized clinical function.",
            details: [
                "**Erythrocytes (RBCs)**: Biconcave discs containing **Hemoglobin** for oxygen transport. They lack a nucleus to maximize space.",
                "**Leukocytes (WBCs)**: Provide immunity. Divided into Granulocytes (Neutrophils, Eosinophils, Basophils) and Agranulocytes (Lymphocytes, Monocytes).",
                "**Thrombocytes (Platelets)**: Cell fragments essential for blood clotting and repairing damaged vessels.",
                "**Hematopoiesis**: The process of blood cell formation occurring in the **Red Bone Marrow**."
            ]
        },
        {
            label: "HEMOSTASIS: THE CLOTTING PROCESS",
            content: "The body's three-step mechanism to stop bleeding (Hemorrhage).",
            details: [
                "**1. Vascular Spasm**: Smooth muscle in the vessel wall contracts to reduce blood loss.",
                "**2. Platelet Plug Formation**: Platelets adhere to exposed collagen and stick to each other.",
                "**3. Blood Coagulation**: A complex cascade where **Fibrinogen** is converted into **Fibrin** threads to create a mesh-like clot.",
                "**Vitamin K**: An essential cofactor for the synthesis of many clotting factors in the liver."
            ]
        },
        {
            label: "BLOOD TYPING & AGGLUTINATION",
            content: "Blood types are determined by specific antigens on the surface of RBCs.",
            details: [
                "**Antigens**: Markers on the cell surface (A, B, or Rh).",
                "**Antibodies**: Proteins in the plasma that attack foreign antigens.",
                "**Type O-**: The **Universal Donor** because it lacks A, B, and Rh antigens.",
                "**Type AB+**: The **Universal Recipient** because it lacks anti-A, anti-B, and anti-Rh antibodies.",
                "**Agglutination**: The dangerous clumping of RBCs that occurs during a mismatched transfusion."
            ]
        }
    ],
    vocab: [
        {t: "Erythropoietin (EPO)", d: "A hormone from the kidneys that stimulates RBC production in response to low oxygen."},
        {t: "Hemoglobin", d: "The iron-containing protein in RBCs that binds oxygen."},
        {t: "Embolus", d: "A blood clot that breaks loose and travels through the bloodstream."},
        {t: "Thrombus", d: "An abnormal blood clot that forms in a vessel."},
        {t: "Anemia", d: "A condition characterized by a deficiency of RBCs or hemoglobin, reducing oxygen-carrying capacity."}
    ],
    questions: [
        {
            q: "Which blood type is considered the Universal Donor?",
            opts: ["Type A+", "Type O-", "Type AB+", "Type B-"],
            ans: 1,
            exp: "Type O- lacks A, B, and Rh antigens, meaning it won't trigger an immune response in any recipient."
        },
        {
            q: "What is the primary function of Albumin in the blood plasma?",
            opts: ["Oxygen transport", "Blood clotting", "Maintaining osmotic pressure", "Immune defense"],
            ans: 2,
            exp: "Albumin is the most abundant plasma protein; it keeps water from leaking out of the capillaries."
        }
    ]
};
