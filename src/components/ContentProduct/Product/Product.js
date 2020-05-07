import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'product',
  props: {
    id: Number,
    name: String,
    value: Number,
    image: String
  },
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    ...mapGetters({
      fortuneFree: 'fortuneFree'
    }),
    classBtnDanger() {
      return this.quantity == 0 ? null : 'product__actions__btn--danger'
    },
    classBtnSuccess() {
      return this.fortuneFree < this.value ? null : 'product__actions__btn--success'
    }
  },
  methods: {
    ...mapMutations(['setProduct']),
    buy() {
      if (this.fortuneFree > this.value) {
        this.quantity++

        this.setProduct({
          id: this.id,
          name: this.name,
          value: this.value,
          image: this.image,
          quantity: this.quantity
        })
      }
    },
    sell() {
      if (this.quantity > 0) {
        this.quantity--

        this.setProduct({
          id: this.id,
          name: this.name,
          value: this.value,
          image: this.image,
          quantity: this.quantity
        })
      }
    },
    onInputChange() {
      const subTotal = this.value * this.quantity;
      if (subTotal > this.fortuneFree) {
        this.quantity = parseInt(this.fortuneFree / this.value)
      }

      this.setProduct({
        id: this.id,
        name: this.name,
        value: this.value,
        image: this.image,
        quantity: this.quantity
      })
    }
  }
}


