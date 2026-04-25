import { SUBJECT_IDS } from './subjects.js';
import { STATUSES_IDS } from './statuses.js';

const tasks = [
    {
        id: 'task-001',
        title: 'React Exercises',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 24),
        teacher: 'Daan Bakker',
        shortDescription: 'Complete the React exercises for this module during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Complete the React exercises for this module during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-002',
        title: 'Practice Node.js Routing',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 28),
        teacher: 'Daan Bakker',
        shortDescription: 'Practice Node.js routing in a simple server example during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Practice Node.js routing in a simple server example during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-003',
        title: 'Review Basic SQL Queries',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 25),
        teacher: 'Kevin Bosman',
        shortDescription: 'Review the basics of SQL queries with short examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Review the basics of SQL queries with short examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Kevin Bosman if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-004',
        title: 'Complete Git Branching Exercises',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 4, 1),
        teacher: 'Kevin Bosman',
        shortDescription: 'Complete the Git branching exercises step by step during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Complete the Git branching exercises step by step during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Kevin Bosman if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-005',
        title: 'Create Wireframes in Figma',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 26),
        teacher: 'Sophie Kramer',
        shortDescription: 'Create the wireframes in Figma for the main screens during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Create the wireframes in Figma for the main screens during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Sophie Kramer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-006',
        title: 'Test Prototype with Classmates',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 4, 2),
        teacher: 'Sophie Kramer',
        shortDescription: 'Test the prototype with classmates and record feedback during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Test the prototype with classmates and record feedback during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Sophie Kramer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-007',
        title: 'Prepare for Project Meeting',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 29),
        teacher: 'Ruben Jansen',
        shortDescription: 'Prepare for the project meeting with clear notes during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Prepare for the project meeting with clear notes during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Ruben Jansen if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-008',
        title: 'Finish Project Delivery Document',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 4, 5),
        teacher: 'Ruben Jansen',
        shortDescription: 'Finish the project delivery document for submission during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Finish the project delivery document for submission during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Ruben Jansen if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-009',
        title: 'Build Responsive Layout',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 27),
        teacher: 'Mila Vermeer',
        shortDescription: 'Build a responsive layout for a mobile first page during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Build a responsive layout for a mobile first page during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Mila Vermeer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-010',
        title: 'Build Accessible Forms',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 4, 3),
        teacher: 'Mila Vermeer',
        shortDescription: 'Build accessible forms for keyboard and screen reader use during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Build accessible forms for keyboard and screen reader use during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Mila Vermeer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-011',
        title: 'Update BPV Hours Log',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 30),
        teacher: 'Laura Meijer',
        shortDescription: 'Update the BPV hours log with accurate entries during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Update the BPV hours log with accurate entries during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Laura Meijer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-012',
        title: 'Prepare for Feedback Conversation',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 4, 6),
        teacher: 'Laura Meijer',
        shortDescription: 'Prepare for the feedback conversation with examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Prepare for the feedback conversation with examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Laura Meijer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-013',
        title: 'Debug React State Updates',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 27),
        teacher: 'Daan Bakker',
        shortDescription: 'Debug React state updates in a small component during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Debug React state updates in a small component during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-014',
        title: 'Refactor Express Middleware',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 27),
        teacher: 'Daan Bakker',
        shortDescription: 'Refactor the Express middleware example into smaller functions during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Refactor the Express middleware example into smaller functions during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-015',
        title: 'Write SQL Join Examples',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 27),
        teacher: 'Kevin Bosman',
        shortDescription: 'Write SQL join examples for the practice database during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Write SQL join examples for the practice database during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Kevin Bosman if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-016',
        title: 'Practice Git Merge Conflicts',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 27),
        teacher: 'Kevin Bosman',
        shortDescription: 'Practice solving Git merge conflicts in a sample repository during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Practice solving Git merge conflicts in a sample repository during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Kevin Bosman if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-017',
        title: 'Polish Figma Component Set',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 27),
        teacher: 'Sophie Kramer',
        shortDescription: 'Polish the Figma component set with consistent spacing and variants during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Polish the Figma component set with consistent spacing and variants during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Sophie Kramer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-018',
        title: 'Update User Flow Diagram',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 28),
        teacher: 'Sophie Kramer',
        shortDescription: 'Update the user flow diagram after prototype feedback during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Update the user flow diagram after prototype feedback during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Sophie Kramer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-019',
        title: 'Plan Sprint Review Notes',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 28),
        teacher: 'Ruben Jansen',
        shortDescription: 'Plan the sprint review notes with progress, blockers, and next steps during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Plan the sprint review notes with progress, blockers, and next steps during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Ruben Jansen if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-020',
        title: 'Check Project Backlog',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 28),
        teacher: 'Ruben Jansen',
        shortDescription: 'Check the project backlog and reorder urgent tasks during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Check the project backlog and reorder urgent tasks during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Ruben Jansen if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-021',
        title: 'Improve CSS Grid Layout',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 28),
        teacher: 'Mila Vermeer',
        shortDescription: 'Improve the CSS grid layout for desktop and tablet screens during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Improve the CSS grid layout for desktop and tablet screens during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Mila Vermeer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-022',
        title: 'Validate Form Error States',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 28),
        teacher: 'Mila Vermeer',
        shortDescription: 'Validate form error states for required fields and invalid input during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Validate form error states for required fields and invalid input during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Mila Vermeer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-023',
        title: 'Write BPV Reflection Draft',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 4, 1),
        teacher: 'Laura Meijer',
        shortDescription: 'Write the first BPV reflection draft with concrete examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Write the first BPV reflection draft with concrete examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Laura Meijer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-024',
        title: 'Review JavaScript Array Methods',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 4, 3),
        teacher: 'Daan Bakker',
        shortDescription: 'Review JavaScript array methods with map, filter, and reduce examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Review JavaScript array methods with map, filter, and reduce examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-025',
        title: 'Document Database Setup',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 4, 5),
        teacher: 'Kevin Bosman',
        shortDescription: 'Document the database setup steps for the assignment repository during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Document the database setup steps for the assignment repository during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Kevin Bosman if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-026',
        title: 'Create Design System Notes',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 4, 7),
        teacher: 'Sophie Kramer',
        shortDescription: 'Create design system notes for colors, typography, and reusable patterns during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Create design system notes for colors, typography, and reusable patterns during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Sophie Kramer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-027',
        title: 'Prepare Demo Checklist',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 4, 9),
        teacher: 'Ruben Jansen',
        shortDescription: 'Prepare the project demo checklist with required screens and talking points during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Prepare the project demo checklist with required screens and talking points during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Ruben Jansen if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-028',
        title: 'Test Responsive Navigation',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 4, 11),
        teacher: 'Mila Vermeer',
        shortDescription: 'Test responsive navigation on mobile and desktop breakpoints during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Test responsive navigation on mobile and desktop breakpoints during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Mila Vermeer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-029',
        title: 'Collect BPV Feedback Notes',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 4, 13),
        teacher: 'Laura Meijer',
        shortDescription: 'Collect BPV feedback notes and connect them to learning goals during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Collect BPV feedback notes and connect them to learning goals during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Laura Meijer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-030',
        title: 'Build API Error Handling',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 4, 15),
        teacher: 'Daan Bakker',
        shortDescription: 'Build API error handling for failed requests and empty responses during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Build API error handling for failed requests and empty responses during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-031',
        title: 'Organize Assignment Files',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 4, 16),
        teacher: 'Kevin Bosman',
        shortDescription: 'Organize assignment files and remove duplicate notes before submission during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Organize assignment files and remove duplicate notes before submission during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Kevin Bosman if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 'task-032',
        title: 'Finalize Portfolio Screenshot Set',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 4, 16),
        teacher: 'Sophie Kramer',
        shortDescription: 'Finalize the portfolio screenshot set with clear captions and consistent image sizes during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Finalize the portfolio screenshot set with clear captions and consistent image sizes during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Sophie Kramer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    }
];

export default tasks;
