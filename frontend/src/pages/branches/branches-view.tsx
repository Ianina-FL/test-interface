import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from '../../stores/hooks';
import { useRouter } from 'next/router';
import { fetch } from '../../stores/branches/branchesSlice';
import { saveFile } from '../../helpers/fileSaver';
import dataFormatter from '../../helpers/dataFormatter';
import ImageField from '../../components/ImageField';
import LayoutAuthenticated from '../../layouts/Authenticated';
import { getPageTitle } from '../../config';
import SectionTitleLineWithButton from '../../components/SectionTitleLineWithButton';
import SectionMain from '../../components/SectionMain';
import CardBox from '../../components/CardBox';
import BaseButton from '../../components/BaseButton';
import BaseDivider from '../../components/BaseDivider';
import { mdiChartTimelineVariant } from '@mdi/js';
import { SwitchField } from '../../components/SwitchField';
import FormField from '../../components/FormField';

import { hasPermission } from '../../helpers/userPermissions';

const BranchesView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { branches } = useAppSelector((state) => state.branches);

  const { currentUser } = useAppSelector((state) => state.auth);

  const { id } = router.query;

  function removeLastCharacter(str) {
    console.log(str, `str`);
    return str.slice(0, -1);
  }

  useEffect(() => {
    dispatch(fetch({ id }));
  }, [dispatch, id]);

  return (
    <>
      <Head>
        <title>{getPageTitle('View branches')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton
          icon={mdiChartTimelineVariant}
          title={removeLastCharacter('View branches')}
          main
        >
          {''}
        </SectionTitleLineWithButton>
        <CardBox>
          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>Name</p>
            <p>{branches?.name}</p>
          </div>

          <FormField label='Multi Text' hasTextareaHeight>
            <textarea className={'w-full'} disabled value={branches?.address} />
          </FormField>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>PhoneNumber</p>
            <p>{branches?.phone_number}</p>
          </div>

          <div className={'mb-4'}>
            <p className={'block font-bold mb-2'}>branch</p>

            <p>{branches?.branch?.name ?? 'No data'}</p>
          </div>

          <>
            <p className={'block font-bold mb-2'}>Metrics Branch</p>
            <CardBox
              className='mb-6 border border-gray-300 rounded overflow-hidden'
              hasTable
            >
              <div className='overflow-x-auto'>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>

                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {branches.metrics_branch &&
                      Array.isArray(branches.metrics_branch) &&
                      branches.metrics_branch.map((item: any) => (
                        <tr
                          key={item.id}
                          onClick={() =>
                            router.push(`/metrics/metrics-view/?id=${item.id}`)
                          }
                        >
                          <td data-label='name'>{item.name}</td>

                          <td data-label='value'>{item.value}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {!branches?.metrics_branch?.length && (
                <div className={'text-center py-4'}>No data</div>
              )}
            </CardBox>
          </>

          <BaseDivider />

          <BaseButton
            color='info'
            label='Back'
            onClick={() => router.push('/branches/branches-list')}
          />
        </CardBox>
      </SectionMain>
    </>
  );
};

BranchesView.getLayout = function getLayout(page: ReactElement) {
  return (
    <LayoutAuthenticated permission={'READ_BRANCHES'}>
      {page}
    </LayoutAuthenticated>
  );
};

export default BranchesView;
