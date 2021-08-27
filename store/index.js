export const state = () => ({
    myRentals: [{
        id: 1,
        title: "Denali",
        continent: "North America",
        description: "Denali is the highest mountain peak in North America, with a summit elevation of 20,310 feet above sea level. With a topographic prominence of 20,156 feet and a topographic isolation of 4,629 miles, Denali is the third most prominent and third most isolated peak on Earth, after Mount Everest and Aconcagua.",
        image: "fe7.jpg"
    }],
    products: [{
            id: 1,
            title: "Aconcagua",
            continent: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
            description: "Aconcagua is a mountain in the Principal Cordillera of the Andes mountain range, in Mendoza Province, Argentina. It is the highest mountain in the Americas and the highest outside of Asia, being the highest in both the Southern and Western Hemispheres with a summit elevation of 6,960.8 metres.",
            image: "fe1.jpg",
            height: "6,190 m"
        },
        {
            id: 2,
            title: "Denali",
            continent: "North America",
            description: "Denali is the highest mountain peak in North America, with a summit elevation of 20,310 feet above sea level. With a topographic prominence of 20,156 feet and a topographic isolation of 4,629 miles, Denali is the third most prominent and third most isolated peak on Earth, after Mount Everest and Aconcagua.",
            image: "fe2.jpg",
            height: "4,892 m"
        },

        {
            id: 3,
            title: "Mount Everest",
            continent: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
            description: "Mount Everest is Earth's highest mountain above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs across its summit point",
            image: "fe3.jpg",
            height: "5,895 m"
        },
        {
            id: 4,
            title: "Mont Blanc",
            continent: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
            description: "Mont Blanc is the highest mountain in the Alps and the highest in Europe west of the Caucasus peaks of Russia and Georgia. It rises 4,808 m above sea level and is ranked 11th in the world in topographic prominence.",
            image: "fe4.jpg",
            height: "2,228 m"
        },
        {
            id: 5,
            title: "Mount Kosciuszko",
            continent: "Special access, beach, its perks, and a remote top-tier service beauty of at restaurants beyond the throughout the weekends go city.",
            description: "Mount Kosciuszko is mainland Australia's highest mountain, at 2,228 metres above sea level. It is located on the Main Range of the Snowy Mountains in Kosciuszko National Park, part of the Australian Alps National Parks and Reserves in New South Wales.",
            image: "fe5.jpg",
            height: "4,810 m"
        },
        {
            id: 6,
            title: "Mount Kilimanjaro",
            continent: "Africa",
            description: "Mount Kilimanjaro is a dormant volcano in Tanzania. It has three volcanic cones: Kibo, Mawenzi and Shira. It is the highest mountain in Africa and the highest single free-standing mountain in the world: 5,895 metres above sea level and about 4,900 metres above its plateau base.",
            image: "fe6.jpg",
            height: "8,848 m"
        },
        {
            id: 7,
            title: "Vinson Massif",
            continent: "Antarctic",
            description: "Vinson Massif is a large mountain massif in Antarctica that is 21 km long and 13 km wide and lies within the Sentinel Range of the Ellsworth Mountains. It overlooks the Ronne Ice Shelf near the base of the Antarctic Peninsula. The massif is located about 1,200 kilometres from the South Pole.",
            image: "fe7.jpeg",
            height: "6,962 m"
        },
    ]
})

export const getters = {
    getProductById: (state) => (id) => {
        return state.products.find(product => product.id == id)
    }
}
export const mutations = {
    addItem(state, id) {
        let item = state.products.find(product => product.id == id)
        state.myRentals.push(item)
    }
}