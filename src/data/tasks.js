import { SUBJECT_IDS } from './subjects.js';
import { STATUSES_IDS } from './statuses.js';

const tasks = [
    {
        id: 1,
        title: 'React Opdrachten',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 10)
    },
    {
        id: 2,
        title: 'Jest Unit Tests schrijven',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 14)
    },
    {
        id: 3,
        title: 'CSS Grid oefenen',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 5)
    },
    {
        id: 4,
        title: 'Wireframes maken in Figma',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 10)
    },
    {
        id: 5,
        title: 'Project meeting voorbereiden',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 11)
    },
    {
        id: 6,
        title: 'BPV reflectieverslag',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 15)
    },
    {
        id: 7,
        title: 'JavaScript array methods oefenen',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 6)
    },
    {
        id: 8,
        title: 'Responsive layout maken',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 11)
    },
    {
        id: 9,
        title: 'Design inspiratie verzamelen',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 14)
    },
    {
        id: 10,
        title: 'Backend API documentatie lezen',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 11)
    },
    {
        id: 11,
        title: 'Node.js routing oefenen',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 12)
    },
    {
        id: 12,
        title: 'SQL basisopdrachten herhalen',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 16)
    },
    {
        id: 13,
        title: 'Kleurenpalet voor app kiezen',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 7)
    },
    {
        id: 14,
        title: 'Sprint planning voorbereiden',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 12)
    },
    {
        id: 15,
        title: 'Flexbox layout namaken',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 15)
    },
    {
        id: 16,
        title: 'BPV urenregistratie bijwerken',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 16)
    },
    {
        id: 17,
        title: 'ES6 modules oefenen',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 8)
    },
    {
        id: 18,
        title: 'Git branching opdrachten maken',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 17)
    },
    {
        id: 19,
        title: 'Moodboard samenstellen',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 13)
    },
    {
        id: 20,
        title: 'Taken verdelen binnen projectgroep',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 17)
    },
    {
        id: 21,
        title: 'Form validatie bouwen',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 14)
    },
    {
        id: 22,
        title: 'Feedbackgesprek voorbereiden',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 13)
    },
    {
        id: 23,
        title: 'Async await opdrachten maken',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 18)
    },
    {
        id: 24,
        title: 'Bestandsbeheer in Windows oefenen',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 9)
    },
    {
        id: 25,
        title: 'Logo variaties schetsen',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 18)
    },
    {
        id: 26,
        title: 'Projectdemo slides maken',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 19)
    },
    {
        id: 27,
        title: 'CSS animaties uitproberen',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 10)
    },
    {
        id: 28,
        title: 'Werkplek evaluatie invullen',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 9)
    },
    {
        id: 29,
        title: 'Objecten en arrays herhalen',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 19)
    },
    {
        id: 30,
        title: 'Netwerkbegrippen leren',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 20)
    },
    {
        id: 31,
        title: 'Component schetsen uitwerken',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 20)
    },
    {
        id: 32,
        title: 'Retrospective punten opschrijven',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 21)
    },
    {
        id: 33,
        title: 'React props en state oefenen',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 21)
    },
    {
        id: 34,
        title: 'BPV leerdoelen evalueren',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 22)
    },
    {
        id: 35,
        title: 'API fetch request bouwen',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 22)
    },
    {
        id: 36,
        title: 'Systeembeheer begrippen leren',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 23)
    },
    {
        id: 37,
        title: 'Typografie onderzoek doen',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 23)
    },
    {
        id: 38,
        title: 'Project backlog opschonen',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 24)
    },
    {
        id: 39,
        title: 'Media queries toepassen',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 24)
    },
    {
        id: 40,
        title: 'Stageverslag aanvullen',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 25)
    },
    {
        id: 41,
        title: 'Debuggen met console oefenen',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 26)
    },
    {
        id: 42,
        title: 'Excel formules oefenen',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 22)
    },
    {
        id: 43,
        title: 'Dashboard iconen kiezen',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 27)
    },
    {
        id: 44,
        title: 'Eindpresentatie voorbereiden',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 28)
    },
    {
        id: 45,
        title: 'Toegankelijke formulieren maken',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 29)
    },
    {
        id: 46,
        title: 'BPV eindreflectie schrijven',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 30)
    },
    {
        id: 47,
        title: 'Functions en scope herhalen',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 4, 4)
    },
    {
        id: 48,
        title: 'Cybersecurity basis lezen',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 4, 6)
    },
    {
        id: 49,
        title: 'Prototype testen met klasgenoten',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 4, 8)
    },
    {
        id: 50,
        title: 'Project opleverdocument afronden',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 4, 12)
    }
];

export default tasks;
