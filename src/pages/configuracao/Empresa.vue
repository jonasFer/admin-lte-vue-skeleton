<template>
  <row>
    <column classe="col-md-12">
      <box
        title="Dados da empresa"
        theme="box-primary"
        :isBorder="true"
        widgetType="">
        <div slot="content">
          <el-form ref="formCompany" :model="companyForm" label-position="top">
            <div class="row">
              <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
                <el-form-item prop="name" label="Nome">
                  <el-input
                    v-model="companyForm.name"
                    type="text"
                  />
                </el-form-item>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <el-form-item prop="initials" label="Sigla">
                  <el-input
                    v-model="companyForm.initials"
                    type="text"
                  />
                </el-form-item>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2">
                <el-form-item label="Tipo">
                  <el-select v-model="companyForm.type" placeholder="Selecione o tipo">
                    <el-option
                      v-for="item in optType"
                      :key="item.id"
                      :label="item.value"
                      :value="item.id"
                    />
                  </el-select>
                </el-form-item>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-2 col-lg-2">
                <el-form-item prop="document" label="CPF">
                  <el-input
                    v-model="companyForm.document"
                    type="text"
                  />
                </el-form-item>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-7 col-lg-8">
                <el-form-item prop="responsible" label="Responsável">
                  <el-input
                    v-model="companyForm.responsible"
                    type="text"
                  />
                </el-form-item>
              </div>
            </div>
            <div class="row">
              <br>
              <div class="col-xs-10"></div>
              <div class="col-xs-2">
                <lte-button :isFlat="true" theme="primary" align="right" name="Salvar" @click.prevent.native="submitForm()"></lte-button>
              </div>
            </div>
          </el-form>
        </div>
      </box>
    </column>
  </row>
</template>

<script>
import Box from '../../widgets/Box'
import LteInputGroup from '../../components/form/LteInputGroup'
import LteButton from '../../components/LteButton'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'config-empresa',
  components: {
    'box': Box,
    'lte-input-group': LteInputGroup,
    'lte-button': LteButton
  },
  data () {
    return {
      isLoading: false,
      companyForm: {},
      optType: [
        { 'id': 'FISIC', 'value': 'Pessoa Física' },
        { 'id': 'JURIDIC', 'value': 'Pessoa Jurídica' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'company'
    ])
  },
  created () {
    this.getCompanyData().then(() => {
      this.companyForm = this.company.main
    })
  },
  methods: {
    ...mapActions([
      'saveCompanyData',
      'getCompanyData'
    ]),
    submitForm () {
      this.$refs.formCompany.validate(valid => {
        if (valid) {
          this.saveCompanyData(this.companyForm).then(() => {
            this.$notify({
              title: 'Successo',
              message: 'Dados atualizados com sucesso!',
              type: 'success',
              duration: 3000
            })
          })
        }
      })
    }
  }
}
</script>

<style>
.el-form-item__label {
  margin-bottom: -10px;
}

.el-form-item {
  margin-bottom: 5px !important;
}
</style>
