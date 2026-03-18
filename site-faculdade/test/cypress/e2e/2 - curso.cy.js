describe("Teste referentes a pagina de cursos", () => {

    beforeEach(() => {
        cy.visit("http://localhost:5501/cursos.html")
    })

    it("Validar ordenaçao dos cursos", () => {
        cy.get("th").contains("Cursos").click()
        cy.get("th").contains("Cursos").click()
        cy.get("th").contains("Cursos").click()
        cy.get("table tbody tr:first-child td:first-child").should("contain", "Administração")
    })

    it("Validar filtro dos cursos", () => {
        cy.get("input[type=search]").type("Ciências da Computação")
        cy.get("table tbody tr").should("have.length", 1)
    })

        it("Validar filtro por semestre", () => {
        cy.get("input[type=search]").type("6 semestres")
        cy.get("table tbody tr").should("have.length", 2)
    })

})