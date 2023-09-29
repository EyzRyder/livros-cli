<script>
import FormLivros from "../components/FormLivros.vue";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: "Menu",
  components: { FormLivros },
  data() {
    return {
      livros: [
        {
          id: 0,
          titulo: "",
          autor: "",
          ano: 0,
          preco: 0,
          foto: "",
        },
      ],
    };
  },
  mounted() {
    axios({
      method: "GET",
      // url: "http://localhost:3000/livros",
      url: "https://livros-api.onrender.com/livros",
    })
      .then((res) => {
        toast.success(`${res.data.length} Livro Carregados`);
        // console.log(res.data);
        this.livros = res.data;
        // console.log(this.livros);
      })
      .catch((err) => {
        toast.error(`Error... ${err.message}`);
        console.log(err);
      });
  },
};
</script>

<template>
  <h1>Menutensao</h1>
  <div class="wrapper">
    <div v-for="livro in livros" :key="livro.id" class="livroCard divide">
      <div class="img">
        <img :src="livro.foto" width="150" />
      </div>
      <div class="details">
        <span class="title">
          {{ livro.titulo }}
        </span>
        <span> Autor: {{ livro.autor }} </span>
        <div class="divide">
          <span> Ano de Publicacao: {{ livro.ano }} </span>
          <span> R$ {{ livro.preco }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.wrapper{
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px 36px;
}
.livroCard {
  background: #cbecd98a;
  padding: 16px 12px;
  border-radius: 16px;
}

.details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.divide {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  place-content: center;
}

.title {
  font-weight: 700;
  font-size: 20px;
}

.img {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
