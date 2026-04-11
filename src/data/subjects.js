export const SUBJECT_IDS = {
    PROGRAMEREN: 'programeren',
    IT_SKILLS: 'it-skills',
    ONTWERPEN: 'ontwerpen',
    PROJECT: 'project',
    FRONTEND_DEVELOPMENT: 'frontend-development',
    BPV: 'bpv'
}

export const subjects = [
    { id: SUBJECT_IDS.PROGRAMEREN, label: 'Programeren', color: '#60A5FA' },
    { id: SUBJECT_IDS.IT_SKILLS, label: 'IT skills', color: '#34D399' },
    { id: SUBJECT_IDS.ONTWERPEN, label: 'Ontwerpen', color: '#F472B6' },
    { id: SUBJECT_IDS.PROJECT, label: 'Project', color: '#FBBF24' },
    { id: SUBJECT_IDS.FRONTEND_DEVELOPMENT, label: 'Frontend development', color: '#A78BFA' },
    { id: SUBJECT_IDS.BPV, label: 'BPV', color: '#22D3EE' }
];

export const mapSubjects = Object.fromEntries(
    subjects.map(subject => [subject.id, subject])
)