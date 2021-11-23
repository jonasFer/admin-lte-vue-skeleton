<template>
  <div class="app-container">
    <el-table
      :data="userList.filter(data => !search || data.email.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%"
    >
      <el-table-column
        label="Email"
        prop="email"
      />
      <el-table-column
        label="Perfil"
      >
        Perfil
      </el-table-column>
      <el-table-column
        label="Status"
      >
        <el-tag type="success">Ativo</el-tag>
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="Digite para pesquisar"/>
        </template>
        <template slot-scope="scope">
          <el-tooltip class="item" effect="dark" content="Editar" placement="top">
            <el-button type="primary" icon="el-icon-edit" circle align="right"></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import LteButton from '../../../components/LteButton'

export default {
  name: 'usuario',
  components: {LteButton},
  data () {
    return {
      userList: [],
      search: ''
    }
  },
  computed: {
    ...mapGetters([
      'users'
    ])
  },
  methods: {
    ...mapActions([
      'getAllUsers'
    ]),
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  },
  created () {
    this.getAllUsers().then(() => { this.userList = this.users })
  }
}
</script>

<style scoped>

</style>
