<template>
  <row>
    <column classe="col-md-12">
      <box
        title="Dados da empresa"
        theme="box-primary"
        :isBorder="true"
        widgetType="">
        <div slot="content">
          <form>
            <input-group
              title="Nome"
              id="nome"
              type="text"
              placeholder="Informe o nome da empresa"
            >
            </input-group>
            <div slot="footer">
              <lte-button :isBlock="false" theme="info" align="right" name="Salvar"></lte-button>
              <lte-button :isBlock="false" align="right" name="Voltar"></lte-button>
            </div>
          </form>
        </div>
      </box>
    </column>
  </row>
</template>

<script>
import Box from '../../widgets/Box'
import InputGroup from '../../components/form/InputGroup'
import CheckBox from '../../components/form/CheckBox'
import LteButton from '../../components/LteButton'

export default {
  name: 'config-empresa',
  components: {
    'box': Box,
    'input-group': InputGroup,
    'checkbox': CheckBox,
    'lte-button': LteButton
  }
}
</script>

<style scoped>

</style>
