<template lang="html">
  <section class="src-components-formulario">
    <br>
    <hr>
    <h2>Convesor de temperatura</h2>
    <br />

    <vue-form :state="formState">
      <label for="temperatura">Ingrese temperatura °C</label>
      <input type="number" id="temperatura" class="form-control" name="temperatura" autocomplete="off"
        v-model.number="formData.temperatura" @input="calcular($event)" required />
    </vue-form>

    <p>Conv Temperatura °C:</p>
    <p :style="getEstilo()">{{ temperaturas.fahrenheit }}</p>
    <p>Conv Temperatura °K:</p>
    <p :style="getEstilo()">{{ temperaturas.kelvin }}</p>

    <br />
    <hr />

    <p>Respuestas: 1:c, 2:b, 3:c, 4:a, 5,c</p>

  </section>
</template>

<script lang="js">

export default {
  name: 'src-components-formulario',
  props: [],
  mounted() {

  },
  data() {
    return {
      formState: this.getInicialData(),
      formData: this.getInicialData(),
      temperaturas: {
        fahrenheit: '',
        kelvin: '',
        celsius: ''
      },
      minTemp: 0,
      maxTemp: 15
    }
  },
  methods: {
    getInicialData() {
      return {
        nombre: null,
        apellido: null,
        nota: null
      };
    },
    calcular(e) {
      var input = parseInt(e.target.value)
      if (!isNaN(input)) {
        this.temperaturas = {
          fahrenheit: ((input*1.8) + 32).toFixed(2),
          kelvin: input + 273.15,
          celsius: input
        }
      }
      else if(input == 0) {
        this.temperaturas = {
          fahrenheit: 32,
          kelvin: 273.15,
          celsius: input
        }
      }
      else if(isNaN(input)){
        this.temperaturas = {
          fahrenheit: '',
          kelvin: '',
          celsius: ''
        }
      }
    },
    getEstilo() {
      var color = 'black'
      if (this.temperaturas.celsius <= this.minTemp) {
        color = 'blue'
      }
      else if (this.temperaturas.celsius <= this.maxTemp) {
        color = 'magenta'
      }
      else {
        color = 'red'
      }
      return { color: color }
    }
  },
  computed: {

  }
}


</script>

<style scoped lang="css">
.src-components-formulario {}
</style>
