    <template>
      <div class="clothrack">
        <h1 class="element-1">Get Some Trousers Today!</h1>
        <h1 class="element-1">Get Some Trousers Today!</h1>
      </div>
    </template>
        <!-- <script>
export default {
  asyncData () {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({ name: 'world' })
      }, 1000)
    })
  }
}
</script> -->

<script>
import transitions from '../plugins/transitions'
export default {
  transition(to, from) {
    return transitions.fade
  }
}
</script>
