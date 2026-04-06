const CH11_DATA = {
    num: 11,
    title: "Endocrine System",
    accentColor: "#8e44ad", // Hormone Purple
    sections: [
        {
            label: "MECHANISMS OF HORMONE ACTION",
            content: "The endocrine system uses chemical messengers (hormones) to communicate with target cells via the bloodstream.",
            details: [
                "**Endocrine vs. Exocrine**: Endocrine glands are ductless and secrete into the blood; Exocrine glands secrete into ducts (e.g., sweat).",
                "**Steroid Hormones**: Lipid-soluble; can cross the cell membrane to bind receptors inside the nucleus.",
                "**Non-Steroid Hormones**: Water-soluble; bind to receptors on the cell membrane and use 'Second Messengers' (like cAMP).",
                "**Negative Feedback**: The primary mechanism for regulating hormone levels; once a desired effect is achieved, secretion is inhibited."
            ]
        },
        {
            label: "THE MASTER GLANDS: HYPOTHALAMUS & PITUITARY",
            content: "The hypothalamus controls the pituitary gland, which in turn regulates many other endocrine glands.",
            details: [
                "**Hypothalamus**: The link between the nervous and endocrine systems; controls the 'Master Gland.'",
                "**Anterior Pituitary**: Secretes GH (Growth), PRL (Prolactin), TSH (Thyroid-stimulating), ACTH, FSH, and LH.",
                "**Posterior Pituitary**: Stores and releases **Antidiuretic Hormone (ADH)** for water retention and **Oxytocin** for labor/milk let-down.",
                "**Clinical Note**: ADH is crucial in nursing for managing fluid balance and blood pressure."
            ]
        },
        {
            label: "PERIPHERAL ENDOCRINE GLANDS",
            content: "Major glands that regulate metabolism, stress, and blood glucose.",
            details: [
                "**Thyroid Gland**: Produces T3 and T4 (metabolism) and Calcitonin (lowers blood calcium).",
                "**Parathyroid Glands**: Produce PTH, which increases blood calcium by stimulating osteoclasts.",
                "**Adrenal Cortex**: Secretes Cortisol (stress) and Aldosterone (sodium/water balance).",
                "**Adrenal Medulla**: Secretes Epinephrine and Norepinephrine (Fight or Flight).",
                "**Pancreas**: Dual-function gland; **Insulin** (Beta cells) lowers blood glucose, while **Glucagon** (Alpha cells) raises it."
            ]
        }
    ],
    vocab: [
        {t: "Target Cells", d: "Cells with specific receptors for a particular hormone."},
        {t: "Prostaglandins", d: "Lipids that act as 'local hormones' affecting only neighboring cells."},
        {t: "Diabetes Mellitus", d: "A metabolic disorder caused by insulin deficiency or resistance."},
        {t: "Goiter", d: "Enlargement of the thyroid gland, often due to iodine deficiency."},
        {t: "Circadian Rhythms", d: "Patterns of activity associated with the 24-hour cycle of day and night."}
    ],
    questions: [
        {
            q: "Which hormone is responsible for lowering blood glucose levels by facilitating glucose uptake into cells?",
            opts: ["Glucagon", "Cortisol", "Insulin", "Aldosterone"],
            ans: 2,
            exp: "Insulin, secreted by Beta cells in the pancreas, is the primary hormone that lowers blood sugar."
        },
        {
            q: "The 'fight-or-flight' response is mediated by hormones secreted from which specific area?",
            opts: ["Adrenal Cortex", "Adrenal Medulla", "Thyroid Gland", "Anterior Pituitary"],
            ans: 1,
            exp: "The Adrenal Medulla secretes catecholamines (Epinephrine/Norepinephrine) during acute stress."
        }
    ]
};
