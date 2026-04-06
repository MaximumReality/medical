const CH12_DATA = {
    num: 12,
    title: "Blood",
    accentColor: "#c0392b", 
    sections: [
        {
            label: "BLOOD STRUCTURE & LAYERS",
            content: "Blood is a specialized connective tissue. When centrifuged, it separates into distinct layers based on density.",
            image: "img/ch14_blood.PNG", 
            details: [
                "**Plasma (55%)**: The straw-colored liquid containing water, proteins (Albumin), and nutrients.",
                "**Red Blood Cells (approx. 45%)**: Also called Erythrocytes; responsible for carrying oxygen via hemoglobin.",
                "**The Buffy Coat (<1%)**: A thin middle layer containing **White Blood Cells** and **Platelets**.",
                "**Hematocrit**: The measurement of the RBC percentage—vital for identifying anemia or polycythemia."
            ]
        },
        {
            label: "HEMOSTASIS & COAGULATION",
            content: "The process of stopping bleeding involves a rapid, localized cascade of events.",
            details: [
                "**Vascular Spasm**: Immediate contraction of the vessel to reduce blood flow.",
                "**Platelet Plug**: Platelets stick to exposed collagen to form a temporary seal.",
                "**Coagulation**: The conversion of soluble **Fibrinogen** into insoluble **Fibrin** threads to form a stable clot.",
                "**Vitamin K**: Required by the liver to synthesize many of these clotting factors."
            ]
        },
        {
            label: "ABO & RH BLOOD TYPING",
            content: "Blood compatibility is determined by antigens on the RBC surface and antibodies in the plasma.",
            details: [
                "**Type O-**: The Universal Donor; lacks A, B, and Rh antigens.",
                "**Type AB+**: The Universal Recipient; lacks anti-A, anti-B, and anti-Rh antibodies.",
                "**Agglutination**: The dangerous 'clumping' that occurs if a patient receives the wrong blood type."
            ]
        }
    ],
    vocab: [
        {t: "Erythropoietin (EPO)", d: "Kidney hormone that triggers RBC production when oxygen is low."},
        {t: "Hemoglobin", d: "Iron-rich protein that binds oxygen molecules."},
        {t: "Leukocytes", d: "White blood cells (Neutrophils, Lymphocytes, etc.) used for defense."},
        {t: "Thrombocytes", d: "Platelets; cell fragments essential for clotting."}
    ],
    questions: [
        {
            q: "Which plasma protein is most important for maintaining osmotic pressure?",
            opts: ["Fibrinogen", "Albumin", "Globulin", "Hemoglobin"],
            ans: 1,
            exp: "Albumin keeps water in the bloodstream; without it, patients develop severe edema (swelling)."
        },
        {
            q: "A high count of Neutrophils on a blood lab typically indicates:",
            opts: ["An allergic reaction", "A viral infection", "A bacterial infection", "A parasitic infection"],
            ans: 2,
            exp: "Neutrophils are the 'first responders' to bacterial invasions."
        }
    ]
};
