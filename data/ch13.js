const CH13_DATA = {
    num: 13,
    title: "Cardiovascular System",
    accentColor: "#e67e22", // Heart Orange/Red
    sections: [
        {
            label: "INTERNAL ANATOMY & VALVES",
            content: "The heart is a double pump with four chambers and four valves that ensure one-way blood flow.",
            image: "img/ch13_heart_enlarged.JPG", 
            details: [
                "**Atria**: The receiving chambers (Right receives deoxygenated; Left receives oxygenated).",
                "**Ventricles**: The pumping chambers; the **Left Ventricle** is the thickest because it pumps to the whole body.",
                "**AV Valves**: Tricuspid (Right) and Mitral/Bicuspid (Left) prevent backflow into the atria.",
                "**Semilunar Valves**: Pulmonary and Aortic valves prevent backflow into the ventricles."
            ]
        },
        {
            label: "PATHWAY OF BLOOD FLOW",
            content: "Tracing a drop of blood through the pulmonary and systemic circuits.",
            image: "img/ch15_heart_internal.PNG", 
            details: [
                "**Right Side (Pulmonary)**: Vena Cava → Right Atrium → Tricuspid → Right Ventricle → Pulmonary Valve → Lungs.",
                "**Left Side (Systemic)**: Pulmonary Veins → Left Atrium → Mitral → Left Ventricle → Aortic Valve → Aorta.",
                "**Clinical Note**: Most heart failure begins in the Left Ventricle, leading to fluid backup in the lungs (Pulmonary Edema)."
            ]
        },
        {
            label: "CARDIAC CONDUCTION SYSTEM",
            content: "The heart's 'electrical wiring' coordinates the contraction of the chambers.",
            image: "img/ch15_conduction.JPG", 
            details: [
                "**SA Node**: The 'Pacemaker'; initiates the heartbeat in the right atrium.",
                "**AV Node**: Delay point; allows the atria to finish contracting before the ventricles start.",
                "**Bundle of His & Purkinje Fibers**: Rapidly conduct the signal to the apex to trigger ventricular contraction.",
                "**EKG Components**: P-wave (Atrial Depolarization), QRS Complex (Ventricular Depolarization), T-wave (Ventricular Repolarization)."
            ]
        }
    ],
    vocab: [
        {t: "Systole", d: "The phase of contraction when the heart pumps blood out."},
        {t: "Diastole", d: "The phase of relaxation when the heart chambers fill with blood."},
        {t: "Cardiac Output", d: "The volume of blood pumped by each ventricle per minute (Stroke Volume x Heart Rate)."},
        {t: "Myocardium", d: "The thick middle layer of the heart wall composed of cardiac muscle tissue."},
        {t: "Pericardium", d: "The protective sac surrounding the heart."}
    ],
    questions: [
        {
            q: "Which valve prevents blood from flowing back into the Left Ventricle?",
            opts: ["Tricuspid Valve", "Mitral Valve", "Aortic Valve", "Pulmonary Valve"],
            ans: 2,
            exp: "The Aortic Semilunar valve closes at the end of systole to keep blood in the aorta."
        },
        {
            q: "In the conduction system, what is considered the primary pacemaker of the heart?",
            opts: ["AV Node", "SA Node", "Purkinje Fibers", "Bundle of His"],
            ans: 1,
            exp: "The Sinoatrial (SA) Node normally sets the heart rate at 60-100 beats per minute."
        }
    ]
};
