const CH14_DATA = {
    num: 14,
    title: "Blood",
    accentColor: "#c0392b", 
    sections: [
        {
            label: "BLOOD STRUCTURE & COMPOSITION",
            content: "Blood is a liquid connective tissue. The proportions of its components are essential for clinical diagnosis.",
            image: "img/ch12_blood.PNG", // The 55/1/45 split diagram
            details: [
                "**Plasma (55%)**: Contains 92% water, plus proteins (Albumin), glucose, and electrolytes.",
                "**Buffy Coat (<1%)**: The thin layer containing **White Blood Cells** and **Platelets**.",
                "**Red Blood Cells (45%)**: Also called the **Hematocrit**; these transport $O_2$ and $CO_2$.",
                "**Plasma vs. Serum**: Serum is plasma with the clotting factors (like fibrinogen) removed."
            ]
        },
        {
            label: "FORMED ELEMENTS: CLINICAL ROLES",
            content: "The specific cells within the blood have distinct life cycles and functions.",
            image: "img/ch14_blood.PNG", // The second blood structure image
            details: [
                "**Erythrocytes (RBCs)**: Biconcave discs with no nucleus; live about 120 days.",
                "**Leukocytes (WBCs)**: Divided into Granulocytes (Neutrophils, Eosinophils, Basophils) and Agranulocytes (Monocytes, Lymphocytes).",
                "**Thrombocytes (Platelets)**: Fragments of megakaryocytes that initiate the clotting process.",
                "**Hematopoiesis**: Blood cell formation occurring in the **Red Bone Marrow**."
            ]
        },
        {
            label: "ABO & RH BLOOD TYPING",
            content: "Compatibility is determined by the interaction between donor antigens and recipient antibodies.",
            details: [
                "**Antigens (Agglutinogens)**: Proteins found on the surface of the Red Blood Cell.",
                "**Antibodies (Agglutinins)**: Proteins in the plasma that attack foreign blood types.",
                "**Type O-**: Universal Donor (no antigens).",
                "**Type AB+**: Universal Recipient (no antibodies).",
                "**Rh Incompatibility**: Crucial in pregnancy (Erythroblastosis Fetalis) if an Rh- mother carries an Rh+ fetus."
            ]
        }
    ],
    vocab: [
        {t: "Hemostasis", d: "The process that stops bleeding (Vascular spasm, Platelet plug, Coagulation)."},
        {t: "Fibrinogen", d: "A soluble plasma protein converted to insoluble Fibrin during clotting."},
        {t: "Anemia", d: "A condition where the blood has an abnormally low oxygen-carrying capacity."},
        {t: "Agglutination", d: "The clumping of RBCs when antigens meet their corresponding antibodies."}
    ],
    questions: [
        {
            q: "Which blood component is responsible for the 'Buffy Coat' seen after centrifugation?",
            opts: ["Plasma", "Red Blood Cells", "White Blood Cells and Platelets", "Albumin"],
            ans: 2,
            exp: "The Buffy Coat is the thin middle layer containing the immune cells and clotting fragments."
        },
        {
            q: "A person with Type B blood has which antigens and antibodies?",
            opts: ["B antigens; Anti-A antibodies", "A antigens; Anti-B antibodies", "B antigens; Anti-B antibodies", "No antigens; A and B antibodies"],
            ans: 0,
            exp: "You have the antigens of your type, but the antibodies for the type you *don't* have."
        }
    ]
};
