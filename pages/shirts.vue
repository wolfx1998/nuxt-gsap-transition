    <template>
      <div class="clothrack">
        <h1 class="element-1">Get a Shirt Today!</h1>
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