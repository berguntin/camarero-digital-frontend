<template>

    <div class="filter-component">
        <div class="filter-buttons">
            <button class="allergens-filter-button" @click="show = !show">
                 {{ show ? 'Ocultar filtro X ' : '🌾 Filtro alergenos' }}
            </button>
            <button class="diet-filter-button"
            @click="toggleDietType('vegan')">
                🥦
            </button>
            <button class="diet-filter-button"
            @click="toggleDietType('vegetarian')">
                🥕
            </button>
        </div>
       
        <div class="allergens-card" v-show="show">
            <div class="allergen-item" 
            v-for="(item, index) in allergens" 
            :key="index"
            @click="toggleFilter(item)"
            >
                <span :class="{'active' : isSelected(item)}">{{ item }}</span>
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
                    "Gluten",
                    "Crustáceos",
                    "Huevos",
                    "Pescado",
                    "Cacahuetes",
                    "Soja",
                    "Leche",
                    "Nueces",
                    "Apio",
                    "Mostaza",
                    "Sésamo",
                    "Moluscos"
                ],
            show: false
        }
    },
    computed: {
        ...mapGetters([
            'getAllergensFilter'
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
            this.selected.filter(selectedItem => selectedItem ===item) 
            : this.selected.push(item)
        },
        isSelected(item) {
            return this.getAllergensFilter.includes(item)
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
        padding: 1em;
        margin-top: 0.5em;
        border: 1px solid #ccc;
        border-radius: 4px;
        background: white;
        position: absolute;
        width: 100%;
        top: 60%;
        left: 0%;
        z-index: 10;
    }

    .allergen-item {
        box-sizing: border-box;
        margin: 0.5em;
        text-align: start;
        width: 26%;
        font-size: smaller;
    }
    .active {
        color: rgb(192, 19, 19);
    }
    .allergens-filter-button, .diet-filter-button{
        border: none;
        background-color: #fff;
        box-shadow: 2px 1px 0px 0px #ccc;
        margin-bottom: 0.5em;
        color: #616161;
        margin-left: 3px;

    
    }
    .filter-buttons{ 
        width: 100%;
        align-self: center;
    }

</style>