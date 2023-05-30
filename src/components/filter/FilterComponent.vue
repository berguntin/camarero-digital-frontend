<template>

    <div class="filter-component" v-click-outside="hide" >
        <div class="filter-buttons">
            <button class="allergens-filter-button" @click="show = !show">
                 {{ show ? 'Ocultar filtro X ' : '🌾 Filtro alérgenos' }}
            </button>
            <button :class="['diet-filter-button', { 'active-vegan' : getIsVegan}]"
            @click="toggleDietType('vegan')">
            🥦 Vegano
            </button>
            <button :class="['diet-filter-button', { 'active-vegetarian' : getIsVegetarian}]"
            @click="toggleDietType('vegetarian')">
            🥕 Vegetariano
            </button>
        </div>
        <div class="allergens-card" v-show="show">
            
            <div  class="allergen-item"
            v-for="(item, index) in allergens" 
            :key="index"
            @click="toggleFilter(item.name)"
            >
                <span class="allergen-item-text" :class="{'active' : isSelected(item.name)}">
                    {{ item.icon }} {{ item.name }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name:"AppFilter",
    data() {
        return {
            allergens: [
                    {
                     icon: '🥖',
                     name: 'Gluten' 
                    },
                    {
                     icon: '🦀',
                     name: 'Crustáceos' 
                    },
                    {
                     icon: '🥚',
                     name: 'Huevo' 
                    },
                    {
                     icon: '🥜',
                     name: 'Cacahuetes' 
                    },
                    {
                     icon: '🫘',
                     name: 'Soja' 
                    },
                    {
                     icon: '🐟',
                     name: 'Pescado' 
                    },
                    {
                     icon: '🥛',
                     name: 'Lactosa' 
                    },
                    {
                     icon: '🌰',
                     name: 'Nueces' 
                    },
                    {
                     icon: '🥬',
                     name: 'Apio' 
                    },
                    {
                     icon: '🍯',
                     name: 'Mostaza' 
                    },
                    {
                     icon: '🫘',
                     name: 'Sésamo' 
                    },
                    {
                     icon: '🦪',
                     name: 'Moluscos' 
                    }
                ],
            show: false,
            selected: []
        }
    },
    computed: {
        ...mapGetters([
            'getAllergensFilter',
            'getIsVegetarian',
            'getIsVegan'
        ])
    },
    methods: {
        ...mapActions([
            'toggleAllergensFilter',
            'resetAllergensFilter',
            'toggleDietType'
        ]),
        toggleFilter(item){
            this.toggleAllergensFilter(item)
            this.selected.includes(item) ? 
            this.selected.filter(selectedItem => selectedItem === item) 
            : this.selected.push(item)
        },
        isSelected(item) {
            return this.getAllergensFilter.includes(item)
        },
        hide(){
            this.show = false
        }
       
    },

}

</script>
<style lang="scss" scoped>

    .filter-component{
        position: relative;
        width: 100%;
    }
    .allergens-card {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        max-height: 30vh;
        overflow-y: auto;
        padding-left: 1em;
        padding-bottom: .5em;
        margin-top: 0.5em;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: white;
        position: absolute;
        top: 60%;
        left: 0%;
        z-index: 10;
    }

    .allergen-item {
        box-sizing: border-box;
        margin-top: 0.5em;
        text-align: start;
        width: 50%;
        font-size: 0.9em;
        cursor: pointer;
        padding-left: 0.5em;
    }
    .active {
        color: rgb(192, 19, 19);
        text-decoration: line-through;
    }
   
    .allergens-filter-button, .diet-filter-button{
        border: none;
        border-radius: 2px;
        background-color: #fff;
        box-shadow: 1px 1px 1px 1px #ccc;
        margin-bottom: 0.5em;
        color: #616161;
        margin-left: 3px;

    
    }
    .active-vegetarian{
        background-color: teal;
        color: #e7fff9;
    }
    .active-vegan{
       background-color:#0c4624;
       color: #e7fff9;
    }
    
    .filter-buttons{ 
        width: 100%;
        align-self: center;
    }
    .blur-receptor-container{
        width: 100vw;
        height: 200vh;
        background-color: #524b4b23;
        z-index: 11;
        position: absolute;
        top: -1000%;
        right: 0;
    }
  

</style>