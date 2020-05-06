import { mapMutations } from 'vuex'

export default {
  name: 'top',
  data () {
    return {
      billionaires: [
        {
          name: 'Bill Gates',
          photo: '/images/billgates.png',
          fortune: 98000000000
        },
        {
          name: 'Jeff Bezos',
          photo: '/images/jeffbezos.png',
          fortune: 113000000000
        },
        {
          name: 'Mark Zuckerberg',
          photo: '/images/markzuckerberg.png',
          fortune: 54700000000
        }
      ],
      currentBillionairIndex: 0,
    }
  },
  computed: {
    
    currentBillionair() {
      return this.billionaires[this.currentBillionairIndex]
    }
  },
  mounted () {
    this.setFortune()
  },
  methods: {
    ...mapMutations(['setFortuneTotal']),
    setFortune() {
      this.setFortuneTotal(this.currentBillionair.fortune)
    }
  }
}


