<template>
  <div class="login-box">
    <div class="login-logo">
      <b>Admin</b>LTE
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Informe suas credenciais</p>
      <el-form ref="formLogin" :model="loginForm" :rules="loginRules">
        <el-form-item prop="username">
                <span class="svg-container">
                </span>
          <el-input
            ref="email"
            v-model="loginForm.email"
            placeholder="Email"
            name="email"
            type="text"
          />
        </el-form-item>
        <el-form-item prop="password">
                    <span class="svg-container">
                    </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="Senha"
            name="password"
          />
        </el-form-item>
        <div class="row">
          <div class="col-xs-8">
            <lte-checkbox text="Lembra de mim"></lte-checkbox>
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <lte-button :isFlat="true" theme="primary" align="right" name="Login" @click.native.prevent="handleLogin"></lte-button>
          </div>
        </div>
      </el-form>
      <a href="#">Esqueci a senha</a><br>
    </div>
  </div>
</template>

<script>
import LteInputGroup from '../../components/form/LteInputGroup'
import LteCheckBox from '../../components/form/LteCheckBox'
import LteButton from '../../components/LteButton'
import { mapActions } from 'vuex'
import store from '../../vuex/store'

export default {
  name: 'login',
  components: {
    'lte-input-group': LteInputGroup,
    'lte-checkbox': LteCheckBox,
    'lte-button': LteButton
  },
  data () {
    const validateEmail = (rule, value, callback) => {
      if (!validateEmail(value)) {
        callback(new Error('Por favor insira um email válido.'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error('A senha não pode ter menos que 3 caracteres.'))
      } else {
        callback()
      }
    }
    return {
      passwordType: 'password',
      loginForm: {
        email: 'admin@email.com',
        password: '123'
      },
      loginRules: {
        email: [{ required: true, trigger: 'blur', validator: validateEmail }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      }
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    handleLogin () {
      this.$refs.formLogin.validate(valid => {
        if (valid) {
          this.login(this.loginForm).then(() => {
            // TODO resolver problema ao redirecionar para o dashboard
            location.reload(true)
          })
        }
      })
    }
  },
  store
}
</script>
