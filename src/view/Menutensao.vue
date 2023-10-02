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
  methods: {
    handleFilter(campo) {
      axios({
        method: "GET",
        // url: `http://localhost:3000/livros/${id}`,
        url: `https://livros-api.onrender.com/livros/filtro/${campo}`,
      })
        .then((res) => {
          console.log(res.data);
          toast.success(`Filtrado`);
        })
        .catch((err) => {
          toast.error(`Error... Livro não foi deletado`);
          console.log(err);
        });
    },
    handleEdite(id, titulo) {
      const NewPreco = Number(
        prompt(`Informe o novo preço do livro ${titulo}`)
      );
      if (isNaN(NewPreco) || NewPreco === 0) {
        return;
      }
      try {
        axios({
          method: "PUT",
          // url: `http://localhost:3000/livros/${id}`,
          url: `https://livros-api.onrender.com/livros/${id}`,
          data: {
            preco: NewPreco,
          },
        })
          .then((res) => {
            toast.success(`Livro editado`);
          })
          .catch((err) => {
            toast.error(`Error... Livro não foi editado`);
            console.log(err);
          });
      } catch (err) {
        console.log(err);
      }
    },
    handleDelete(id) {
      axios({
        method: "DELETE",
        // url: `http://localhost:3000/livros/${id}`,
        url: `https://livros-api.onrender.com/livros/${id}`,
        data: {
          titulo: this.titulo,
          autor: this.autor,
          foto: this.url,
          ano: this.anoPublicado,
          preco: this.preco,
        },
      })
        .then((res) => {
          toast.success(`Livro deletado`);
        })
        .catch((err) => {
          toast.error(`Error... Livro não foi deletado`);
          console.log(err);
        });
    },
  },
};
</script>

<template>
  <div style="overflow-x: scroll;">
    <h1>Manutenção</h1>
    <table id="livrosTables">
      <tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Autor</th>
        <th>Ano</th>
        <th>Preco</th>
        <th>Foto</th>
        <th></th>
      </tr>
      <tr v-for="livro in livros" :key="livro.id">
        <td>{{livro.id}}</td>
        <td>{{livro.titulo}}</td>
        <td>{{livro.autor}}</td>
        <td>{{livro.ano}}</td>
        <td>{{livro.preco}}</td>
        <td><img :src="livro.foto" width="150" /></td>
        <td>
          <button v-on:click="handleEdite(livro.id,livro.titulo)">Editar</button>
          <button v-on:click="handleDelete(livro.id)">Deletar</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
#livrosTables {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  overflow: scroll;
}

#livrosTables td, #livrosTables th {
  border: 1px solid #ddd;
  padding: 8px;
}

#livrosTables tr:nth-child(even){background-color: #f2f2f2;}

#livrosTables tr:hover {background-color: #ddd;}

#livrosTables th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #266e1f;
  color: white;
}
</style>
