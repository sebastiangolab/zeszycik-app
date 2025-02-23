import React from 'react';
import { useParams } from 'react-router-native';
import { useSelector } from 'react-redux';
import { DebtLabel } from 'components/atoms/DebtLabel/DebtLabel';
import { EditForm } from 'components/organisms/EditForm/EditForm';

const EditDebt = () => {
    const { id } = useParams();
    const selectDebt = useSelector((state) => state.debts.filter((debt) => debt.id == id)[0]);

    return (
        <>
            <DebtLabel debtorName={selectDebt.name} debtValue={selectDebt.value} />
            <EditForm id={id} />
        </>
    )
};

export default EditDebt;