import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Element } from 'components/atoms/Element/Element';
import { FormButton } from 'components/atoms/FormButton/FormButton';
import { StyledText } from 'components/atoms/StyledText/StyledText';
import { deleteDebts } from 'store/actions';
import { useNavigate } from 'react-router-dom';

const DeleteDebt = () => {
  const { id } = useParams();
  const selectDebt = useSelector((state) => state.debts.filter((debt) => debt.id == id)[0]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(deleteDebts(id));
    navigate('/');
  };

  return (
    <>
      <Element>
        <StyledText>
          Czy na pewno chcesz usunąć dłuznika "{selectDebt.name}" razem z całą jego historią?
        </StyledText>
      </Element>
      <FormButton onPress={handleOnClick}>Usuń</FormButton>
    </>
  );
};

export default DeleteDebt;
