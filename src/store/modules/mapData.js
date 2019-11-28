const state = {
    coordinates: [
        {point: [-80.3761, 25.754], id: 1, color: '#aaaaaa', size: 'small'},
        {point: [-80.3763, 25.755], id: 2, color: '#11abcd', size: 'large'},
        {point: [-80.3765, 25.756], id: 3, color: '#cc9090', size: 'large'},
        {point: [-80.3765, 25.757], id: 4, color: '#234afd', size: 'large'},
        {point: [-80.3763, 25.758], id: 5, color: '#ee02d3', size: 'large'},
        {point: [-80.3761, 25.759], id: 6, color: '#f9f9f9', size: 'large'},
        {point: [-80.3759, 25.760], id: 6, color: '#f9f9f9', size: 'large'},
        {point: [-80.3757, 25.761], id: 6, color: '#f9f9f9', size: 'large'}
    ],
    myDataList: [
        {location: 'PG6', coordinates: [-80.374625, 25.760122], count: 1, color: '#CC0000'},
        {location: 'Architect Building', coordinates: [-80.375456, 25.758898], count: 2, color: '#CC0000'},
        {location: 'ECS', coordinates: [-80.373875, 25.759039], count: 3, color: '#CC0000'},
        {location: 'Chem & Phy Building', coordinates: [-80.372234, 25.758340], count: 4, color: '#CC0000'},
        {location: 'AHC1', coordinates: [-80.371388, 25.757660], count: 5, color: '#CC0000'},
        {location: 'AHC2', coordinates: [-80.371270, 25.758082], count: 6, color: '#CC0000'},
        {location: 'Owa Ehan', coordinates: [-80.372975, 25.758014], count: 7, color: '#CC0000'},
        {location: 'Ryder Business', coordinates: [-80.376131, 25.757444], count: 8, color: '#CC0000'},
        {location: 'S&D Green Library', coordinates: [-80.373867, 25.757200], count: 9, color: '#CC0000'},
        {location: 'GC', coordinates: [-80.372883, 25.756720], count: 10, color: '#CC0000'},
        {location: 'School Pub Aff', coordinates: [-80.376095, 25.756512], count: 100, color: '#CC0000'}
    ],
    mapBounds:[[-80.368179, 25.761100], [-80.383778, 25.752543]]
};

const getters = {
    getMyDataList: state => state.myDataList,
    getCoordinates: state => state.coordinates
    
};

const actions = {
    printData: () => {
        // console.log(coordinates);
        console.log(JSON.parse(JSON.stringify(state.coordinates[1].point)));
    }
};

const mutations = {
    printDataMut: () => {
        console.log('data from mutation');
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}