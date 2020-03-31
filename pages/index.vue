    <template>
      <div class="clothrack">
        <h1 id="header" class="element-1">Welcome to Hommes, What do you want to sew?</h1>
      </div>
    </template>
 
<script>
import transitions from '../plugins/transitions'
export default {
  transition(to, from) {
    return transitions.fade
  }
}
</script>