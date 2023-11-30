import Image from 'next/image';
import React from 'react';
import * as S from './style';

const Profile = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ProfileContainer>
          <Image src="/images/profile/photo.png" alt="profile" fill />
        </S.ProfileContainer>
      </S.Wrapper>
      <S.AddressWrapper>
        <ul>
          <li>e-mail: jshaha0911@gmail.com</li>
          <li>
            github:{' '}
            <a href="https://github.com/js-ha" target="_blank">
              https://github.com/js-ha
            </a>
          </li>
        </ul>
      </S.AddressWrapper>
    </S.Container>
  );
};

export default Profile;
