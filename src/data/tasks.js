import { SUBJECT_IDS } from './subjects.js';
import { STATUSES_IDS } from './statuses.js';

const tasks = [
    {
        id: 1,
        title: 'React Exercises',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 10),
        teacher: 'Daan Bakker',
        shortDescription: 'Complete the React exercises for this module during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Complete the React exercises for this module during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 2,
        title: 'Write Jest Unit Tests',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 14),
        teacher: 'Daan Bakker',
        shortDescription: 'Write the Jest unit tests for the assignment during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Write the Jest unit tests for the assignment during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 3,
        title: 'Practice CSS Grid Layouts',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 5),
        teacher: 'Mila Vermeer',
        shortDescription: 'Practice CSS Grid layouts in a small page exercise during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Practice CSS Grid layouts in a small page exercise during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Mila Vermeer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 4,
        title: 'Create Wireframes in Figma',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 10),
        teacher: 'Sophie Kramer',
        shortDescription: 'Create the wireframes in Figma for the main screens during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Create the wireframes in Figma for the main screens during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Sophie Kramer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 5,
        title: 'Prepare for Project Meeting',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 11),
        teacher: 'Ruben Jansen',
        shortDescription: 'Prepare for the project meeting with clear notes during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Prepare for the project meeting with clear notes during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Ruben Jansen if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 6,
        title: 'Draft BPV Reflection Report',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 15),
        teacher: 'Laura Meijer',
        shortDescription: 'Draft the BPV reflection report for this period during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Draft the BPV reflection report for this period during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Laura Meijer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 7,
        title: 'Practice JavaScript Array Methods',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 6),
        teacher: 'Daan Bakker',
        shortDescription: 'Practice JavaScript array methods with sample data during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Practice JavaScript array methods with sample data during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 8,
        title: 'Build Responsive Layout',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 11),
        teacher: 'Mila Vermeer',
        shortDescription: 'Build a responsive layout for a mobile first page during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Build a responsive layout for a mobile first page during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Mila Vermeer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 9,
        title: 'Gather Design Inspiration',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 14),
        teacher: 'Sophie Kramer',
        shortDescription: 'Gather design inspiration for the next concept direction during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Gather design inspiration for the next concept direction during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Sophie Kramer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 10,
        title: 'Read Backend API Documentation',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 11),
        teacher: 'Daan Bakker',
        shortDescription: 'Read the backend API documentation for the current project during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Read the backend API documentation for the current project during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 11,
        title: 'Practice Node.js Routing',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 12),
        teacher: 'Daan Bakker',
        shortDescription: 'Practice Node.js routing in a simple server example during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Practice Node.js routing in a simple server example during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 12,
        title: 'Review Basic SQL Queries',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 16),
        teacher: 'Kevin Bosman',
        shortDescription: 'Review the basics of SQL queries with short examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Review the basics of SQL queries with short examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Kevin Bosman if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 13,
        title: 'Choose Color Palette for App',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 7),
        teacher: 'Sophie Kramer',
        shortDescription: 'Choose a color palette for the app interface during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Choose a color palette for the app interface during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Sophie Kramer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 14,
        title: 'Prepare Sprint Planning',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 12),
        teacher: 'Ruben Jansen',
        shortDescription: 'Prepare the sprint planning session with realistic tasks during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Prepare the sprint planning session with realistic tasks during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Ruben Jansen if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 15,
        title: 'Recreate Flexbox Layout',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 15),
        teacher: 'Mila Vermeer',
        shortDescription: 'Recreate a page layout with Flexbox for practice during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Recreate a page layout with Flexbox for practice during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Mila Vermeer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 16,
        title: 'Update BPV Hours Log',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 16),
        teacher: 'Laura Meijer',
        shortDescription: 'Update the BPV hours log with accurate entries during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Update the BPV hours log with accurate entries during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Laura Meijer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 17,
        title: 'Practice ES6 Modules',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 8),
        teacher: 'Daan Bakker',
        shortDescription: 'Practice ES6 modules in a small JavaScript setup during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Practice ES6 modules in a small JavaScript setup during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 18,
        title: 'Complete Git Branching Exercises',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 17),
        teacher: 'Kevin Bosman',
        shortDescription: 'Complete the Git branching exercises step by step during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Complete the Git branching exercises step by step during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Kevin Bosman if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 19,
        title: 'Assemble Moodboard',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 13),
        teacher: 'Sophie Kramer',
        shortDescription: 'Assemble the moodboard for the visual direction during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Assemble the moodboard for the visual direction during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Sophie Kramer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 20,
        title: 'Divide Project Group Tasks',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 17),
        teacher: 'Ruben Jansen',
        shortDescription: 'Divide tasks within the project group in a fair way during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Divide tasks within the project group in a fair way during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Ruben Jansen if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 21,
        title: 'Build Form Validation',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 14),
        teacher: 'Mila Vermeer',
        shortDescription: 'Build form validation for a realistic input flow during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Build form validation for a realistic input flow during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Mila Vermeer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 22,
        title: 'Prepare for Feedback Conversation',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 13),
        teacher: 'Laura Meijer',
        shortDescription: 'Prepare for the feedback conversation with examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Prepare for the feedback conversation with examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Laura Meijer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 23,
        title: 'Complete Async and Await Exercises',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 18),
        teacher: 'Daan Bakker',
        shortDescription: 'Complete the async and await exercises in JavaScript during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Complete the async and await exercises in JavaScript during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 24,
        title: 'Practice File Management in Windows',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 9),
        teacher: 'Kevin Bosman',
        shortDescription: 'Practice file management in Windows with common actions during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Practice file management in Windows with common actions during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Kevin Bosman if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 25,
        title: 'Sketch Logo Variations',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 18),
        teacher: 'Sophie Kramer',
        shortDescription: 'Sketch logo variations for the project identity during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Sketch logo variations for the project identity during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Sophie Kramer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 26,
        title: 'Create Project Demo Slides',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 19),
        teacher: 'Ruben Jansen',
        shortDescription: 'Create the project demo slides for the next review during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Create the project demo slides for the next review during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Ruben Jansen if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 27,
        title: 'Experiment with CSS Animations',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 10),
        teacher: 'Mila Vermeer',
        shortDescription: 'Experiment with CSS animations on interface elements during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Experiment with CSS animations on interface elements during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Mila Vermeer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 28,
        title: 'Complete Workplace Evaluation',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 9),
        teacher: 'Laura Meijer',
        shortDescription: 'Complete the workplace evaluation with honest notes during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Complete the workplace evaluation with honest notes during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Laura Meijer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 29,
        title: 'Review Objects and Arrays',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 19),
        teacher: 'Daan Bakker',
        shortDescription: 'Review objects and arrays through practical examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Review objects and arrays through practical examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 30,
        title: 'Learn Key Networking Concepts',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 20),
        teacher: 'Kevin Bosman',
        shortDescription: 'Learn key networking concepts for class and project work during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Learn key networking concepts for class and project work during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Kevin Bosman if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 31,
        title: 'Develop Component Sketches',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 20),
        teacher: 'Sophie Kramer',
        shortDescription: 'Develop the component sketches into clearer concepts during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Develop the component sketches into clearer concepts during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Sophie Kramer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 32,
        title: 'Write Retrospective Points',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 21),
        teacher: 'Ruben Jansen',
        shortDescription: 'Write down retrospective points from the last sprint during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Write down retrospective points from the last sprint during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Ruben Jansen if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 33,
        title: 'Practice React Props and State',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 21),
        teacher: 'Mila Vermeer',
        shortDescription: 'Practice React props and state in a small feature during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Practice React props and state in a small feature during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Mila Vermeer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 34,
        title: 'Evaluate BPV Learning Goals',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 22),
        teacher: 'Laura Meijer',
        shortDescription: 'Evaluate the BPV learning goals with concrete progress during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Evaluate the BPV learning goals with concrete progress during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Laura Meijer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 35,
        title: 'Build API Fetch Request',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 22),
        teacher: 'Daan Bakker',
        shortDescription: 'Build an API fetch request for a simple data view during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Build an API fetch request for a simple data view during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 36,
        title: 'Learn System Administration Concepts',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 23),
        teacher: 'Kevin Bosman',
        shortDescription: 'Learn core system administration concepts for IT basics during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Learn core system administration concepts for IT basics during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Kevin Bosman if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 37,
        title: 'Research Typography Choices',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 23),
        teacher: 'Sophie Kramer',
        shortDescription: 'Research typography choices for the dashboard design during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Research typography choices for the dashboard design during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Sophie Kramer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 38,
        title: 'Clean Up Project Backlog',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 24),
        teacher: 'Ruben Jansen',
        shortDescription: 'Clean up the project backlog before the next sprint during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Clean up the project backlog before the next sprint during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Ruben Jansen if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 39,
        title: 'Apply Media Queries',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 24),
        teacher: 'Mila Vermeer',
        shortDescription: 'Apply media queries across the main page layouts during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Apply media queries across the main page layouts during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Mila Vermeer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 40,
        title: 'Expand Internship Report',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 25),
        teacher: 'Laura Meijer',
        shortDescription: 'Expand the internship report with missing details during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Expand the internship report with missing details during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Laura Meijer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 41,
        title: 'Practice Debugging with Console',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 26),
        teacher: 'Daan Bakker',
        shortDescription: 'Practice debugging with the console in browser tools during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Practice debugging with the console in browser tools during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 42,
        title: 'Practice Excel Formulas',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 22),
        teacher: 'Kevin Bosman',
        shortDescription: 'Practice Excel formulas with common study examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Practice Excel formulas with common study examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Kevin Bosman if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 43,
        title: 'Choose Dashboard Icons',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 3, 27),
        teacher: 'Sophie Kramer',
        shortDescription: 'Choose dashboard icons that match the interface style during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Choose dashboard icons that match the interface style during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Sophie Kramer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 44,
        title: 'Prepare Final Presentation',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 3, 28),
        teacher: 'Ruben Jansen',
        shortDescription: 'Prepare the final presentation for the project demo during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Prepare the final presentation for the project demo during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Ruben Jansen if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 45,
        title: 'Build Accessible Forms',
        subject: SUBJECT_IDS.FRONTEND_DEVELOPMENT,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 29),
        teacher: 'Mila Vermeer',
        shortDescription: 'Build accessible forms for keyboard and screen reader use during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Build accessible forms for keyboard and screen reader use during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Mila Vermeer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 46,
        title: 'Write Final BPV Reflection',
        subject: SUBJECT_IDS.BPV,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 3, 30),
        teacher: 'Laura Meijer',
        shortDescription: 'Write the final BPV reflection with clear examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Write the final BPV reflection with clear examples during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Laura Meijer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 47,
        title: 'Review Functions and Scope',
        subject: SUBJECT_IDS.PROGRAMEREN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 4, 4),
        teacher: 'Daan Bakker',
        shortDescription: 'Review functions and scope with short coding tasks during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Review functions and scope with short coding tasks during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Daan Bakker if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 48,
        title: 'Read Cybersecurity Basics',
        subject: SUBJECT_IDS.IT_SKILLS,
        status: STATUSES_IDS.TO_DO,
        dueDate: new Date(2026, 4, 6),
        teacher: 'Kevin Bosman',
        shortDescription: 'Read the basics of cybersecurity for class preparation during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Read the basics of cybersecurity for class preparation during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Kevin Bosman if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 49,
        title: 'Test Prototype with Classmates',
        subject: SUBJECT_IDS.ONTWERPEN,
        status: STATUSES_IDS.IN_PROGRESS,
        dueDate: new Date(2026, 4, 8),
        teacher: 'Sophie Kramer',
        shortDescription: 'Test the prototype with classmates and record feedback during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Test the prototype with classmates and record feedback during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Sophie Kramer if needed, then check the task goal, polish weak parts, and note what to practice next.'
    },
    {
        id: 50,
        title: 'Finish Project Delivery Document',
        subject: SUBJECT_IDS.PROJECT,
        status: STATUSES_IDS.COMPLETED,
        dueDate: new Date(2026, 4, 12),
        teacher: 'Ruben Jansen',
        shortDescription: 'Finish the project delivery document for submission during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class.',
        longDescription: 'Finish the project delivery document for submission during a focused session, with careful notes and a review at the end so you understand the method, spot mistakes early, and know what to improve before the next class. Begin by reviewing your notes, examples, and required files, then divide the assignment into clear steps so you can manage your time, protect the quality of the result, and keep steady progress instead of rushing at the end. While you work, write down questions and small decisions so you can discuss them with Ruben Jansen if needed, then check the task goal, polish weak parts, and note what to practice next.'
    }
];

export default tasks;
