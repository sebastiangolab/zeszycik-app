export const getDebtsWithoutId = (debts, id) => debts.filter((debt) => debt.id != id);

export const getSelectDebt = (debts, id) => debts.find(debt => debt.id == id);

export const getCurrentDate = () => {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return dd + '.' + mm + '.' + yyyy;
}