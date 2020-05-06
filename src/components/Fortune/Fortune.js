import { mapGetters } from 'vuex'

export default {
  name: 'fortune',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      fortuneFree: 'fortuneFree'
    }),
  }
}


