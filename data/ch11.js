const CH11_DATA = {
    num: 11,
    title: "Endocrine System",
    accentColor: "#8e44ad", 
    sections: [
        {
            label: "GLAND LOCATIONS & HORMONES",
            content: "The endocrine system consists of glands that secrete hormones directly into the blood to regulate metabolism and homeostasis.",
            image: "img/ch11_endocrine_system.PNG", 
            details: [
                "**Hypothalamus & Pituitary**: The 'Command Center' located in the brain; regulates growth, water balance (ADH), and reproduction.",
                "**Thyroid & Parathyroid**: Located in the neck; controls metabolic rate ($T_3$/$T_4$) and blood calcium levels (Calcitonin/PTH).",
                "**Adrenal Glands**: Sit atop the kidneys; manage stress (Cortisol/Epinephrine) and salt balance (Aldosterone).",
                "**Pancreas**: Located behind the stomach; regulates blood glucose via **Insulin** and **Glucagon**.",
                "**Pineal Gland**: Located in the brain; secretes Melatonin to regulate sleep-wake cycles."
            ]
        },
        {
            label: "HORMONE CLASSIFICATION",
            content: "Hormones are grouped by their chemical structure, which determines how they interact with target cells.",
            details: [
                "**Steroid Hormones**: Derived from cholesterol (e.g., Estrogen, Testosterone, Cortisol); they are lipid-soluble and can enter the cell nucleus directly.",
                "**Non-Steroid Hormones**: Derived from amino acids (e.g., Insulin, GH); they bind to receptors on the cell membrane and use 'second messengers' like cAMP.",
                "**Prostaglandins**: Lipids that act as 'local hormones' to trigger inflammation or uterine contractions."
            ]
        },
        {
            label: "CLINICAL GLUCOSE REGULATION",
            content: "A critical nursing concept: the antagonistic relationship between pancreatic hormones.",
            details: [
                "**Insulin (Beta Cells)**: Lowers blood glucose by moving sugar into the cells for energy. Deficiency leads to Diabetes Mellitus.",
                "**Glucagon (Alpha Cells)**: Raises blood glucose by stimulating the liver to break down glycogen into glucose.",
                "**Negative Feedback**: Once blood sugar stabilizes, the pancreas stops secreting the respective hormone to prevent dangerous fluctuations."
            ]
        }
    ],
    vocab: [
        {t: "Negative Feedback", d: "The primary mechanism for maintaining hormone homeostasis."},
        {t: "Target Cells", d: "Cells with specific receptors that allow them to respond to a particular hormone."},
        {t: "ADH (Antidiuretic Hormone)", d: "Causes kidneys to conserve water; crucial for maintaining blood pressure."},
        {t: "Oxytocin", d: "Stimulates uterine contractions during labor and milk 'let-down' during nursing."}
    ],
    questions: [
        {
            q: "Which gland is responsible for secreting hormones that increase the basal metabolic rate?",
            opts: ["Parathyroid", "Adrenal", "Thyroid", "Pineal"],
            ans: 2,
            exp: "The Thyroid gland secretes T3 and T4, which are the primary regulators of cellular metabolism."
        },
        {
            q: "A patient with high blood calcium levels would likely see an increase in which hormone to bring it back to normal?",
            opts: ["PTH", "Calcitonin", "Aldosterone", "Glucagon"],
            ans: 1,
            exp: "Calcitonin (from the thyroid) 'tones' down blood calcium by depositing it into the bones."
        }
    ]
};
