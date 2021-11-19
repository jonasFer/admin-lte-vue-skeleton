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
            <row>
              <column classe="col-md-8 col-xs-12">
                <lte-input-group
                  title="Nome"
                  id="nome"
                  type="text"
                />
              </column>
              <column classe="col-md-4 col-xs-12">
                <lte-input-group
                  title="Sigla"
                  id="sigla"
                  type="text"
                />
              </column>
            </row>
            <div slot="footer">
              <lte-button :isBlock="false" theme="info" align="right" name="Salvar"></lte-button>
            </div>
          </form>
        </div>
      </box>
    </column>
  </row>
</template>

<script>
import Box from '../../widgets/Box'
import LteInputGroup from '../../components/form/LteInputGroup'
import LteButton from '../../components/LteButton'

export default {
  name: 'config-empresa',
  components: {
    'box': Box,
    'lte-input-group': LteInputGroup,
    'lte-button': LteButton
  },
  created () {
  }
}
</script>
