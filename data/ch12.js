const CH12_DATA = {
    num: 12,
    title: "Blood",
    accentColor: "#c0392b", 
    sections: [
        {
            label: "CENTRIFUGATION & BLOOD LAYERS",
            content: "Blood separation by density is a primary diagnostic tool in clinical settings.",
            image: "img/ch12_blood_centerfuge.PNG", 
            details: [
                "**Plasma (Top)**: ~55% volume. The liquid matrix containing water, proteins (Albumin), and nutrients.",
                "**Buffy Coat (Middle)**: <1% volume. Contains White Blood Cells (Leukocytes) and Platelets (Thrombocytes).",
                "**Hematocrit (Bottom)**: ~45% volume. The packed Red Blood Cell (Erythrocyte) portion.",
                "**Clinical Note**: Dehydration causes plasma volume to drop, which artificially raises the hematocrit percentage."
            ]
        },
        {
            label: "FORMED ELEMENTS: STRUCTURE & FUNCTION",
            content: "The cellular components of blood are specialized for transport, defense, and repair.",
            image: "img/ch14_blood.PNG", 
            details: [
                "**Erythrocytes (RBCs)**: Biconcave discs with no nucleus; contain Hemoglobin for $O_2$ transport.",
                "**Leukocytes (WBCs)**: Provide immunity; divided into Granulocytes (NEB) and Agranulocytes (ML).",
                "**Thrombocytes (Platelets)**: Cell fragments from megakaryocytes; essential for initiating hemostasis.",
                "**Hematopoiesis**: The production of all blood cells within the red bone marrow."
            ]
        },
        {
            label: "ABO & Rh BLOOD TYPING",
            content: "Transfusion compatibility is determined by surface antigens and plasma antibodies.",
            image: "img/ch12_blood.PNG", 
            details: [
                "**Antigens**: Surface markers (A, B, Rh) that identify the cell as 'self' or 'foreign'.",
                "**Antibodies**: Proteins in the plasma that attack mismatched antigens (Agglutination).",
                "**Universal Rules**: Type O- is the Universal Donor; Type AB+ is the Universal Recipient.",
                "**Rh Factor**: An additional D-antigen; critical to monitor in pregnancy (Rh incompatibility)."
            ]
        }
    ],
    vocab: [
        {t: "Hemostasis", d: "The three-step process to stop bleeding: Vascular Spasm, Platelet Plug, Coagulation."},
        {t: "Albumin", d: "Plasma protein responsible for maintaining colloid osmotic pressure."},
        {t: "Erythropoietin (EPO)", d: "Kidney hormone that stimulates red bone marrow to produce RBCs."},
        {t: "Agglutination", d: "The clumping of red blood cells during an incompatible transfusion."}
    ],
        questions: [
        {
            q: "Blood traveling from the Right Ventricle goes through which valve next?",
            opts: ["Bicuspid (Mitral)", "Aortic", "Pulmonary", "Tricuspid"],
            ans: 2,
            exp: "The Pulmonary valve leads to the lungs from the right side of the heart."
        },
        {
            q: "The natural pacemaker of the heart is the:",
            opts: ["AV Node", "Bundle of His", "SA Node", "Purkinje Fibers"],
            ans: 2,
            exp: "The SA Node (Sinoatrial) initiates the electrical heartbeat."
        },
        {
            q: "Which chamber of the heart has the thickest muscular wall?",
            opts: ["Right Atrium", "Left Atrium", "Right Ventricle", "Left Ventricle"],
            ans: 3,
            exp: "The Left Ventricle must pump blood to the entire body, requiring more force."
        },
    

        {
            q: "Which specific component of blood is found within the 'Buffy Coat'?",
            opts: ["Plasma Proteins", "Red Blood Cells", "Platelets and White Blood Cells", "Glucose and Electrolytes"],
            ans: 2,
            exp: "The Buffy Coat is the thin layer containing the immune cells and the clotting fragments."
        },
        {
            q: "A patient with Type O blood has which antibodies in their plasma?",
            opts: ["Anti-A only", "Anti-B only", "Neither Anti-A nor Anti-B", "Both Anti-A and Anti-B"],
            ans: 3,
            exp: "Type O lacks A and B antigens, so it naturally carries antibodies against both."
        }
    ]
};
