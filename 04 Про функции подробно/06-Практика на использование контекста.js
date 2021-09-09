const supporter1 = {
    club: 'Milan',
    
    chant() {
        setTimeout(() => console.log('Forza', this.club))
    }
}

const supporter2 = {
    club: 'Inter'
}
supporter2.chant = supporter1.chant.bind(supporter2);