import styled from 'styled-components';

export const PhoneBook = styled('div')(() => {
  return {
    margin: '30px auto',
    width: 500,
    '& form': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 10,
      margin: '15px 0',
      padding: 10,
      border: '1px solid black',
    },
    '& h2': { marginBottom: 15 },
    '& ul': {
      marginTop: 15,
      paddingLeft: 30,
    },
    '& li': {
      margin: '8px 0',
    },
    '& li p': {
      display: 'inline-block',
      marginRight: 10,
    },

    '& button': {
      display: 'inline-block',
      outline: 0,
      appearance: 'none',
      padding: '0px 12px',
      borderRadius: '4px',
      textDecoration: 'none',
      cursor: 'pointer',
      backgroundColor: 'rgb(249, 251, 250)',
      border: '1px solid rgb(137, 151, 155)',
      boxShadow: 'rgb(6 22 33 / 30%) 0px 1px 2px',
      color: 'rgb(61, 79, 88)',
      fontSize: '14px',
      fontWeight: 400,
      height: '36px',
      transition: 'all 150ms ease-in-out 0s',
      '&:hover': {
        color: 'rgb(61, 79, 88)',
        backgroundColor: 'rgb(255, 255, 255)',
        border: '1px solid rgb(93, 108, 116)',
        boxShadow:
          'rgb(0 0 0 / 30%) 0px 4px 4px, rgb(231 238 236) 0px 0px 0px 3px',
      },
    },
    '& li button': {
      height: 18,
      fontSize: '12px',
    },
  };
});
