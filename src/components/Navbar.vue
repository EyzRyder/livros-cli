
<template>
    <nav class="navbar">
      <router-link to="/" class="logo">Controle Pessoal de Livros</router-link>
      <ul class="itemList">
        <li class="item">
          <router-link to="/menutensao" class="link"> Manutencao </router-link>
        </li>
        <li class="item">
          <router-link to="/controle" class="link"> Controle </router-link>
        </li>
      </ul>
    </nav>
</template>

<style scoped>
.navbar {
  background-color: #266e1f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  color: white;
}
@media only screen and (max-width: 600px) {
  .navbar {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.navbar > .logo {
  color: white;
  text-decoration: none;
  font: 600;
  font-size: 24px;
}
.navbar > .itemList {
  display: flex;
  gap: 12px;
  color: white;
  list-style: none;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}
.navbar > .itemList>.item >a{
  color: #aaaaaaa8;
  text-decoration: none;
}
.navbar > .itemList>.item:hover >a{
  color: #7ae5e9f5;
}
</style>
