<template lang="html">
  <section class="src-components-formulario">
    <br>
    <hr>
    <h2>Ingreso de temperatura</h2>
    <br />

    <vue-form :state="formState" @submit.prevent="guardar()">

      <validate tag="div">
        <label for="temperatura">Temperatura</label>
        <input type="number" id="temperatura" class="form-control" name="temperatura" autocomplete="off"
          v-model.number="formData.temperatura" @input="calcular($event)" required :min="tempMin" :max="tempMax" />
        <field-messages name="temperatura" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">
            Campo requerido
          </div>
          <div slot="min" class="alert alert-danger mt-1">
            La temperatura no puede ser inferior a {{ tempMin }}
          </div>
          <div slot="max" class="alert alert-danger mt-1">
            La temperatura no puede ser superior a {{ tempMax }}
          </div>
        </field-messages>
      </validate>

      <validate tag="div">
        <label for="temperaturaF">TemperaturaF</label>
        <input type="number" id="temperaturaF" class="form-control" name="temperaturaF" v-model="temperaturas.fahrenheit" :readonly="true" :style="getEstilo()" />
        <!-- <field-messages name="temperaturaF" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">
            Campo requerido
          </div>
          <div slot="min" class="alert alert-danger mt-1">
            La temperatura no puede ser inferior a {{ tempMin }}
          </div>
          <div slot="max" class="alert alert-danger mt-1">
            La temperatura no puede ser superior a {{ tempMax }}
          </div>
        </field-messages> -->
      </validate>

      <validate tag="div">
        <label for="temperaturaK">TemperaturaK</label>
        <input type="number" id="temperaturaK" class="form-control" name="temperaturaK" v-model="temperaturas.kelvin" :readonly="true" :style="getEstilo()" />
        <!-- <field-messages name="temperaturaK" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">
            Campo requerido
          </div>
          <div slot="min" class="alert alert-danger mt-1">
            La temperatura no puede ser inferior a {{ tempMin }}
          </div>
          <div slot="max" class="alert alert-danger mt-1">
            La temperatura no puede ser superior a {{ tempMax }}
          </div>
        </field-messages> -->
      </validate>

      <br />

      <button class="btn btn-success my-3" :disabled="formState.$invalid">
        Guardar
      </button>
    </vue-form>

    <hr />

    <!-- <div class="jumbotron">
      <div v-if="alumnos.length != 0">
        <table class="table table-dark">
          <tr>
            <th>Nombre y apellido</th>
            <th>Nota</th>
          </tr>
          <tr v-for="(alumno, index) in alumnos" :key="index">
            <td>{{ alumno.nombre }} {{ alumno.apellido }}</td>
            <td :style="getEstilo(alumno.nota)">{{ alumno.nota }}</td>
          </tr>
          <tr v-if="alumnos.length != 0" :style="getEstilo(notaPromedio)">
            <td>Promedio general</td>
            <td>{{ notaPromedio }}</td>
          </tr>
        </table>
      </div>
      <div v-else class="alert alert-warning">
        No se encontraron alumnos
      </div>


    </div> -->

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
      tempMin: -100,
      tempMax: 1000,
      formState: this.getInicialData(),
      formData: this.getInicialData(),
      temperaturas: {
        fahrenheit: '',
        kelvin: '',
        celsius: ''
      },
      cong: 0,
      herv: 100
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
    /* guardar() {
      this.alumnos.push(this.formData)
      this.notas.push(this.formData.nota)
      this.calcularPromedio(this.notas)
      this.formData = this.getInicialData()
      this.formState._reset()
    }, */
    calcular(e) {
      console.log(e.target.value)
      this.temperaturas = {
        fahrenheit: parseInt(e.target.value) + 32,
        kelvin: parseInt(e.target.value) + 273.15,
        celsius: parseInt(e.target.value)
      }
    },
    getEstilo() {
      var color = 'black'
      if(this.temperaturas.celsius <= this.cong) {
        color = 'blue'
      }
      else if(this.temperaturas.celsius >= this.herv) {
        color = 'red'
      }
      return {color: color}
    }
  },
  computed: {

  }
}


</script>

<style scoped lang="css">
.src-components-formulario {}
</style>
