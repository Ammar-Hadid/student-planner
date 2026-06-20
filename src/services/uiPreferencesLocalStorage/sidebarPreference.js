export const loadSidebarPreference = () => {
    try {
        const sidebarState = localStorage.getItem('sidebarState');

        if (!sidebarState) return false;

        const parsedSidebarState = JSON.parse(sidebarState);

        if (typeof parsedSidebarState !== 'boolean') return false;

        return parsedSidebarState;
    }

    catch (error) {
        console.error(`Something went wrong with loading sidebar preference: ${error}`);
        return false
    }
}

export const saveSidebarPreference = (sideBarPreference) => {
    try {
        localStorage.setItem('sidebarState', JSON.stringify(sideBarPreference))
    }

    catch (error) {
        console.error(`Something went wrong with saving sidebar preference: ${error}`)
    }
}