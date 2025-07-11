const teacherDataByDay = {
    Monday: {
        classA: {
            period1:"SANP",
            period2:"SANP",
            period3:"MVHD",
            period4:"GHDC",
            period5:null,
            period6:"HLDP",
            period7:"SDJP",
            period8:"OPT2A",
            period9:"MACH", // New period
        },
        classB: {
            period1:"STIN",
            period2:"DGSR",
            period3:"DGSR",
            period4:"MKRC",
            period5:null,
            period6:"HRNG",
            period7:"KHNL",
            period8:"OPT2A",
            period9:"KSRI", // New period
        },
        classC: {
            period1:"WHG",
            period2:"WHG",
            period3:"HRNG",
            period4:"BPLA",
            period5:null,
            period6:"MDMU",
            period7:"MDMU",
            period8:"OPT2A",
            period9:"ASMA", // New period
        },
        classD: {
            period1:"NUWA",
            period2:"SDJP",
            period3:"BDSE",
            period4:"KSRI",
            period5:null,
            period6:"MVHD",
            period7:"MVHD",
            period8:"IAGA",
            period9:"IAGA", // New period
        },
        classE: {
            period1:"KSRI",
            period2:"IUG",
            period3:"GISA",
            period4:"WARW",
            period5:null,
            period6:"SANP",
            period7:"SANP",
            period8:"NPAM",
            period9:"NPAM", // New period
        },
        classF: {
            period1:"SMYD",
            period2:"YASK",
            period3:"GHDC",
            period4:"MACH",
            period5:null,
            period6:"UJTC",
            period7:"HLDP",
            period8:"HLDP",
            period9:"YASK", // New period
        },
    },
    Tuesday: {
        classA: {
            period1:"SANP",
            period2:"HLDP",
            period3:"HLDP",
            period4:"GHDC",
            period5:null,
            period6:"OPT3A",
            period7:"MVHD",
            period8:"OPT1A",
            period9:"SDJP", // New period
        },
        classB: {
            period1:"STIN",
            period2:"STIN",
            period3:"KHNL",
            period4:"MKRC",
            period5:null,
            period6:"OPT3A",
            period7:"DGSR",
            period8:"OPT1A",
            period9:"HRNG", // New period
        },
        classC: {
            period1:"WHG",
            period2:"HRNG",
            period3:"MACH",
            period4:"BPLA",
            period5:null,
            period6:"OPT3A",
            period7:"ASMA",
            period8:"OPT1A",
            period9:"MDMU", // New period
        },
        classD: {
            period1:"OPT1B",
            period2:"OPT1B",
            period3:"SDJP",
            period4:"OPT2B",
            period5:null,
            period6:"NUWA",
            period7:"NUWA",
            period8:"KSRI",
            period9:"BDSE", // New period
        },
        classE: {
            period1:"OPT1B",
            period2:"OPT1B",
            period3:"IUG",
            period4:"OPT2B",
            period5:null,
            period6:"WARW",
            period7:"WARW",
            period8:"NPAM",
            period9:"GISA", // New period
        },
        classF: {
            period1:"OPT1B",
            period2:"OPT1B",
            period3:"SMYD",
            period4:"OPT2B",
            period5:null,
            period6:"HLDP",
            period7:"HLDP",
            period8:"SWM",
            period9:"GHDC", // New period
        },
    },
    Wednesday: {
        classA: {
            period1:"SANP",
            period2:"GHDC",
            period3:"GHDC",
            period4:"HLDP",
            period5:null,
            period6:"SDJP",
            period7:"MVHD",
            period8:"OPT1A",
            period9:"OPT1A", // New period
        },
        classB: {
            period1:"STIN",
            period2:"MKRC",
            period3:"MKRC",
            period4:"KHNL",
            period5:null,
            period6:"DGSR",
            period7:"IUG",
            period8:"OPT1A",
            period9:"OPT1A", // New period
        },
        classC: {
            period1:"WHG",
            period2:"BPLA",
            period3:"BPLA",
            period4:"MDMU",
            period5:null,
            period6:"IUG",
            period7:"ASMA",
            period8:"OPT1A",
            period9:"OPT1A", // New period
        },
        classD: {
            period1:"SDJP",
            period2:"OPT3B",
            period3:"IAGA",
            period4:"IAGA",
            period5:null,
            period6:"NUWA",
            period7:"NUWA",
            period8:"BDSE",
            period9:"BDSE", // New period
        },
        classE: {
            period1:"NPAM",
            period2:"OPT3B",
            period3:"KSRI",
            period4:"SWM",
            period5:null,
            period6:"NPAM",
            period7:"SWM",
            period8:"GISA",
            period9:"GISA", // New period
        },
        classF: {
            period1:"SMYD",
            period2:"OPT3B",
            period3:"UJTC",
            period4:"UJTC",
            period5:null,
            period6:"SWM",
            period7:"HLDP",
            period8:"GHDC",
            period9:"GHDC", // New period
        },
    },
    Thursday: {
        classA: {
            period1:"SANP",
            period2:"HLDP",
            period3:"HLDP",
            period4:"MVHD",
            period5:null,
            period6:"OPT3A",
            period7:"OPT3A",
            period8:"GHDC",
            period9:"SDJP", // New period
        },
        classB: {
            period1:"DGSR",
            period2:"DGSR",
            period3:"STIN",
            period4:"HRNG",
            period5:null,
            period6:"OPT3A",
            period7:"OPT3A",
            period8:"MKRC",
            period9:"KHNL", // New period
        },
        classC: {
            period1:"MDMU",
            period2:"WHG",
            period3:"HRNG",
            period4:"MACH",
            period5:null,
            period6:"OPT3A",
            period7:"OPT3A",
            period8:"BPLA",
            period9:"WHG", // New period
        },
        classD: {
            period1:"SDJP",
            period2:"NUWA",
            period3:"BDSE",
            period4:"BDSE",
            period5:null,
            period6:"MVHD",
            period7:"MVHD",
            period8:"IAGA",
            period9:"IAGA", // New period
        },
        classE: {
            period1:"IUG",
            period2:"NAMP",
            period3:"GISA",
            period4:"GISA",
            period5:null,
            period6:"NPAM",
            period7:"IUG",
            period8:"WARW",
            period9:"SANP", // New period
        },
        classF: {
            period1:"HLDP",
            period2:"MACH",
            period3:"GHDC",
            period4:"GHDC",
            period5:null,
            period6:"UJTC",
            period7:"YASK",
            period8:"YASK",
            period9:"SMYD", // New period
        },
    },
    Friday: {
        classA: {
            period1:"SANP",
            period2:"SDJP",
            period3:"OPT2A",
            period4:"OPT2A",
            period5:null,
            period6:"HLDP",
            period7:"GHDC",
            period8:"GHDC",
            period9:"MACH", // New period
        },
        classB: {
            period1:"STIN",
            period2:"IUG",
            period3:"OPT2A",
            period4:"OPT2A",
            period5:null,
            period6:"DGSR",
            period7:"MKRC",
            period8:"MKRC",
            period9:"KSRI", // New period
        },
        classC: {
            period1:"WHG",
            period2:"ASMA",
            period3:"OPT2A",
            period4:"OPT2A",
            period5:null,
            period6:"HRNG",
            period7:"BPLA",
            period8:"BPLA",
            period9:"MDMU", // New period
        },
        classD: {
            period1:"SDJP",
            period2:"IAJA",
            period3:"OPT3B",
            period4:"OPT3B",
            period5:null,
            period6:"OPT2B",
            period7:"OPT2B",
            period8:"OPT1B",
            period9:"BDSE", // New period
        },
        classE: {
            period1:"IUG",
            period2:"SANP",
            period3:"OPT3B",
            period4:"OPT3B",
            period5:null,
            period6:"OPT2B",
            period7:"OPT2B",
            period8:"OPT1B",
            period9:"GISA", // New period
        },
        classF: {
            period1:"SMYD",
            period2:"HLDP",
            period3:"OPT3B",
            period4:"OPT3B",
            period5:null,
            period6:"OPT2B",
            period7:"OPT2B",
            period8:"OPT1B",
            period9:"GHDC", // New period
        },
    },
};
